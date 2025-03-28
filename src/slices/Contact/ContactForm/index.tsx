import {
  type FormEvent,
  type JSX,
  type HTMLAttributes,
  useReducer,
  useState,
  useRef,
} from "react";
import clsx from "clsx";
import Image from "next/image";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { useScrollLock } from "@/hooks/useScrollLock";
import {
  ContactsErrorDispatcher,
  ContactsService,
} from "@/services/ContactsService";

import "./styles.scss";

const initialState = {
  name: { error: false },
  company: { error: false },
  email: { error: false },
  message: { error: false },
};

const btnContent: Record<FormStatus, JSX.Element | string> = {
  default: "Submit",
  success: (
    <>
      <Image src="/check.svg" height={24} width={24} alt="check sign" />
      Message Received!
    </>
  ),
  loading: (
    <>
      <Image
        src="/loading.svg"
        className="spinner"
        height={24}
        width={24}
        alt="loading sign"
      />
      loading...
    </>
  ),
  error: (
    <>
      <Image src="/alert.svg" height={20} width={20} alt="alert sign" />
      Sorry, something wrong happened.
    </>
  ),
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

type FormStatus = "default" | "loading" | "success" | "error";

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
  const [formStatus, setFormStatus] = useState<
    "default" | "loading" | "success" | "error"
  >("default");
  const formRef = useRef<HTMLFormElement>(null);
  const isInputDisabled = formStatus !== "default";

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    dispatchError: ContactsErrorDispatcher
  ) => {
    setFormStatus("loading");
    e.preventDefault();
    const service = new ContactsService(new FormData(e.currentTarget));
    const res = await service.submit(dispatchError);

    if (!res.success) {
      setFormStatus("error");
      const errorTimeout = setTimeout(() => setFormStatus("default"), 4000);
      return () => clearInterval(errorTimeout);
    }

    setFormStatus("success");

    const successTimeout = setTimeout(() => {
      setOpenForm(false);
      setFormStatus("default");
      formRef.current?.reset();
    }, 3500);
    return () => clearInterval(successTimeout);
  };

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
            ref={formRef}
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
              disabled={isInputDisabled}
              variant={state.name.error ? "error" : "default"}
            />
            <Input
              onChange={() => {
                if (state.company.error)
                  dispatchError({ type: "company", payload: { error: false } });
              }}
              type="text"
              maxLength={80}
              disabled={isInputDisabled}
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
              disabled={isInputDisabled}
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
              disabled={isInputDisabled}
              maxLength={500}
              placeholder="How can we work together?"
              variant={state.message.error ? "error" : "default"}
            />
            <Button
              variant="black"
              className={clsx(`contact-form--submit-button`, formStatus)}
              type="submit"
              form="contact-form"
              value="submit"
            >
              {btnContent[formStatus]}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
