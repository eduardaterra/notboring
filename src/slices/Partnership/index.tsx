import { HTMLAttributes } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";
import { Content } from "@prismicio/client";

type PartnersProps = SliceComponentProps<Content.PartnershipSlice> &
  HTMLAttributes<HTMLDivElement>;

export default function Partners({
  slice: {
    primary: { title, brands, description },
  },
}: PartnersProps) {
  return (
    <div className="partners--container">
      <div className="partners--text-container">
        <h3 className={`partners--title ${fontSecondary.className}`}>
          {title}
        </h3>
        <span className="partners--description">
          <PrismicRichText field={description} />
        </span>
      </div>
      <div className="partners--grid-container">
        {brands?.map((image, index) => (
          <div className="partners--image-container" key={index}>
            {typeof image.logo !== "number" && image.logo.url ? (
              <Image src={image.logo.url} alt={image.logo.alt ?? "logo"} fill />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
