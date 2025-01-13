import { fontSecondary } from "@/app/fonts";
import "./styles.scss";

export default function TextBanner({ ...props }) {
  return (
    <div className="text-banner--container" {...props}>
      <h1 className={`text-banner--title ${fontSecondary.className}`}>
        We create more valuable experiences for people and brands.
      </h1>
      <p className="text-banner--description">
        {`We bring together the right expertise with the best use of technology to
        design experiences that shape people's relationships with brands across
        their entire ecosystem.`}
      </p>
    </div>
  );
}
