import HeroSection from "../components/sections/HeroSection";
import StatsStrip from "../components/sections/StatsStrip";
import TechMarquee from "../components/sections/TechMarquee";
import OurServices from "../components/sections/OurServices";
import IndustriesSupport from "../components/sections/IndustriesSupport";
import CaseStudy from "../components/sections/CaseStudy";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CultureTalent from "../components/sections/CultureTalent";
import ContactUs from "./ContactUs";

const Home = () => (
  <>
    <HeroSection />
    <StatsStrip />
    <TechMarquee />
    <OurServices />
    <IndustriesSupport />
    <CaseStudy />
    <WhyChooseUs />
    <CultureTalent />
    <ContactUs />
  </>
);

export default Home;
