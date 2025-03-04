import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";

export default defineConfig({
  branch: import.meta.env.PUBLIC_TINA_BRANCH,
  clientId: import.meta.env.PUBLIC_TINA_CLIENT_ID,
  token: import.meta.env.PUBLIC_TINA_TOKEN,

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
