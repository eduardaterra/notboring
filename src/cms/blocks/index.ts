import AboutConfig from "./About/block";
import PartnersConfig from "./Partners/block";
import ContactsConfig from "./Contacts/block";
import HeroBannerConfig from "./HeroBanner/block";
import About from "./About";
import Partners from "./Partners";
import Contacts from "./Contacts";
import HeroBanner from "./HeroBanner";

export const blocks = {
  config: { AboutConfig, PartnersConfig, ContactsConfig, HeroBannerConfig },
  components: {
    About,
    Partners,
    Contacts,
    HeroBanner,
  },
};
