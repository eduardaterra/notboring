import type { TextareaHTMLAttributes } from "react";
import "./styles.scss";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: "default" | "error";
}

export default function TextArea({ variant, ...props }: TextAreaProps) {
  return <textarea className={`text-area--${variant}`} {...props} />;
}
