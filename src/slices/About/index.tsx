import { HTMLAttributes } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";

type AboutProps = SliceComponentProps<Content.AboutSlice> &
  HTMLAttributes<HTMLDivElement>;
export default async function About({
  slice: {
    primary: { description, title },
  },
}: AboutProps) {
  return (
    <div className="about--container">
      <h3 className={`about--title ${fontSecondary.className}`}>{title}</h3>
      <span className="about--description">
        <PrismicRichText field={description} />
      </span>
    </div>
  );
}
