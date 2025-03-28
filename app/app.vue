<script setup lang="ts">
import TopNavbar from '~/components/TopNavbar.vue';
const colorMode = useColorMode();
colorMode.preference = 'light';
</script>
<template>
  <UApp>
    <!-- <NuxtLoadingIndicator/> -->
    <header>
      <TopNavbar />
    </header>
    <main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </UApp>
</template>

<style scoped>
header, main {
  max-width: 1024px;
  margin: 0 auto;
}

main {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(3.6px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  padding: 20px;
  margin-top: 20px;
}
</style>