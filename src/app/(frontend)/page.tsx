import "./styles.scss";
import RenderPageBlocks from "@/cms/components/RenderPageBlocks";
import payload from "@/clients/payloadClient";

export default async function Home() {
  const cms = await payload();
  const homeContent = await cms.findByID({
    collection: "pages",
    id: "1",
  });

  console.log(homeContent);

  return (
    <main>
      <div className="home--content-container">
        <RenderPageBlocks blocks={homeContent.blocks} />
      </div>
    </main>
  );
}
