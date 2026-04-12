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
    title: "Custom Website Development",
    description: "We design and develop fully customized websites tailored to your business goals and user needs.",
    icon: s.webapp.WhatWeOffer.layouticon,
  },
  {
    title: "E-commerce Development",
    description: "Build powerful online stores with seamless user experiences and scalable e-commerce solutions.",
    icon: s.webapp.WhatWeOffer.carticon,
  },
  {
    title: "SaaS Platform Development",
    description: "Create scalable, cloud-based SaaS platforms designed for performance, flexibility, and growth.",
    icon: s.webapp.WhatWeOffer.cloudicon,
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive and engaging user experiences that enhance usability and drive customer satisfaction.",
    icon: s.webapp.WhatWeOffer.uxuiicon,
  },
  {
    title: "Website Optimization & SEO",
    description: "Improve website speed, performance, and visibility to reach the right audience and grow your business.",
    icon: s.webapp.WhatWeOffer.analysisicon,
  },
];

const whyChoose = [
  { title: "Fast Loading", image: s.webapp.WhyChooseUs.circleloadingicon },
  { title: "Mobile Responsive", image: s.webapp.WhyChooseUs.deviceicon },
  { title: "SEO Optimized", image: s.webapp.WhyChooseUs.searchicon },
  { title: "Secure & Scalable", image: s.webapp.WhyChooseUs.shieldicon },
];

const WebDevelopment = () => (
  <div>
    <ServicesHero heroBannerSrc={s.webapp.webapp.webappbanner} />
    <ServiceBanner
      title="Web Development Services"
      description="Building scalable, high-impact digital experiences that help businesses grow and succeed."
    />
    <Intro
      heading="Custom Web Development Company in India | Deleosys"
      body="At Deleosys, we build high-performance, scalable, and SEO-friendly websites tailored to your business needs. From corporate websites to advanced SaaS platforms, we ensure speed, security, and user experience."
    />
    <WhatWeOfferSection items={whatWeOffer} />
    <OurProcess />
    <WhyChooseUsSection items={whyChoose} />
    <ReadyToBuildSection
      bannerSrc={s.webapp.webapp.webappbanner}
      title="Ready to Build Your Web Project?"
      description="Let's create a website that perfectly represents your brand and drives results."
    />
  </div>
);

export default WebDevelopment;
