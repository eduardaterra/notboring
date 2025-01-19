import Image from "next/image";
import { HTMLAttributes } from "react";
import "./styles.scss";

export default function HeroBanner({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="hero-banner--container" {...props}>
      <div className="hero-banner--logo-container">
        <Image
          className="hero-banner--logo-image"
          src="/vertical-logo.svg"
          alt="NotBoring logo"
          fill
        />
      </div>
    </div>
  );
}
