import { brandConfig } from "../../config/brandConfig";
import {
  Intro,
  OurProcess,
  ReadyToBuildSection,
  ServiceBanner,
  ServicesHero,
  WhatWeOfferSection,
  WhyChooseUsSection,
} from "./servicePageShared";

const s = brandConfig.meta.Services;

const whatWeOffer = [
  {
    title: "Android App Development",
    description:
      "We develop high-performance Android apps that deliver smooth functionality across a wide range of devices.",
    icon: s.appdev.WhatWeOffer.android,
  },
  {
    title: "iOS App Development",
    description:
      "Build secure and scalable iOS applications designed to provide seamless experiences for Apple users.",
    icon: s.appdev.WhatWeOffer.ios,
  },
  {
    title: "Cross-platform Apps (React Native / Flutter)",
    description:
      "Create efficient apps that run smoothly on both Android and iOS using modern cross-platform technologies.",
    icon: s.appdev.WhatWeOffer.mobile,
  },
  {
    title: "Business & Startup Apps",
    description:
      "Transform your ideas into powerful applications tailored to support business growth and innovation.",
    icon: s.appdev.WhatWeOffer.brifcase,
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ensure your app stays updated, secure, and optimized with continuous support and performance improvements.",
    icon: s.appdev.WhatWeOffer.support,
  },
];

const whyChoose = [
  { title: "High Performance", image: s.appdev.WhyChooseUs.rocket },
  { title: "Scalable Architecture", image: s.appdev.WhyChooseUs.trend },
  { title: "Secure Applications", image: s.appdev.WhyChooseUs.shieldicon },
];

const AppDevelopment = () => (
  <div>
    <ServicesHero heroBannerSrc={s.appdev.appdev.appdevbanner} />
    <ServiceBanner
      title="App Development Services"
      description="We build high-performance mobile applications that deliver seamless user experiences across platforms."
    />
    <Intro
      heading="Mobile App Development Company | Android & iOS Apps"
      body="We develop powerful and user-friendly mobile applications that help businesses connect with their audience anytime, anywhere."
    />
    <WhatWeOfferSection items={whatWeOffer} />
    <OurProcess />
    <WhyChooseUsSection items={whyChoose} />
    <ReadyToBuildSection
      bannerSrc={s.appdev.appdev.appdevbanner}
      title="Ready to Build Your Mobile App?"
      description="Let's turn your app idea into reality with our expert development team."
    />
  </div>
);

export default AppDevelopment;
