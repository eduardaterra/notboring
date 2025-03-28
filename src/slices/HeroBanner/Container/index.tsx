import Image from "next/image";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useHeroBannerContext } from "../context";
import "./styles.scss";

export default function Container({ children }: Readonly<PropsWithChildren>) {
  const { handleExpand, isExpanded } = useHeroBannerContext();
  const expanded = isExpanded && "expanded";

  return (
    <div
      className={"hero-banner--container"}
      onClick={() => handleExpand(true)}
    >
      {children}
      <button
        className={clsx("hero-banner--video-close-btn", expanded)}
        onClick={(e) => {
          e.stopPropagation();
          handleExpand(false);
        }}
      >
        <Image src="/close.svg" alt="close icon" fill />
      </button>
    </div>
  );
}
