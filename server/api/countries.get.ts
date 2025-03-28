export default defineEventHandler(async (_event) => {
  return await $fetch<{data: NamedData[]}>("https://cms.zeedi.co/items/countries");
})
