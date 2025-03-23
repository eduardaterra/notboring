import clsx from "clsx";
import { useHeroBannerContext } from "../context";
import "./styles.scss";

const createSquares = ({
  visible,
  position,
  orientation,
}: {
  visible: boolean;
  position: string;
  orientation: "vertical" | "horizontal" | null;
}) =>
  Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className={clsx(
        `hero-banner--${position}-square-item`,
        visible ? "hidden" : "default",
        orientation
      )}
    />
  ));

export default function Squares() {
  const { isExpanded, orientation } = useHeroBannerContext();
  const hidden = isExpanded && "hidden";

  const firstArray = createSquares({
    visible: isExpanded,
    position: "first",
    orientation,
  });
  const secondArray = createSquares({
    visible: isExpanded,
    position: "second",
    orientation,
  });
  return (
    <>
      <div
        className={clsx(
          "hero-banner--first-square-wrapper",
          hidden,
          orientation
        )}
      >
        <div
          className={clsx("hero-banner--first-square-container", orientation)}
        >
          {...firstArray}
        </div>
      </div>
      <div
        className={clsx(
          "hero-banner--second-square-wrapper",
          hidden,
          orientation
        )}
      >
        <div
          className={clsx("hero-banner--second-square-container", orientation)}
        >
          {...secondArray}
        </div>
      </div>
    </>
  );
}
