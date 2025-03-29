import { useCmsApi } from "../utils/useCmsApi";

export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  const result = await cmsApi<CmsFilterResult<CmsPageContent>>("/items/pages", {
    params: {
      'filter[url_slug][_eq]': 'home',
      'filter[status][_eq]': 'published',
    }
  });
  if(result.data.length > 0){
    return result.data[0];
  }

  return {
    success: false,
    error: "Page not found"
  }
})
