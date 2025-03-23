"use client";
import { useScrollLock } from "@/hooks/useScrollLock";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

interface IHeroBannerContext {
  orientation: "vertical" | "horizontal" | null;
  isExpanded: boolean;
  handleExpand: (value: boolean) => void;
}

const HeroBannerContext = createContext<IHeroBannerContext | null>(
  {} as IHeroBannerContext
);

const HeroBannerProvider = ({ children }: PropsWithChildren) => {
  const { allowScroll, blockScroll } = useScrollLock();
  const [isExpanded, setIsExpanded] = useState(false);
  const [orientation, setOrientation] =
    useState<IHeroBannerContext["orientation"]>(null);

  function handleExpand(expanded: boolean) {
    setIsExpanded(expanded);
    if (expanded) {
      blockScroll();
      return;
    }
    allowScroll();
  }

  function handleOrientation() {
    const width = window?.innerWidth ?? 0;
    const height = window?.innerHeight ?? 0;

    if (width > height * 1.1) {
      setOrientation("horizontal");
      return;
    }
    setOrientation("vertical");
  }

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      handleOrientation();
      window.addEventListener("resize", handleOrientation);

      return () => {
        window.removeEventListener("resize", handleOrientation);
      };
    }
  }, [orientation]);

  return (
    <HeroBannerContext.Provider
      value={{ isExpanded, orientation, handleExpand }}
    >
      {children}
    </HeroBannerContext.Provider>
  );
};

const useHeroBannerContext = () => {
  const context = useContext(HeroBannerContext);
  if (!context) {
    throw new Error(
      "useHeroBannerContext must be used within a HeroBannerProvider"
    );
  }
  return context;
};

export { HeroBannerContext, HeroBannerProvider, useHeroBannerContext };
