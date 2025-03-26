import clsx from "clsx";
import { useHeroBannerContext } from "../context";
import "./styles.scss";

const createSquares = ({
  visible,
  position,
}: {
  visible: boolean;
  position: string;
}) =>
  Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className={clsx(
        `hero-banner--${position}-square-item`,
        visible ? "hidden" : "default"
      )}
    />
  ));

export default function Squares() {
  const { isExpanded } = useHeroBannerContext();
  const hidden = isExpanded && "hidden";

  const firstArray = createSquares({
    visible: isExpanded,
    position: "first",
  });
  const secondArray = createSquares({
    visible: isExpanded,
    position: "second",
  });
  return (
    <>
      <div className={clsx("hero-banner--first-square-wrapper", hidden)}>
        <div className={"hero-banner--first-square-container"}>
          {...firstArray}
        </div>
      </div>
      <div className={clsx("hero-banner--second-square-wrapper", hidden)}>
        <div className={"hero-banner--second-square-container"}>
          {...secondArray}
        </div>
      </div>
    </>
  );
}
