export default defineEventHandler(async (_event) => {
  return await $fetch<{data: Country[]}>("https://cms.zeedi.co/items/countries");
})
