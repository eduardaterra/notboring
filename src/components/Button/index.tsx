import type { HTMLAttributes } from "react";
import { fontSecondary } from "@/app/fonts";
import "./styles.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
