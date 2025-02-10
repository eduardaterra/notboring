import type { CollectionConfig } from "payload";
import { HeroBanner, About, Partners, Contacts } from "./blocks";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [HeroBanner, About, Partners, Contacts],
    },
  ],
};
