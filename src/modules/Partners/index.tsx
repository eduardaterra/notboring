import { fontSecondary } from "@/app/fonts";
import Image from "next/image";
import "./styles.scss";

const mockArray = ["/cloudly.svg", "/camera.svg", "/startup.svg"];
const desiredLength = 8;

const repeatedArray = Array.from(
  { length: desiredLength },
  (_, index) => mockArray[index % mockArray.length]
);

export default function Partners({ ...props }) {
  return (
    <div className="partners--container" {...props}>
      <div className="partners--text-container">
        <h3 className={`partners--title ${fontSecondary.className}`}>
          Some partners
        </h3>
        <p className="partners--description">
          {`With our trusted partners, we ambitiously push technology's
          capabilities to create groundbreaking solutions for our clients.`}
        </p>
      </div>
      <div className="partners--grid-container">
        {repeatedArray.map((image, index) => (
          <div className="partners--image-container" key={image + index}>
            <Image src={image} alt="image" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
