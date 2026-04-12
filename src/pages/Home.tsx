
import CaseStudy from "../components/sections/CaseStudy";
import CultureTalent from "../components/sections/CultureTalent";
import HeroSection from "../components/sections/HeroSection";
import IndustriesSupport from "../components/sections/IndustriesSupport";
import OurServices from "../components/sections/OurServices";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
     <HeroSection />
      < OurServices />
      < IndustriesSupport />
      < CaseStudy/> 
      <WhyChooseUs /> 
      <CultureTalent /> 
      <ContactUs />
    </>
  );
};

export default Home;