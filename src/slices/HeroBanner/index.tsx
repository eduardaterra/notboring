"use client";
import { type HTMLAttributes } from "react";
import { type SliceComponentProps } from "@prismicio/react";
import { type Content } from "@prismicio/client";
import { HeroBannerProvider } from "./context";
import Video from "./Video";
import Container from "./Container";
import Logo from "./Logo";
import Squares from "./Squares";

type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice> &
  HTMLAttributes<HTMLDivElement>;

export default function HeroBanner({
  slice: {
    primary: { video, expandVideo },
  },
}: Readonly<HeroBannerProps>) {
  return (
    <HeroBannerProvider isExpandable={expandVideo}>
      <Container>
        <Logo />
        <Squares />
        <Video video={video} />
      </Container>
    </HeroBannerProvider>
  );
}
