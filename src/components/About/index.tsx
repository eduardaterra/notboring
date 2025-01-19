import { fontSecondary } from "@/app/fonts";
import "./styles.scss";

export default function About({ ...props }) {
  return (
    <div className="about--container" {...props}>
      <h3 className={`about--title ${fontSecondary.className}`}>
        We create more valuable experiences for people and brands.
      </h3>
      <p className="about--description">
        {`We bring together the right expertise with the best use of technology to
        design experiences that shape people's relationships with brands across
        their entire ecosystem.`}
      </p>
    </div>
  );
}
