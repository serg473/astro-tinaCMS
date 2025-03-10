import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";

export default defineConfig({
  branch: "main",

  // Get this from tina.io
  clientId: "6c3cef89-f343-4c85-b64f-fd79a05d0067",
  // Get this from tina.io
  token: "23fd4b843fed80ba57cb63ecc4b977388bc4eb36",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [BlogCollection, PageCollection, GlobalConfigCollection],
  },
});
