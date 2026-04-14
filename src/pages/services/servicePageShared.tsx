import { useEffect, useState, type ReactNode } from "react";
import { brandConfig } from "../../config/brandConfig";
import { FaArrowRightLong, FaAngleRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const servicehero = brandConfig.meta.Services.servicehero;

export const processSteps = [
  { number: "01", title: "Discovery",  desc: "We learn your goals, users, and constraints." },
  { number: "02", title: "Design",     desc: "Wireframes, prototypes, and visual systems."  },
  { number: "03", title: "Build",      desc: "Scalable, clean code with regular check-ins."  },
  { number: "04", title: "Launch",     desc: "QA, deployment, and go-live support."          },
  { number: "05", title: "Support",    desc: "Ongoing maintenance and feature growth."       },
];

const SHARED_STYLES = `
  @keyframes services-hero-breathe {
    0%,100% { transform: scale(1);     filter: drop-shadow(0 12px 30px rgba(0,0,0,0.38)); }
    50%      { transform: scale(1.015); filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));  }
  }
  .services-hero-breathe { animation: services-hero-breathe 4s ease-in-out infinite; }

  @keyframes rotate-border {
    from { --angle: 0deg; }
    to   { --angle: 360deg; }
  }
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  .card-rotating-border {
    position: relative;
  }
  .card-rotating-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 16px;
    padding: 1.5px;
    background: conic-gradient(from var(--angle), transparent 70%, rgba(247,147,30,0.6) 85%, transparent 100%);
    animation: rotate-border 4s linear infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
    transition: opacity 0.3s;
  }
  .card-rotating-border:hover::before { opacity: 1; }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(46px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(46px) rotate(-360deg); }
  }
  @keyframes orbit-reverse {
    from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
    to   { transform: rotate(-360deg) translateX(50px) rotate(360deg); }
  }
  .orbit-dot {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #F7931E;
    top: 50%;
    left: 50%;
    margin: -2.5px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .orbit-dot-1 { animation: orbit 2.8s linear infinite; }
  .orbit-dot-2 { animation: orbit-reverse 3.5s linear infinite; opacity: 0; }
  .group:hover .orbit-dot { opacity: 0.7; }

  @keyframes text-shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .shimmer-text {
    background: linear-gradient(90deg, #ffffff 30%, rgba(255,255,255,0.5) 50%, #ffffff 70%);
    background-size: 400px 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: text-shimmer 4s ease-in-out infinite;
    animation-delay: 2s;
  }

  @keyframes ping-ring {
    0%   { transform: scale(1);   opacity: 0.6; }
    100% { transform: scale(1.7); opacity: 0;   }
  }
  .ping-ring {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    border: 2px solid rgba(247,147,30,0.6);
    animation: ping-ring 2.2s ease-out infinite;
  }
  .ping-ring-2 {
    animation-delay: 1.1s;
  }

  @keyframes float-particle {
    0%,100% { transform: translate(0, 0) scale(1);   opacity: 0.15; }
    33%      { transform: translate(12px, -18px) scale(1.1); opacity: 0.28; }
    66%      { transform: translate(-8px, 10px) scale(0.9);  opacity: 0.1;  }
  }
`;

export type OfferItem = { title: string; description: string; icon: string };
export type WhyItem   = { title: string; image: string };

// ─── Reusable ────────────────────────────────────────────────────────────────
export const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeader = ({
  label, title, subtitle,
}: {
  label?: string; title: ReactNode; subtitle?: string;
}) => (
  <div className="text-center mb-12">
    {label && (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[13px] font-medium tracking-[0.05rem] text-[#F7931E] uppercase mb-2"
      >
        {label}
      </motion.p>
    )}
    <h2 className="text-[26px] sm:text-[34px] font-bold text-[#11253E]">{title}</h2>
    <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto mt-3 rounded-full" />
    {subtitle && (
      <p className="text-[#4B5563] text-[14px] sm:text-[16px] max-w-[640px] mx-auto mt-4 leading-[1.7] px-4">
        {subtitle}
      </p>
    )}
  </div>
);

// ─── 1. ServicesHero ─────────────────────────────────────────────────────────
export function ServicesHero({ heroBannerSrc }: { heroBannerSrc: string }) {
  const navigate = useNavigate();
  return (
    <>
      <style>{SHARED_STYLES}</style>

      <section
        className="relative w-full min-h-[480px] md:min-h-[620px]"
        style={{ overflow: "hidden" }}
      >
        {/* bg wipe */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.7 }}
          animate={{ clipPath: "inset(0 0% 0 0)",   opacity: 1   }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <img src={heroBannerSrc} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.20) 100%)" }}
          />
        </motion.div>

        <div className="orb orb-1 top-[-80px] left-[-60px]" />
        <div className="orb orb-2 bottom-[-40px] left-[30%]" />
        {[
          { size: 6, top: "20%", left: "12%", delay: "0s", dur: "6s" },
          { size: 4, top: "65%", left: "8%", delay: "1.5s", dur: "8s" },
          { size: 5, top: "40%", left: "22%", delay: "3s", dur: "7s" },
          { size: 3, top: "75%", left: "35%", delay: "0.8s", dur: "9s" },
          { size: 6, top: "15%", left: "42%", delay: "2.2s", dur: "6.5s" },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #E65C00, #F7931E)",
              animation: `float-particle ${p.dur} ease-in-out infinite`,
              animationDelay: p.delay,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

        {/* content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10 min-h-[480px] md:min-h-[620px] py-12 md:py-0">
          <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[640px] text-white">

            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="section-label !text-white/75 !border-white/20 !bg-white/10">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="font-bold text-[28px] sm:text-[40px] lg:text-[52px] leading-[112%] tracking-[-0.03em]"
            >
              Smart Digital Solutions to{" "}
              <span className="gradient-text">Scale Your Business</span> Globally
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[14px] sm:text-[16px] text-white/85 max-w-[520px] leading-[1.75]"
            >
              We help startups and enterprises with Web, App, AI, Automation & Cyber Security
              solutions to accelerate growth and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex gap-3 sm:gap-4 flex-wrap"
            >
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="btn-primary"
              >
                Get Free Consultation
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = "tel:+919270137130"; }}
                className="btn-outline"
              >
                <IoCallOutline className="text-[16px]" /> Talk to Expert
              </button>
            </motion.div>
          </div>

          {/* right visual — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[460px] xl:w-[560px] pointer-events-none"
          >
            <div className="relative">
              <img
                src={servicehero.servicebgmain}
                alt=""
                className="w-full h-auto object-contain services-hero-breathe"
              />
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ─── 2. ServiceBanner ─────────────────────────────────────────────────────────
export function ServiceBanner({ title, description }: { title: string; description: string }) {
  const navigate  = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[280px] sm:h-[380px] flex items-center justify-center overflow-hidden mt-14 sm:mt-20"
    >
      <motion.img
        src={servicehero.serviceherobgimg}
        alt=""
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-5 sm:px-6 max-w-[720px] py-10 sm:py-0">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-[24px] sm:text-[36px] md:text-[40px] font-bold leading-[120%] shimmer-text"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[80px] h-[3px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="text-white/85 text-[14px] sm:text-[16px] leading-[1.7]"
        >
          {description}
        </motion.p>

        <motion.button
          type="button"
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="btn-primary mt-1"
        >
          Schedule Your Project <FaArrowRightLong />
        </motion.button>
      </div>
    </section>
  );
}

// ─── 3. Intro ─────────────────────────────────────────────────────────────────
export function Intro({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="w-full py-16 sm:py-20">
      <FadeUp>
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-[#1F2A44] leading-[130%]">
            {heading}
          </h2>
          <p className="text-[#4B5563] text-[14px] sm:text-[16px] leading-[1.75] mt-4 sm:mt-5">{body}</p>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── 4. What We Offer ─────────────────────────────────────────────────────────
export function WhatWeOfferSection({ items }: { items: OfferItem[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-20">
      <div className="max-w-[1236px] mx-auto px-5 sm:px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            label="What we offer"
            title="Why Work with Us?"
            subtitle="We help organizations design, build, and scale digital solutions through a combination of strategy, design, and technology."
          />
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="card-rotating-border group bg-white rounded-2xl border border-[#1F2A44]/10 shadow-[0_2px_16px_rgba(31,42,68,0.07)] p-6 sm:p-8 flex flex-col items-center text-center gap-4 sm:gap-5 hover:shadow-[0_8px_32px_rgba(230,92,0,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* icon with pulse ring on hover */}
              <div className="relative">
                <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#F7931E]/10 flex items-center justify-center group-hover:bg-[#F7931E]/20 transition-colors duration-300 z-10 relative">
                  <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px]" />
                </div>
                {/* pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#F7931E]/30 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
              </div>
              <h3 className="text-[#1C1C1C] font-semibold text-[16px] sm:text-[18px] leading-[130%]">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-[13px] sm:text-[14px] leading-[1.65]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Our Process ───────────────────────────────────────────────────────────
export function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setActiveStep((p) => (p + 1) % processSteps.length);
    }, 1800);
    return () => clearInterval(t);
  }, []);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="w-full py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1236px] mx-auto px-5 sm:px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            label="How we work"
            title={<>Our <span className="gradient-text">Process</span></>}
            subtitle="A proven five-step approach that takes you from idea to a live, high-performing product."
          />
        </FadeUp>

        {/* ── Desktop: horizontal with animated line ── */}
        <div ref={ref} className="hidden md:block relative mt-4">
          {/* background track */}
          <div className="absolute top-[36px] left-[72px] right-[72px] h-[2px] bg-[#F7931E]/12 z-0" />
          {/* animated fill line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="absolute top-[36px] left-[72px] right-[72px] h-[2px] z-0 origin-left overflow-hidden"
            style={{ background: "rgba(247,147,30,0.15)" }}
          >
            <motion.div
              className="absolute top-0 h-full bg-gradient-to-r from-[#E65C00] to-[#F7931E]"
              animate={{ left: `${(activeStep / (processSteps.length - 1)) * 100}%`, width: `${100 / (processSteps.length - 1)}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: `${100 / (processSteps.length - 1)}%` }}
            />
          </motion.div>

          <div className="relative z-10 flex items-start justify-between">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center flex-1 gap-3 px-2"
              >
                {/* circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.3 + i * 0.15 }}
                  className="relative w-[72px] h-[72px]"
                >
                  {activeStep === i && (
                    <>
                      <div className="ping-ring" />
                      <div className="ping-ring ping-ring-2" />
                    </>
                  )}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
                    style={{
                      background: activeStep === i
                        ? "linear-gradient(135deg, #E65C00, #F7931E)"
                        : "linear-gradient(135deg, rgba(230,92,0,0.25), rgba(247,147,30,0.35))",
                      boxShadow: activeStep === i
                        ? "0 8px 24px rgba(230,92,0,0.45)"
                        : "0 4px 12px rgba(230,92,0,0.15)",
                    }}
                  >
                    <span
                      className="font-bold text-[18px] transition-colors duration-500"
                      style={{ color: activeStep === i ? "#fff" : "#E65C00" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </motion.div>
                <h3 className="text-[#11253E] font-bold text-[15px] mt-1">{step.title}</h3>
                <p className="text-[#6B7280] text-[12px] leading-[1.65] max-w-[130px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="md:hidden relative pl-8 mt-2">
          {/* vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E65C00] to-[#F7931E] origin-top"
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
              className="relative flex items-start gap-4 mb-8 last:mb-0"
            >
              {/* dot */}
              <div className="absolute -left-8 w-[36px] h-[36px]">
                {activeStep === i && <div className="ping-ring" style={{ animationDuration: "1.8s" }} />}
                <div
                  className="w-full h-full rounded-full flex items-center justify-center shadow-md transition-all duration-500"
                  style={{
                    background: activeStep === i
                      ? "linear-gradient(135deg, #E65C00, #F7931E)"
                      : "linear-gradient(135deg, rgba(230,92,0,0.3), rgba(247,147,30,0.4))",
                  }}
                >
                  <span className="font-bold text-[12px]" style={{ color: activeStep === i ? "#fff" : "#E65C00" }}>
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-[#11253E] font-bold text-[15px]">{step.title}</h3>
                <p className="text-[#6B7280] text-[13px] leading-[1.65] mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Why Choose Us ─────────────────────────────────────────────────────────
export function WhyChooseUsSection({ items }: { items: WhyItem[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const gridCls =
    items.length <= 3
      ? "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center max-w-[900px] mx-auto"
      : "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center";

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-20">
      <div className="max-w-[1286px] mx-auto px-5 sm:px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title="Why Choose Us"
            subtitle="We are more than just a tech company — we are your growth partners."
          />
        </FadeUp>

        <div ref={ref} className={gridCls}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl hover:bg-white hover:shadow-[0_4px_20px_rgba(31,42,68,0.08)] transition-all duration-300 w-full"
            >
              <div className="relative w-[72px] h-[72px] sm:w-[90px] sm:h-[90px]">
                <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                    <img src={item.image} alt={item.title} className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]" />
                  </div>
                </div>
                <div className="orbit-dot orbit-dot-1" />
                <div className="orbit-dot orbit-dot-2" />
              </div>
              <h3 className="text-[#1C1C1C] text-center font-semibold text-[13px] sm:text-[16px] leading-[1.4]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Ready To Build ────────────────────────────────────────────────────────
export function ReadyToBuildSection({
  bannerSrc, title, description,
}: {
  bannerSrc: string; title: string; description: string;
}) {
  const navigate   = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="w-full py-14 sm:py-20 bg-white px-4 sm:px-6">
      <FadeUp>
        <div
          ref={sectionRef}
          className="relative max-w-[1280px] mx-auto min-h-[220px] sm:h-[280px] rounded-2xl sm:rounded-[24px] overflow-hidden flex items-center justify-center"
        >
          <motion.img
            src={bannerSrc}
            alt=""
            style={{ y }}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4 px-5 py-10 sm:py-0 max-w-[600px]">
            <motion.h2
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="text-[22px] sm:text-[32px] md:text-[36px] font-bold text-white leading-[120%]"
            >
              {title}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-[160px] h-[3px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-white/85 text-[13px] sm:text-[15px] leading-[1.7]"
            >
              {description}
            </motion.p>

            <motion.div
              className="relative mt-1 w-fit"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="ping-ring !rounded-full" style={{ animationDuration: "2.2s" }} />
              <div className="ping-ring !rounded-full ping-ring-2" style={{ animationDuration: "2.2s" }} />
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="btn-primary relative z-10"
              >
                Get Free Consultation <FaAngleRight />
              </button>
            </motion.div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}