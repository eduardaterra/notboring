import RenderPageBlocks from "@/cms/components/RenderPageBlocks";
import payload from "@/clients/payloadClient";
import "./styles.scss";

export default async function Home() {
  const cms = await payload();
  const homeContent = await cms.findByID({
    collection: "pages",
    id: "1",
  });

  return (
    <main>
      <div className="home--content-container">
        <RenderPageBlocks blocks={homeContent.blocks} />
      </div>
    </main>
  );
}
