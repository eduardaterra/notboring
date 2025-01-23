import Image from "next/image";
import Input from "@/components/Input";
import "./styles.scss";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <div className="contact-form--overlay">
      <div className="contact-form--container">
        <div className="contact-form--close-button">
          <Image src="/close.svg" alt="close icon" fill />
        </div>
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
