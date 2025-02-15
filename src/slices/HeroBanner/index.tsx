"use client";
import Image from "next/image";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";
import { type SliceComponentProps } from "@prismicio/react";
import { type Content } from "@prismicio/client";
import Video from "./Video";
import "./styles.scss";

type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice> &
  HTMLAttributes<HTMLDivElement>;

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
  slice: {
    primary: { video },
  },
}: Readonly<HeroBannerProps>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const firstArray = createSquares(12, isExpanded, "first");
  const secondArray = createSquares(12, isExpanded, "second");

  return (
    <div
      className="hero-banner--container"
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
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
      <Video
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        video={video}
      />
    </div>
  );
}
