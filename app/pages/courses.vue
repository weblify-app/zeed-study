<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

useHead({
  title: 'Courses',
  meta: [
    {
      name: 'description',
      content: 'List of courses'
    }
  ]
});

const {data: courses, error} = await useFetch('/api/courses', {key: 'courses'});

if(error.value){
  createError({statusCode: error.value.statusCode, statusMessage: error.value.message})
}

const columns: TableColumn<Course>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    size: 100
  },
  {
    accessorKey: 'course_level.name',
    header: 'Course Level',
  },
  {
    accessorKey: 'subjec_area.name',
    header: 'Subject Area',
  },
  {
    accessorKey: 'institution.name',
    header: 'Institution',
  }
];

const globalFilter = ref('');

</script>
<template>
  <div>
    <aside>
      <!-- <h2>Filter Courses</h2> -->
    </aside>
    <main>
      <UInput v-model="globalFilter" placeholder="Search" class="mb-4" />
      <UTable
        v-model:global-filter="globalFilter" 
        :data="courses?.data" 
        :columns="columns" 
        class="flex-1" 
      />
    </main>
    </div>
</template>