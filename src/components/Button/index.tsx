import type { ButtonHTMLAttributes } from "react";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "red" | "black";
}

export default function Button({
  variant,
  children,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={`button--${variant} ${fontSecondary.className}`}
      {...props}
    >
      {children}
    </button>
  );
}
