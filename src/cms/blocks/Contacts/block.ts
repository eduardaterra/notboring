import type { Block } from "payload";

const Contacts: Block = {
  slug: "contacts",
  interfaceName: "Contacts",
  fields: [
    {
      type: "richText",
      name: "text",
      required: true,
    },
    {
      type: "array",
      name: "offices",
      fields: [
        {
          type: "relationship",
          name: "officeImage",
          required: true,
          relationTo: "media",
        },
        { type: "text", name: "city", required: true },
        { type: "text", name: "address", required: true },
        { type: "text", name: "phoneNumber", required: true },
      ],
    },
  ],
};

export default Contacts;
