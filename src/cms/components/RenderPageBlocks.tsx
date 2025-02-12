import { blocks } from "@/cms/blocks";
import type { Page } from "@/payload-types";

const allBlocks = Object.entries(blocks.components).reduce(
  (acc, [key, value]) => {
    return { ...acc, [key.toLowerCase()]: value };
  },
  {}
) as Record<string, React.ComponentType<unknown>>;

export default function RenderPageBlocks({
  blocks,
}: {
  blocks: Page["blocks"];
}) {
  return blocks?.map((block) => {
    const BlockComponent = allBlocks[block.blockType];
    if (!BlockComponent) {
      return null;
    }
    return <BlockComponent key={block.id} {...block} />;
  });
}
