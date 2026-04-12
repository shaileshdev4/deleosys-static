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
    title: "AI Chatbots",
    description: "Build intelligent chatbots that automate conversations and enhance customer support experiences.",
    icon: s.aiandauto.WhatWeOffer.chaticon,
  },
  {
    title: "Workflow Automation",
    description: "Streamline processes by automating repetitive tasks and improving operational efficiency.",
    icon: s.aiandauto.WhatWeOffer.settingicon,
  },
  {
    title: "Data Analysis & Prediction",
    description: "Turn data into insights with advanced analytics and predictive models for smarter decisions.",
    icon: s.aiandauto.WhatWeOffer.growthicon,
  },
  {
    title: "AI Integrations",
    description: "Integrate powerful AI tools and machine learning models to enhance your existing systems.",
    icon: s.aiandauto.WhatWeOffer.integrationicon,
  },
  {
    title: "RPA (Robotic Process Automation)",
    description: "Automate rule-based tasks using software bots to reduce manual effort and increase productivity.",
    icon: s.aiandauto.WhatWeOffer.automationicon,
  },
];

const whyChoose = [
  { title: "Save Time", image: s.aiandauto.WhyChooseUs.timeicon },
  { title: "Data-Driven Decisions", image: s.aiandauto.WhyChooseUs.growthicon },
  { title: "Increase Efficiency", image: s.aiandauto.WhyChooseUs.rocketicon },
];

const AiandAutomation = () => (
  <div>
    <ServicesHero heroBannerSrc={s.aiandauto.aiandauto.webappbanner} />
    <ServiceBanner
      title="AI & Automation Services"
      description="Leverage AI-driven solutions and automation to improve efficiency, reduce effort, and unlock new opportunities."
    />
    <Intro
      heading="AI & Automation Solutions Company | Future-Ready Business"
      body="Transform your business with AI-powered automation solutions. We help you reduce manual work, increase productivity, and make smarter decisions."
    />
    <WhatWeOfferSection items={whatWeOffer} />
    <OurProcess />
    <WhyChooseUsSection items={whyChoose} />
    <ReadyToBuildSection
      bannerSrc={s.aiandauto.aiandauto.webappbanner}
      title="Ready to Build Your AI & Automation Solution?"
      description="Let's streamline your operations with intelligent automation and AI-driven solutions."
    />
  </div>
);

export default AiandAutomation;
