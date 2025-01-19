import Image from "next/image";
import { HTMLAttributes } from "react";
import "./styles.scss";

export interface OfficeItemProps extends HTMLAttributes<HTMLDivElement> {
  city: string;
  image: string;
  address: string;
  phone: string;
}

export default function OfficeItem({
  city,
  address,
  phone,
  image,
}: Readonly<OfficeItemProps>) {
  return (
    <div className="office-item--container">
      <div className="office-item--image-container">
        <Image src={image} alt="office" fill />
      </div>
      <div className="office-item--text-container">
        <h3 className="office-item--city">{city}</h3>
        <p className="office-item--address">{address}</p>
        <p className="office-item--phone">{phone}</p>
      </div>
    </div>
  );
}
