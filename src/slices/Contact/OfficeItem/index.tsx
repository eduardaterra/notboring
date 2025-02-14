import Image from "next/image";
import "./styles.scss";
import { Content } from "@prismicio/client";
import { Simplify } from "../../../../prismicio-types";

type OfficeItemProps = Simplify<Content.ContactSliceDefaultPrimaryOfficesItem>;

export default function OfficeItem({
  address,
  city,
  phone,
  iamge,
}: Readonly<OfficeItemProps>) {
  return (
    <div className="office-item--container">
      <div className="office-item--image-container">
        {iamge?.url ? (
          <Image src={iamge?.url} alt={city as string} fill />
        ) : null}
      </div>
      <div className="office-item--text-container">
        <h3 className="office-item--city">{city}</h3>
        <p className="office-item--address">{address}</p>
        <p className="office-item--phone">{phone}</p>
      </div>
    </div>
  );
}
