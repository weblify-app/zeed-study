import { cmsApi } from "../utils/cms-api";

export default defineEventHandler(async (_event)=> {
    return await cmsApi("/items/Institutions",{
        params:{
            'filter[status][_eq]':'published',
            'fields[]': '*.*,course_levels_offered.course_levels_id.*',
        }
    });
})