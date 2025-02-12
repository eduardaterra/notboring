import { HTMLAttributes } from "react";
import { About as IAbout } from "@/payload-types";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";
import { RichText } from "@payloadcms/richtext-lexical/react";

type AboutProps = IAbout & HTMLAttributes<HTMLDivElement>;
export default async function About({ title, description }: AboutProps) {
  return (
    <div className="about--container">
      <h3 className={`about--title ${fontSecondary.className}`}>{title}</h3>
      <RichText data={description} className="about--description" />
    </div>
  );
}
