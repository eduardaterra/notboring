import type { Block } from "payload";

const About: Block = {
  slug: "about",
  fields: [
    {
      type: "text",
      name: "title",
      required: true,
    },
    { type: "richText", name: "description", required: true },
  ],
};

export default About;
