"use client";
import { useState, type HTMLAttributes } from "react";
import Button from "@/components/Button";
import type { OfficeItemProps } from "./OfficeItem";
import OfficeItem from "./OfficeItem";
import ContactForm from "./ContactForm";

import "./styles.scss";
import { Contacts as IContacts } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

type ContactsProps = HTMLAttributes<HTMLDivElement> & IContacts;

export default function Contacts({ offices, text }: Readonly<ContactsProps>) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="contacts--container">
      <div className="contacts--cta-container">
        <RichText data={text} className="contacts--text" />
        <Button variant="red" onClick={() => setOpenForm(!openForm)}>
          Let&apos;s talk!
        </Button>
      </div>
      <div className="contacts--offices-container">
        {offices?.map((office) => (
          <OfficeItem key={office.city} {...(office as OfficeItemProps)} />
        ))}
      </div>
      <ContactForm openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
}
