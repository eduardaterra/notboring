import { type FormEvent, useReducer, type HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { useScrollLock } from "@/hooks/useScrollLock";
import "./styles.scss";
import {
  ContactsErrorDispatcher,
  ContactsService,
} from "@/services/ContactsService";

const initialState = {
  name: { error: false },
  company: { error: false },
  email: { error: false },
  message: { error: false },
};

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  dispatchError: ContactsErrorDispatcher
) => {
  e.preventDefault();
  const service = new ContactsService(new FormData(e.currentTarget));
  const res = await service.submit(dispatchError);

  window.alert(res.success);
};

function reducer(
  state: typeof initialState,
  action: {
    type: "name" | "company" | "email" | "message";
    payload: { error: boolean };
  }
) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "company":
      return { ...state, company: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "message":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

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
  const [state, dispatchError] = useReducer(reducer, initialState);

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
        <div className="contact-form--content">
          <h3 className="contact-form--title">
            If you have ideas for your brand, your business, or the world at
            large, we’re here to listen and collaborate.
          </h3>
          <form
            onSubmit={(e) => {
              handleSubmit(e, dispatchError);
            }}
            method="post"
            id="contact-form"
          >
            <Input
              onChange={() => {
                if (state.name.error)
                  dispatchError({ type: "name", payload: { error: false } });
              }}
              type="text"
              maxLength={80}
              placeholder="Name"
              name="name"
              variant={state.name.error ? "error" : "default"}
            />
            <Input
              onChange={() => {
                if (state.company.error)
                  dispatchError({ type: "company", payload: { error: false } });
              }}
              type="text"
              maxLength={80}
              placeholder="Company"
              name="company"
              variant={state.company.error ? "error" : "default"}
            />
            <Input
              onChange={() => {
                if (state.email.error)
                  dispatchError({ type: "email", payload: { error: false } });
              }}
              type="email"
              maxLength={100}
              name="email"
              placeholder="Email"
              variant={state.email.error ? "error" : "default"}
            />
            <TextArea
              onChange={() => {
                if (state.message.error)
                  dispatchError({ type: "message", payload: { error: false } });
              }}
              name="message"
              maxLength={500}
              placeholder="How can we work together?"
              variant={state.message.error ? "error" : "default"}
            />
            <Button
              variant="black"
              type="submit"
              form="contact-form"
              value="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
