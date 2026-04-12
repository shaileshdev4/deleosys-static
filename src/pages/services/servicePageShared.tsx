import type { ReactNode } from "react";
import { brandConfig } from "../../config/brandConfig";
import { FaArrowRightLong, FaAngleRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicehero = brandConfig.meta.Services.servicehero;

export const processSteps = [
  { number: "01", title: "Discovery", desc: "We learn your goals, users, and constraints." },
  { number: "02", title: "Design", desc: "Wireframes, prototypes, and visual systems." },
  { number: "03", title: "Build", desc: "Scalable, clean code with regular check-ins." },
  { number: "04", title: "Launch", desc: "QA, deployment, and go-live support." },
  { number: "05", title: "Support", desc: "Ongoing maintenance and feature growth." },
];

export type OfferItem = { title: string; description: string; icon: string };
export type WhyItem = { title: string; image: string };

export const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeader = ({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: string;
}) => (
  <div className="text-center mb-12">
    {label && (
      <p className="text-[13px] font-medium tracking-[0.05rem] text-[#F7931E] uppercase mb-2">{label}</p>
    )}
    <h2 className="text-[28px] sm:text-[34px] font-bold text-[#11253E]">{title}</h2>
    <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto mt-3 rounded-full" />
    {subtitle && (
      <p className="text-[#4B5563] text-[14px] sm:text-[16px] max-w-[640px] mx-auto mt-4 leading-[1.7]">{subtitle}</p>
    )}
  </div>
);

export function ServicesHero({ heroBannerSrc }: { heroBannerSrc: string }) {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[520px] lg:min-h-[564px] flex items-center justify-center overflow-hidden">
      <img
        src={heroBannerSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex items-center justify-between px-6">
        <div className="flex flex-col gap-6 max-w-[680px] text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-bold text-[32px] sm:text-[44px] lg:text-[56px] leading-[110%] tracking-[-0.03em]"
          >
            Smart Digital Solutions to <span className="gradient-text">Scale Your Business</span> Globally
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[15px] sm:text-[17px] text-white/90 max-w-[560px] leading-[1.7]"
          >
            We help startups and enterprises with Web, App, AI, Automation & Cyber Security solutions to accelerate
            growth and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="flex items-center gap-2 px-6 h-[52px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-semibold text-[15px] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="flex items-center gap-2 px-6 h-[52px] rounded-full border-2 border-white text-white font-semibold text-[15px] hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <IoCallOutline /> Talk to Expert
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-end w-[440px]">
          <motion.img
            src={servicehero.servicebgmain}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export function ServiceBanner({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative w-full h-[380px] flex items-center justify-center overflow-hidden mt-20">
      <img
        src={servicehero.serviceherobgimg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6 max-w-[720px]">
        <h2 className="text-[28px] sm:text-[40px] font-bold text-white">{title}</h2>
        <div className="w-[80px] h-[3px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full" />
        <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.7]">{description}</p>
        <button className="inline-flex items-center gap-2 px-6 h-[52px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-medium rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 mt-2">
          Schedule Your Project <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
}

export function Intro({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="w-full py-20">
      <FadeUp>
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h2 className="text-[26px] sm:text-[34px] font-bold text-[#1F2A44] leading-[130%]">{heading}</h2>
          <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75] mt-5">{body}</p>
        </div>
      </FadeUp>
    </section>
  );
}

export function WhatWeOfferSection({ items }: { items: OfferItem[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1236px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            label="What we offer"
            title="Why Work with Us?"
            subtitle="We help organizations design, build, and scale digital solutions through a combination of strategy, design, and technology."
          />
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-2xl border border-[#1F2A44]/10 shadow-[0_2px_16px_rgba(31,42,68,0.07)] p-8 flex flex-col items-center text-center gap-5 hover:shadow-[0_4px_24px_rgba(230,92,0,0.14)] hover:border-[#F7931E]/30 transition-all duration-300"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[#F7931E]/10 flex items-center justify-center group-hover:bg-[#F7931E]/20 transition-colors duration-300">
                <img src={item.icon} alt={item.title} className="w-[36px] h-[36px]" />
              </div>
              <h3 className="text-[#1C1C1C] font-semibold text-[18px] leading-[130%]">{item.title}</h3>
              <p className="text-[#4B5563] text-[14px] leading-[1.65]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OurProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1236px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            label="How we work"
            title={
              <>
                Our <span className="gradient-text">Process</span>
              </>
            }
            subtitle="A proven five-step approach that takes you from idea to a live, high-performing product."
          />
        </FadeUp>

        <div ref={ref} className="relative flex flex-col md:flex-row items-start justify-between gap-8 mt-4">
          <div className="hidden md:block absolute top-[36px] left-0 right-0 h-[2px] bg-[#F7931E]/15 z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center flex-1 gap-4"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#E65C00] to-[#F7931E] flex items-center justify-center shadow-md shadow-orange-200">
                <span className="text-white font-bold text-[18px]">{step.number}</span>
              </div>
              <h3 className="text-[#11253E] font-semibold text-[17px]">{step.title}</h3>
              <p className="text-[#4B5563] text-[13px] leading-[1.65] max-w-[160px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({ items }: { items: WhyItem[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const gridClass =
    items.length <= 3
      ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center max-w-[1000px] mx-auto"
      : "grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center";

  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1286px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title="Why Choose Us"
            subtitle="We are more than just a tech company — we are your growth partners."
          />
        </FadeUp>

        <div ref={ref} className={gridClass}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-[0_4px_20px_rgba(31,42,68,0.08)] transition-all duration-300 w-full max-w-[200px]"
            >
              <div className="w-[90px] h-[90px] rounded-full p-[2px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                  <img src={item.image} alt={item.title} className="w-[36px] h-[36px]" />
                </div>
              </div>
              <h3 className="text-[#1C1C1C] text-center font-medium text-[16px]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReadyToBuildSection({
  bannerSrc,
  title,
  description,
}: {
  bannerSrc: string;
  title: string;
  description: string;
}) {
  return (
    <section className="w-full py-20 bg-white">
      <FadeUp>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-[76px] h-[260px] rounded-[24px] overflow-hidden flex items-center justify-center">
          <img src={bannerSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6">
            <h2 className="text-[24px] sm:text-[36px] font-bold text-white">{title}</h2>
            <div className="w-[200px] h-[3px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full" />
            <p className="text-white/85 text-[15px] max-w-[500px] leading-[1.7]">{description}</p>
            <button className="inline-flex items-center gap-2 px-6 h-[52px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-medium rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300">
              Get Free Consultation <FaAngleRight />
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
