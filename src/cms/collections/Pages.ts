import type { CollectionConfig } from "payload";
import About from "../blocks/About/block";
import Contacts from "../blocks/Contacts/block";
import HeroBanner from "../blocks/HeroBanner/block";
import Partners from "../blocks/Partners/block";

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
      blocks: [About, Contacts, HeroBanner, Partners],
    },
  ],
};
