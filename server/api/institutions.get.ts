
export default defineEventHandler(async (_event)=> {
    return await $fetch("https://cms.zeedi.co/items/Institutions",{
        params:{
            'filter[status][_eq]':'published',
            'fields[]': '*.*,course_levels_offered.course_levels_id.*',
        }
    });
})