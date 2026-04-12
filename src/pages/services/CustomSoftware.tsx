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
    title: "CRM & ERP Development",
    description:
      "Build integrated systems that streamline operations, manage data efficiently, and improve business workflows.",
    icon: s.customsoft.WhatWeOffer.groopicon,
  },
  {
    title: "Logistics & Automation Systems",
    description:
      "Optimize supply chain and logistics processes with smart automation and real-time tracking solutions.",
    icon: s.customsoft.WhatWeOffer.truckicon,
  },
  {
    title: "API Development & Integration",
    description: "Connect systems seamlessly with secure APIs that enable smooth data exchange and functionality.",
    icon: s.customsoft.WhatWeOffer.softwareicon,
  },
  {
    title: "Business Process Automation",
    description: "Automate repetitive workflows so your teams focus on high-value work and fewer manual errors.",
    icon: s.customsoft.WhatWeOffer.settingicon,
  },
  {
    title: "Dashboard & Analytics Tools",
    description: "Turn operational data into clear dashboards and insights for faster, better decisions.",
    icon: s.customsoft.WhatWeOffer.layouticon,
  },
];

const whyChoose = [
  { title: "Perfect for startups", image: s.customsoft.WhyChooseUs.brifcaseicon },
  { title: "Logistics platforms", image: s.customsoft.WhyChooseUs.trcukicon },
  { title: "Enterprise systems", image: s.customsoft.WhyChooseUs.settingicon },
];

const CustomSoftare = () => (
  <div>
    <ServicesHero heroBannerSrc={s.customsoft.customsoft.webappbanner} />
    <ServiceBanner
      title="Custom Software Development"
      description="Tailored software that fits your workflows, scales with your business, and integrates with your stack."
    />
    <Intro
      heading="Custom Software Development Company | Tailored Solutions"
      body="Every business is unique — so are our solutions. We create custom-built software to streamline your operations and improve efficiency."
    />
    <WhatWeOfferSection items={whatWeOffer} />
    <OurProcess />
    <WhyChooseUsSection items={whyChoose} />
    <ReadyToBuildSection
      bannerSrc={s.customsoft.customsoft.webappbanner}
      title="Ready to Build Your Custom Software?"
      description="Let's design and ship software that matches exactly how your business runs."
    />
  </div>
);

export default CustomSoftare;
