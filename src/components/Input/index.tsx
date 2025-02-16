import type { InputHTMLAttributes } from "react";
import "./styles.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: "default" | "error";
}

export default function Input({ variant, ...props }: Readonly<InputProps>) {
  return <input className={`input--${variant}`} {...props} />;
}
