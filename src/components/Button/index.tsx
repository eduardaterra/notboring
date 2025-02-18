import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { fontSecondary } from "@/styles/fonts";
import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "red" | "black";
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={clsx(`button--${variant}`, fontSecondary.className, className)}
      {...props}
    >
      {children}
    </button>
  );
}
