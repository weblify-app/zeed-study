import { useCmsApi } from "../utils/useCmsApi";

export default defineEventHandler(async (_event) => {
  const cmsApi = useCmsApi();
  return cmsApi<HtmlContentData>("/items/pages/2");
})
