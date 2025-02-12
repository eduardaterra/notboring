import { HTMLAttributes } from "react";
import Image from "next/image";
import { Partners as IPartners } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";

type PartnersProps = IPartners & HTMLAttributes<HTMLDivElement>;

export default function Partners({
  title,
  description,
  partnersLogo,
}: PartnersProps) {
  return (
    <div className="partners--container">
      <div className="partners--text-container">
        <h3 className={`partners--title ${fontSecondary.className}`}>
          {title}
        </h3>
        <RichText data={description} className="partners--description" />
      </div>
      <div className="partners--grid-container">
        {partnersLogo?.map((image, index) => (
          <div className="partners--image-container" key={index}>
            {typeof image.logo !== "number" && image.logo.url ? (
              <Image src={image.logo.url} alt={image.logo.alt} fill />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
