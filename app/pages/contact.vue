<script lang="ts" setup>

const htmlContent = ref('loading...');
const {data, error} = await useFetch<CmsPageContent>("/api/pages/contact-us", {
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
  <div>
    <div v-html="htmlContent"></div> <!--eslint-disable-line-->
    <div class="mt-8">
      <form>
        <div class="flex flex-col gap-4">
          <UInput placeholder="Name" />
          <UInput placeholder="Email" />
          <UInput placeholder="Subject" />
          <UTextarea placeholder="Message" />
        </div>
        <UButton class="mt-4" color="primary">Submit</UButton>
      </form>
    </div>
  </div>
</template>
<style>

</style>