import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";

export default defineConfig({
  branch: "main",
  clientId: "1de24bf3-0670-4af7-ac85-0cfca3ad7902",
  token: "6895fa6c887cb4d203ced878326e6908c6fbc55a",

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
