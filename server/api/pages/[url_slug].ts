export default defineEventHandler(async (event) => {
  const url_slug = getRouterParam(event, 'url_slug');

  const cmsApi = useCmsApi();

  const result = await cmsApi<CmsResult<CmsPageContent>>("/items/pages", {
    params: {
      'filter[url_slug][_eq]': url_slug,
      'filter[status][_eq]': 'published',
    }
  });

  if(result?.data.length > 0){
    return result.data[0];
  }

  return {
    success: false,
    body: "Error: Failed to load page content",
    error: "Page not found"
  }
})
