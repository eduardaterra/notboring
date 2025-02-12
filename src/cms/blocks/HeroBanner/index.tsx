"use client";
import { HTMLAttributes, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { HeroBanner as IHeroBanner } from "@/payload-types";
import "./styles.scss";

type HeroBannerProps = IHeroBanner & HTMLAttributes<HTMLDivElement>;

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

export default function HeroBanner({ video }: Readonly<HeroBannerProps>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const firstArray = createSquares(12, isExpanded, "first");
  const secondArray = createSquares(12, isExpanded, "second");

  return (
    <div
      className="hero-banner--container"
      onClick={() => setIsExpanded(!isExpanded)}
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
        <div className="hero-banner--video">
          <div
            className={clsx(
              "hero-banner--video-wrapper",
              isExpanded && "expanded"
            )}
          >
            {typeof video !== "number" && video.url ? (
              <video
                autoPlay
                loop
                muted
                preload="auto"

                // muted={!isExpanded}
              >
                <source src={video.url} type="video/mp4" />
              </video>
            ) : null}
          </div>
          <div
            className={clsx("hero-banner--play-icon", isExpanded && "hidden")}
          >
            <div className="hero-banner--play-icon-wrapper">
              <Image src="/play.svg" alt="play icon" fill />
            </div>
          </div>
        </div>

        <button
          className={clsx(
            "hero-banner--video-close-btn",
            isExpanded && "expanded"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Image src="/close.svg" alt="close icon" fill />
        </button>
      </div>
    </div>
  );
}
