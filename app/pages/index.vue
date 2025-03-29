<script setup lang="ts">

const {data} = await useFetch("/api/home", {key: 'home'});

</script>
<template>
  <div v-html="data.body">
  </div>
</template>
