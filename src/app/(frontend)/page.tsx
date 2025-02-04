import Contacts from "@/components/Contacts";
import Partners from "@/components/Partners";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
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
