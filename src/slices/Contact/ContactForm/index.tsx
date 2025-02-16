import type { HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { useScrollLock } from "@/hooks/useScrollLock";
import "./styles.scss";

interface ContactFormProps extends HTMLAttributes<HTMLDivElement> {
  openForm: boolean;
  setOpenForm: (value: boolean) => void;
}

export default function ContactForm({
  openForm,
  setOpenForm,
  ...props
}: Readonly<ContactFormProps>) {
  const { allowScroll } = useScrollLock();
  return (
    <div
      className={clsx("contact-form--overlay ", openForm && "open")}
      onClick={() => {
        setOpenForm(false);
        allowScroll();
      }}
      {...props}
    >
      <div
        className={clsx("contact-form--container", openForm && "open")}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="contact-form--close-button"
          onClick={() => {
            setOpenForm(false);
            allowScroll();
          }}
        >
          <Image src="/close.svg" alt="close icon" fill />
        </button>
        <form action="">
          <div className="contact-form--content">
            <h3 className="contact-form--title">
              If you have ideas for your brand, your business, or the world at
              large, we’re here to listen and collaborate.
            </h3>
            <Input variant="default" type="text" placeholder="Name" required />
            <Input
              variant="default"
              type="text"
              placeholder="Company"
              required
            />
            <Input
              variant="default"
              type="email"
              placeholder="Email"
              required
            />
            <TextArea
              variant="default"
              placeholder="How can we work together?"
            />
            <Button variant="black">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
