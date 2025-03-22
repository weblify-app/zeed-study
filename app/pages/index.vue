<script setup lang="ts">
definePageMeta({
  layout: 'home-page-layout'
});


</script>
<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">
      Nuxt UI v3
    </h1>

    <div class="flex items-center gap-2">
      Home page
      <NuxtLink to="/institutions" class="text-(--ui-primary)">
        Institutions
      </NuxtLink>
    </div>
  </div>
</template>
