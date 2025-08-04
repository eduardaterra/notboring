import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles.scss";

export async function generateMetadata(): Promise<Metadata> {
  const prismic = createClient();
  const document = await prismic.getByUID("landing_page", "first-lp");
  return {
    title:
      document.data.meta_title ?? "NOTBORING - A Creative Company | London UK",
    description:
      document.data.meta_description ??
      "Designers, strategists, and technologists building what moves people and business. We tune into culture and push it forward. No theatrics. Just work that works.",
    openGraph: {
      title:
        document.data.meta_title ??
        "NOTBORING - A Creative Company | London UK",
      description:
        document.data.meta_description ??
        "Designers, strategists, and technologists building what moves people and business. We tune into culture and push it forward. No theatrics. Just work that works.",
      images: [document.data.meta_image.url as string],
    },
  };
}

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
