import { ActionDispatch } from "react";

export type ContactsErrorDispatcher = ActionDispatch<
  [
    action: {
      type: "name" | "company" | "email" | "message";
      payload: {
        error: boolean;
      };
    },
  ]
>;

export class ContactsService {
  readonly name: string | null = null;
  readonly company: string | null = null;
  readonly email: string | null = null;
  readonly message: string | null = null;

  constructor(formData: FormData) {
    this.name = String(formData.get("name"));
    this.company = String(formData.get("company"));
    this.email = String(formData.get("email"));
    this.message = String(formData.get("message"));
  }

  private validate(dispatchError: ContactsErrorDispatcher) {
    let result = true;
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (!regex.test(this.email as string)) {
      dispatchError({ type: "email", payload: { error: true } });
      result = false;
    }
    if (!this.name || this.name.length === 0) {
      dispatchError({ type: "name", payload: { error: true } });
      result = false;
    }
    if (!this.company || this.company.length === 0) {
      dispatchError({ type: "company", payload: { error: true } });
      result = false;
    }
    if (!this.message || this.message.length === 0) {
      dispatchError({ type: "message", payload: { error: true } });
      result = false;
    }
    return result;
  }

  private async createContact() {
    const data = {
      name: this.name,
      company: this.company,
      email: this.email,
      message: this.message,
    };

    return fetch("/api/firestore/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async submit(dispatchError: ContactsErrorDispatcher) {
    if (!this.validate(dispatchError)) return { success: false };
    try {
      const res = await this.createContact();

      if (res.status !== 201 || !res.ok) {
        throw new Error("An error occurred while sending the information.");
      }
      return { success: true };
    } catch {
      return { success: false };
    }
  }
}
