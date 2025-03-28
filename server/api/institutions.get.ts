import { useCmsApi } from "../utils/useCmsApi";

export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  return await cmsApi("/items/Institutions", {
    params: {
      "filter[status][_eq]": "published",
      "fields[]": [
        "*",
        "country.*",
        "course_levels_offered.course_levels_id.*"
      ],
    },
  });
});
