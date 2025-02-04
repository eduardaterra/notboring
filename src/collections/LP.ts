import type { CollectionConfig } from "payload";

export const LP: CollectionConfig = {
  slug: "lp",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    }
  ],
};
