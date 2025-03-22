
export default defineEventHandler(async (event)=> {
    return $fetch("https://cms.zeedi.co/items/Institutions?filter[status][_eq]=published");
})