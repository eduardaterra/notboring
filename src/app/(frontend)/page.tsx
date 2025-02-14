import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles.scss";

export default async function Home() {
  const prismic = createClient();
  const {
    data: { slices },
  } = await prismic.getByUID("landing_page", "first-lp");
  return (
    <main>
      <div className="home--content-container">
        <SliceZone slices={slices} components={components} />
      </div>
    </main>
  );
}
