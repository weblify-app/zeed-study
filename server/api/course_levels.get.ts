export default defineEventHandler(async (_event) => {
  return await $fetch("https://cms.zeedi.co/items/course_levels");
})
