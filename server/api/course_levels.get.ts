import { useCmsApi } from "../utils/useCmsApi";

export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  return await cmsApi<{data: NamedData[]}>("/items/course_levels");
})
