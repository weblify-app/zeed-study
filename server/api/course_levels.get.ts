import { cmsApi } from "../utils/cms-api";

export default defineEventHandler(async (_event) => {
  return await cmsApi<{data: NamedData[]}>("/items/course_levels");
})
