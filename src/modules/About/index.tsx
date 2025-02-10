import { fontSecondary } from "@/app/fonts";
import config from "@/payload.config";
import "./styles.scss";
import { getPayload } from "payload";

const getContent = async () => {
  const payload = await getPayload({ config });
  return await payload.find({ collection: "pages" });
};

export default async function About({ ...props }) {
  const content = await getContent();
  console.log(content);
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
