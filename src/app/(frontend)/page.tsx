import Contacts from "@/modules/Contacts";
import Partners from "@/modules/Partners";
import HeroBanner from "@/modules/HeroBanner";
import About from "@/modules/About";
import offices from "@/mocks/offices.mock";
import "./styles.scss";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <div className="home--content-container">
        <About />
        <Partners />
        <Contacts offices={offices} />
      </div>
    </main>
  );
}
