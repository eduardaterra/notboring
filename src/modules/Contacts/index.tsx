"use client";
import { useState, type HTMLAttributes } from "react";
import Button from "@/components/Button";
import type { OfficeItemProps } from "./OfficeItem";
import OfficeItem from "./OfficeItem";
import ContactForm from "./ContactForm";

import "./styles.scss";

export interface ContactsProps extends HTMLAttributes<HTMLDivElement> {
  offices: OfficeItemProps[];
}

export default function Contacts({ offices }: Readonly<ContactsProps>) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="contacts--container">
      <div className="contacts--cta-container">
        <span className="contacts--text">
          If you have ideas for your brand, your business, or the world at
          large, we’re here to listen and collaborate.
        </span>
        <Button variant="red" onClick={() => setOpenForm(!openForm)}>
          Let&apos;s talk!
        </Button>
      </div>
      <div className="contacts--offices-container">
        {offices.map((office) => (
          <OfficeItem key={office.city} {...office} />
        ))}
      </div>
      <ContactForm openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
}
