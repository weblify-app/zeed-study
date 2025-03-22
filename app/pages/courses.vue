<script setup lang="ts">
useHead({
  title: 'Courses',
  meta: [
    {
      name: 'description',
      content: 'List of courses'
    }
  ]
});
</script>
<template>
  <div>
    <aside>
      <h2>Filter Courses</h2>
    </aside>


  <UCard>
    <div class="grid gap-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </UCard>
    </div>
</template>