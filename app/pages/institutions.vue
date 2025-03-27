<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
const { data: institutions } = await useFetch<Institutions>('/api/institutions');
const { data: filterData, error } = await useAsyncData("filter-data", async () => {
  const [countries, course_levels] = await Promise.all([
    $fetch("/api/countries"),
    $fetch("/api/course_levels"),
  ]);
  return { countries, course_levels };
}, {
  getCachedData: (key, nuxtApp) =>{
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    return  data;
  },
});

const countries = computed(() => filterData.value?.countries.data.map(country => country.name));
const course_levels = computed(() => filterData.value?.course_levels.data.map(level => level.name));

const filters = ref({
  country: 'any',
});

useHead({
  title: 'Institutions',
  meta: [
    {
      name: 'description',
      content: 'List of institutions'
    }
  ]
});
</script>

<template>
  <div class="flex gap-4 justify-center flex-col md:flex-row">
    <aside class="min-w-2xs">
      <UCard class="p-4 border-1 rounded-lg">
        <template #header>
          Filter Institutions:
        </template>
        <div>
          <UFormField label="By country:" size="xl">
            <USelectMenu v-model="filters.country" :items="countries" size="xl"/>
          </UFormField>
        </div>
        {{ filters }}
      </UCard>
    </aside>
    <main>
      <div class="flex justify-between border-b-2 mb-4">
        <h1>Institutions</h1>
        <span>Total: {{ institutions?.data.length }} institutions</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UCard
          v-for="institution in institutions?.data" :key="institution.id"
          
        >
          <template #header>
            {{ institution.name }}
          </template>
          <img 
            :src="`https://cms.zeedi.co/assets/${institution.logo}`" alt="institution logo"
            class="max-w-20 max-h-20 rounded-full"
          >
          {{ institution.country }}
        </UCard>
      </div>
    </main>
  </div>
</template>