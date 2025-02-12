import Image from "next/image";
import { HTMLAttributes } from "react";
import "./styles.scss";
import { Media } from "@/payload-types";

export interface OfficeItemProps extends HTMLAttributes<HTMLDivElement> {
  officeImage: Media;
  city: string;
  address: string;
  phoneNumber: string;
}

export default function OfficeItem({
  city,
  address,
  phoneNumber,
  officeImage,
}: Readonly<OfficeItemProps>) {
  return (
    <div className="office-item--container">
      <div className="office-item--image-container">
        {officeImage?.url ? (
          <Image src={officeImage?.url} alt={officeImage.alt} fill />
        ) : null}
      </div>
      <div className="office-item--text-container">
        <h3 className="office-item--city">{city}</h3>
        <p className="office-item--address">{address}</p>
        <p className="office-item--phone">{phoneNumber}</p>
      </div>
    </div>
  );
}
