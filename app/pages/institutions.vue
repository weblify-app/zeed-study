<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
const { data } = await useFetch<Institutions>('/api/institutions');
const institutions = ref(data.value?.data);
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
  <div class="flex gap-4">
    <aside>
      <h2>Filter Insitutions</h2>
      <div>
        <label for="country">Country</label>
        <select id="country">
          <option value="all">All</option>
          <option value="nigeria">Nigeria</option>
          <option value="ghana">Ghana</option>
          <option value="kenya">Kenya</option>
        </select>
      </div>
    </aside>
    <main>
      <h1>Institutions</h1>
      <div class="grid grid-cols-3 gap-4">
        <UCard v-for="institution in institutions" :key="institution.id">
          <template #header>
            {{ institution.name }}
          </template>
          <img :src="`https://cms.zeedi.co/assets/${institution.logo}`" alt="institution logo"
            class="max-w-20 max-h-20 rounded-full" />
          {{ institution.country }}
        </UCard>
      </div>
    </main>
  </div>
</template>