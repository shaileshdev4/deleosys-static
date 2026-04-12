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
    title: "Network Security",
    description: "Protect your infrastructure with secure network design and proactive threat prevention.",
    icon: s.cyber.WhatWeOffer.globalicon,
  },
  {
    title: "VAPT Services",
    description: "Identify and fix vulnerabilities before attackers can exploit them with structured testing.",
    icon: s.cyber.WhatWeOffer.secureicon,
  },
  {
    title: "Data Protection & Encryption",
    description: "Safeguard sensitive data with advanced encryption and secure data management practices.",
    icon: s.cyber.WhatWeOffer.padlockicon,
  },
  {
    title: "Firewall & Security Setup",
    description: "Harden your perimeter with properly configured firewalls and layered security controls.",
    icon: s.cyber.WhatWeOffer.cybersecurityicon,
  },
  {
    title: "Security Monitoring",
    description: "Continuous monitoring and response so threats are detected early and contained fast.",
    icon: s.cyber.WhatWeOffer.shieldicon,
  },
];

const whyChoose = [
  { title: "Prevent Data Breaches", image: s.cyber.WhyChooseUs.datalossicon },
  { title: "Secure Customer Trust", image: s.cyber.WhyChooseUs.shieldicon },
  { title: "Ensure Compliance", image: s.cyber.WhyChooseUs.insureanceicon },
];

const CyberSecurity = () => (
  <div>
    <ServicesHero heroBannerSrc={s.cyber.cyber.cyberbanner} />
    <ServiceBanner
      title="Cyber Security Services"
      description="Protect your digital assets with advanced security solutions designed to detect, prevent, and respond to threats."
    />
    <Intro
      heading="Cyber Security Solutions Company | Protect Your Business Data"
      body="Protect your digital assets with our advanced cyber security solutions. We safeguard your business from threats, vulnerabilities, and data breaches."
    />
    <WhatWeOfferSection items={whatWeOffer} />
    <OurProcess />
    <WhyChooseUsSection items={whyChoose} />
    <ReadyToBuildSection
      bannerSrc={s.cyber.cyber.cyberbanner}
      title="Ready to Secure Your Business?"
      description="Let's strengthen your security posture with expert assessment, implementation, and ongoing protection."
    />
  </div>
);

export default CyberSecurity;
