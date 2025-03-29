<script setup lang="ts">

const htmlContent = ref('loading...');

const {data, error} = await useFetch<CmsPageContent>("/api/pages/home", {
  key: 'home'
});

if(error.value){
  createError({statusCode: error.value.statusCode, statusMessage: error.value.message})
}

if(data.value){
  htmlContent.value = data.value.body
}

</script>
<template>
  <div v-html="htmlContent"></div> <!--eslint-disable-line-->
</template>
