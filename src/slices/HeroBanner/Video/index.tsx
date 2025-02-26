import { useLayoutEffect, useState, type HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import { type Content } from "@prismicio/client";
import "./styles.scss";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  video: Content.HeroBannerSliceDefaultPrimary["video"];
  isExpanded: boolean;
}

export default function Video({ video, isExpanded }: Readonly<VideoProps>) {
  const [canLoadControls, setCanLoadControls] = useState(false);

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !isExpanded && setCanLoadControls(false);
  }, [isExpanded]);

  return (
    <div
      className={clsx("hero-banner--video-container", isExpanded && "expanded")}
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
            isExpanded && "expanded"
          )}
          onClick={() => isExpanded && setCanLoadControls(true)}
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
        <div className={clsx("hero-banner--play-icon", isExpanded && "hidden")}>
          <div className="hero-banner--play-icon-wrapper">
            <Image src="/play.svg" alt="play icon" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
