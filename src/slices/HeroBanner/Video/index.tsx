import clsx from "clsx";
import Image from "next/image";
import { type Content } from "@prismicio/client";
import { type HTMLAttributes } from "react";
import "./styles.scss";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  video: Content.HeroBannerSliceDefaultPrimary["video"];
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

export default function Video({
  video,
  isExpanded,
  setIsExpanded,
}: Readonly<VideoProps>) {
  function handleVideoClick() {
    window.alert("videoClicked");
  }
  return (
    <div
      className={clsx("hero-banner--video-container", isExpanded && "expanded")}
    >
      <div className="hero-banner--video">
        <div
          className={clsx(
            "hero-banner--video-wrapper",
            isExpanded && "expanded"
          )}
        >
          {video.link_type === "Media" ? (
            <video
              autoPlay
              loop
              preload="auto"
              playsInline
              onClick={handleVideoClick}
              // ref={videoRef}
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
  );
}
