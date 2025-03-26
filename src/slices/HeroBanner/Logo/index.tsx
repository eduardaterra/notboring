import clsx from "clsx";
import Image from "next/image";
import { useHeroBannerContext } from "../context";
import "./styles.scss";

export default function Logo() {
  const { isExpanded } = useHeroBannerContext();
  const hidden = isExpanded && "hidden";

  return (
    <div className={clsx("hero-banner--logo-wrapper", hidden)}>
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
