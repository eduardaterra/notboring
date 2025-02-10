import type { Block } from "payload";

const HeroBanner: Block = {
  slug: "hero-banner",
  fields: [
    {
      type: "relationship",
      name: "video",
      relationTo: "media",
      required: true,
    },
  ],
};

export default HeroBanner;
