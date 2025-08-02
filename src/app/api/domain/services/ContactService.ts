import { ActionDispatch } from "react";
import Contact from "@/app/api/domain/entities/Contact";

export type ContactErrorDispatcher = ActionDispatch<
  [
    action: {
      type: "name" | "company" | "email" | "message";
      payload: {
        error: boolean;
      };
    },
  ]
>;

export class ContactService {
  private readonly contact: Contact;
  private readonly endpoint: string = "/api/firestore/contacts";

  constructor(formData: FormData) {
    this.contact = new Contact(
      String(formData.get("name") as string),
      String(formData.get("company") as string),
      String(formData.get("email") as string),
      String(formData.get("message") as string)
    );
  }

  private validate(dispatchError: ContactErrorDispatcher) {
    const { name, company, email, message } = this.contact;
    let result = true;
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (!regex.test(email)) {
      dispatchError({ type: "email", payload: { error: true } });
      result = false;
    }
    if (!name || name.length === 0) {
      dispatchError({ type: "name", payload: { error: true } });
      result = false;
    }
    if (!company || company.length === 0) {
      dispatchError({ type: "company", payload: { error: true } });
      result = false;
    }
    if (!message || message.length === 0) {
      dispatchError({ type: "message", payload: { error: true } });
      result = false;
    }
    return result;
  }

  private async create() {
    return fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(this.contact),
    });
  }

  async submit(dispatchError: ContactErrorDispatcher) {
    if (!this.validate(dispatchError)) return { success: false };
    try {
      const res = await this.create();

      if (res.status !== 201 || !res.ok) {
        throw new Error("An error occurred while sending the information.");
      }
      return { success: true };
    } catch {
      return { success: false };
    }
  }
}
