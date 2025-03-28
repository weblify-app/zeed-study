<script setup lang="ts">
const { data: institutions } = await useFetch<Institutions>('/api/institutions', {key: 'institutions'});
const { data: filterData, error } = await useAsyncData("filter-data", async () => {
  const [countries, course_levels] = await Promise.all([
    $fetch("/api/countries"),
    $fetch("/api/course_levels"),
  ]);
  return { countries, course_levels };
}, {
  transform: (data) => {
    data.countries.data.unshift({name: 'any', id: -1, sort: null});
    data.course_levels.data.unshift({name: 'any', id: -1, sort: null});
    return data;
  },
  getCachedData: (key, nuxtApp) =>{
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    return  data;
  },
});

const countries = computed(() => [filterData.value?.countries.data.map(country => country.name)]);
const course_levels = computed(() => filterData.value?.course_levels.data.map(level => level.name));

const filters = ref({
  name: '',
  country: '',
  course_level: '',
});

const filteredInstitutions = computed(() => {
  return institutions.value?.data.filter(institution => {
    const name = filters.value.name.length? institution.name.toLowerCase().includes(filters.value.name.toLowerCase()): true;
    const country = filters.value.country.length? true: institution.country.name === filters.value.country;
    const course_level = filters.value.course_level.length? true: institution.course_levels_offered.map(level => level.course_levels_id.name).includes(filters.value.course_level);
    return name && country && course_level;
  })
})

const resetFilters = () => {
  filters.value = {
    name: '',
    country: '',
    course_level: '',
  };
};

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
  <div class="flex gap-4 justify-center flex-col">
    <aside class="basis-14 flex-none grow-0">
      <UCard class="">
        <template #header>
          Filter Institutions:
        </template>
        <div class="space-y-4">
            <UInput v-model="filters.name" placeholder="Search instiution by name" size="md" class="w-full"/>
            <div class="flex gap-3 flex-row">
              <USelectMenu v-model="filters.country" :items="countries" placeholder="Filter by country" size="md" class="w-full"/>
              <USelectMenu v-model="filters.course_level" :items="course_levels" placeholder="Filter by course level" size="md" class="w-full"/>
            </div>
          <UButton color="secondary" variant="solid" class="w-full cursor-pointer" @click="resetFilters">Reset Filters</UButton>
        </div>
        <DevOnly><pre class="text-xs">{{ filters }} {{ useColorMode() }}</pre></DevOnly>
      </UCard>
    </aside>
    <main class="flex-1 grow">
      <div class="flex justify-between border-b-2 mb-4">
        <h1>Institutions</h1>
        <span class="text-sm font-light">Total: {{ institutions?.data.length }} institutions</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UCard
          v-for="institution in filteredInstitutions" :key="institution.id"
          
        >
          <template #header>
            {{ institution.name }}
          </template>
          <div class="flex flex-row text-sm font-thin">
            <div class="p-4">
              <img 
                :src="`https://cms.zeedi.co/assets/${institution.logo}`" alt="institution logo"
                class="max-w-20 max-h-20 rounded-full"
              >
            </div>
            <ul>
              <li><UIcon name="lucide:map-pin" /> {{ institution.country.name }}</li>
              <li><UIcon name="lucide:book-a" /> {{ institution.course_levels_offered.map(level => level.course_levels_id.name).join(', ') }}</li>
            </ul>
          </div>
        </UCard>
      </div>
    </main>
  </div>
</template>