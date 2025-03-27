
export default defineEventHandler(async (_event)=> {
    return await $fetch("https://cms.zeedi.co/items/Institutions?filter[status][_eq]=published");
})