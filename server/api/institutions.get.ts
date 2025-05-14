import { useCmsApi } from "../utils/useCmsApi";

export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  const result = await cmsApi<CmsResult<Institution[]>>("/items/Institutions", {
    params: {
      "filter[status][_eq]": "published",
      "fields[]": [
        "*",
        "country.*",
      ],
    },
  });

  if(result.error){
    return {
      success: false,
      error: result.error
    }
  }

  if(result.data.length > 0){
    return result;
  }

  return {
    success: false,
    error: "Institutions not found"
  }
});
