"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useScrollLock } from "@/hooks/useScrollLock";

interface IHeroBannerContext {
  isExpanded: boolean;
  handleExpand: (value: boolean) => void;
  isExpandable?: boolean;
}

const HeroBannerContext = createContext<IHeroBannerContext | null>(
  {} as IHeroBannerContext
);

const HeroBannerProvider = ({
  children,
  isExpandable,
}: PropsWithChildren<{ isExpandable?: boolean }>) => {
  const { allowScroll, blockScroll } = useScrollLock();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = useCallback(
    (expanded: boolean) => {
      if (!isExpandable) return;

      setIsExpanded(expanded);
      if (expanded) {
        blockScroll();
        return;
      }
      allowScroll();
    },
    [allowScroll, blockScroll, isExpandable]
  );

  const memoizedContextValue = useMemo(
    () => ({ isExpanded, handleExpand, isExpandable }),
    [isExpanded, handleExpand, isExpandable]
  );

  return (
    <HeroBannerContext.Provider value={memoizedContextValue}>
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
