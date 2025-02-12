import type { Block } from "payload";

const Partners: Block = {
  slug: "partners",
  interfaceName: "Partners",
  fields: [
    { type: "text", name: "title", required: true },
    { type: "richText", name: "description", required: true },
    {
      type: "array",
      name: "partnersLogo",
      fields: [
        {
          type: "relationship",
          name: "logo",
          required: true,
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Partners;
