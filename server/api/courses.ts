export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  const result = await cmsApi<CmsResult<Course[]>>("/items/Courses", {
    params: {
      "filter[status][_eq]": "published",
      "fields[]": [
        "*.*",
        // "institutions.*",
        // "subject_area.*"
      ],
    },
  });
  return result;
});
