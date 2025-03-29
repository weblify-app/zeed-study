import type { NuxtApp } from "nuxt/app";

export const getPageData = (key: string, app: NuxtApp) => {
  const data = app.payload.data[key] || app.static.data[key];
  return data;
}