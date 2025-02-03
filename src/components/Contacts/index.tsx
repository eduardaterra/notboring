import type { HTMLAttributes } from "react";
import type { OfficeItemProps } from "./OfficeItem";
import OfficeItem from "./OfficeItem";
import ContactForm from "./ContactForm";
import Button from "../Button";

import "./styles.scss";

export interface ContactsProps extends HTMLAttributes<HTMLDivElement> {
  offices: OfficeItemProps[];
}

export default function Contacts({ offices }: Readonly<ContactsProps>) {
  return (
    <div className="contacts--container">
      <div className="contacts--cta-container">
        <span className="contacts--text">
          If you have ideas for your brand, your business, or the world at
          large, we’re here to listen and collaborate.
        </span>
        <Button variant="red">Let&apos;s talk!</Button>
      </div>
      <div className="contacts--offices-container">
        {offices.map((office) => (
          <OfficeItem key={office.city} {...office} />
        ))}
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}
