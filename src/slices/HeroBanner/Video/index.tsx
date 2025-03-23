import { useLayoutEffect, useState, type HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import { type Content } from "@prismicio/client";
import { useHeroBannerContext } from "../context";
import "./styles.scss";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  video: Content.HeroBannerSliceDefaultPrimary["video"];
}

export default function Video({ video }: Readonly<VideoProps>) {
  const { isExpanded, orientation } = useHeroBannerContext();
  const [canLoadControls, setCanLoadControls] = useState(false);

  useLayoutEffect(() => {
    if (isExpanded) {
      const timeout = setTimeout(() => setCanLoadControls(true), 1000);
      return () => clearTimeout(timeout);
    }
    setCanLoadControls(false);
  }, [isExpanded]);

  return (
    <div
      className={clsx(
        "hero-banner--video-container",
        isExpanded && "expanded",
        orientation
      )}
      onClick={(e) => {
        if (isExpanded) {
          e.stopPropagation();
        }
      }}
    >
      <div className="hero-banner--video">
        <div
          className={clsx(
            "hero-banner--video-wrapper",
            isExpanded && "expanded",
            orientation
          )}
        >
          {video.link_type === "Media" ? (
            <video
              autoPlay
              loop
              preload="auto"
              controls={canLoadControls}
              playsInline
              muted={!isExpanded}
            >
              <source src={video.url} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div
          className={clsx(
            "hero-banner--play-icon",
            isExpanded
              ? orientation === "vertical"
                ? "hidden-mobile"
                : "hidden"
              : null,
            orientation
          )}
        >
          <div className="hero-banner--play-icon-wrapper">
            <Image src="/play.svg" alt="play icon" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
