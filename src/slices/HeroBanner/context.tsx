"use client";
import { useScrollLock } from "@/hooks/useScrollLock";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface IHeroBannerContext {
  isExpanded: boolean;
  handleExpand: (value: boolean) => void;
}

const HeroBannerContext = createContext<IHeroBannerContext | null>(
  {} as IHeroBannerContext
);

const HeroBannerProvider = ({ children }: PropsWithChildren) => {
  const { allowScroll, blockScroll } = useScrollLock();
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand(expanded: boolean) {
    setIsExpanded(expanded);
    if (expanded) {
      blockScroll();
      return;
    }
    allowScroll();
  }

  return (
    <HeroBannerContext.Provider value={{ isExpanded, handleExpand }}>
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
