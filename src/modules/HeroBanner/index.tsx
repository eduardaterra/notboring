"use client";
import Image from "next/image";
import clsx from "clsx";
import { HTMLAttributes, useState } from "react";
import "./styles.scss";

const createSquares = (quantity: number, visible: boolean, position: string) =>
  Array.from({ length: quantity }, (_, i) => (
    <div
      key={i}
      className={clsx(
        `hero-banner--${position}-square-item`,
        visible ? "hidden" : "default"
      )}
    />
  ));

export default function HeroBanner({
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const firstArray = createSquares(12, isExpanded, "first");
  const secondArray = createSquares(12, isExpanded, "second");

  return (
    <div
      className="hero-banner--container"
      onClick={() => setIsExpanded(!isExpanded)}
      {...props}
    >
      <div
        className={clsx("hero-banner--logo-wrapper", isExpanded && "hidden")}
      >
        <div className="hero-banner--logo-container">
          <Image
            className="hero-banner--logo-image"
            src="/vertical-logo.svg"
            alt="NotBoring logo"
            fill
          />
        </div>
      </div>
      <div
        className={clsx(
          "hero-banner--first-square-wrapper",
          isExpanded && "hidden"
        )}
      >
        <div className="hero-banner--first-square-container">
          {...firstArray}
        </div>
      </div>
      <div
        className={clsx(
          "hero-banner--second-square-wrapper",
          isExpanded && "hidden"
        )}
      >
        <div className="hero-banner--second-square-container">
          {...secondArray}
        </div>
      </div>
      <div
        className={clsx(
          "hero-banner--video-container",
          isExpanded && "expanded"
        )}
      >
        <div
          className={clsx("hero-banner--video", isExpanded && "expanded")}
        >
          <div className="center"></div>
        </div>
      </div>
    </div>
  );
}
