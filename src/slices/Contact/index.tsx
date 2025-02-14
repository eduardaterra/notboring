"use client";
import { useState, type HTMLAttributes } from "react";
import Button from "@/components/Button";
import OfficeItem from "./OfficeItem";
import ContactForm from "./ContactForm";

import "./styles.scss";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

type ContactsProps = HTMLAttributes<HTMLDivElement> &
  SliceComponentProps<Content.ContactSlice>;

export default function Contacts({
  slice: {
    primary: { description, offices },
  },
}: Readonly<ContactsProps>) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="contacts--container">
      <div className="contacts--cta-container">
        <span className="contacts--text">
          <PrismicRichText field={description} />
        </span>
        <Button variant="red" onClick={() => setOpenForm(!openForm)}>
          Let&apos;s talk!
        </Button>
      </div>
      <div className="contacts--offices-container">
        {offices?.map((office) => <OfficeItem key={office.city} {...office} />)}
      </div>
      <ContactForm openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
}
