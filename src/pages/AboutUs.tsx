import type { ReactNode } from "react";
import { brandConfig } from "../config/brandConfig";
import { TfiTruck } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsCheckAll } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const aboutimage = brandConfig.meta.about;

const whoWeAreItems = [
  { title: "Logistics Solutions Experts",         icon: TfiTruck },
  { title: "ERP & Business Automation",           icon: CiSettings },
  { title: "Web & App Development Team",          icon: CiGlobe },
  { title: "Cyber Security Professionals",        icon: IoLocationOutline },
];

const whyChooseItems = [
  { title: "Client-first approach",               image: aboutimage.whychoose.skill },
  { title: "Custom solutions, not copy-paste",    image: aboutimage.whychoose.ideabulb },
  { title: "Strong technical expertise",          image: aboutimage.whychoose.skill },
  { title: "Fast execution & support",            image: aboutimage.whychoose.support },
  { title: "Long-term partnership mindset",       image: aboutimage.whychoose.cooperation },
];

const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
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

const SectionHeader = ({ title, subtitle }: { title: ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-[28px] sm:text-[36px] font-bold text-[#11253E]">{title}</h2>
    <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto mt-3 rounded-full" />
    {subtitle && (
      <p className="text-[#4B5563] text-[14px] sm:text-[16px] max-w-[640px] mx-auto mt-4 leading-[1.7]">
        {subtitle}
      </p>
    )}
  </div>
);

// â”€â”€â”€ 1. Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function AboutHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[564px] flex items-center justify-center overflow-hidden">
      <img src={aboutimage.abouthero.aboutherobg} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex items-center justify-between px-6">
        <div className="flex flex-col gap-6 max-w-[600px] text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
              About Us
            </h1>
            <h2 className="text-[#F7931E] text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.2]">
              Driving Innovation & <span className="gradient-text">Excellence</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/90 text-[15px] sm:text-[17px] max-w-[520px] leading-[1.7]"
          >
            At Deleosys Technologies Pvt Ltd, we bridge the gap between business challenges and smart technology solutions.
          </motion.p>
        </div>
        <div className="hidden lg:flex justify-end w-[500px]">
          <motion.img
            src={aboutimage.abouthero.aboutusimg2}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ 2. Our Journey â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function OurJourneyTeam() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[491px] flex flex-col gap-5 text-center md:text-left">
              <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-[#1F2A44] leading-[1.2]">
                Our Journey & Team
              </h2>
              <div className="w-[160px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full mx-auto md:mx-0" />
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75]">
                Deleosys Technologies is a team of passionate innovators, engineers, and industry experts dedicated to building impactful digital solutions. From startups to enterprise-level clients, we deliver scalable, secure, and future-ready technology solutions.
              </p>
              <p className="text-[#4B5563] text-[15px] leading-[1.75]">
                Our journey started with a vision:{" "}
                <span className="font-semibold text-[#1F2A44]">to bridge the gap between business challenges and smart technology.</span>
              </p>
            </div>
            <div className="w-full md:w-[580px] rounded-2xl overflow-hidden">
              <img src={aboutimage.OurJourney.teamgroupimage} alt="Our team" className="w-full h-[380px] object-cover rounded-2xl" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// â”€â”€â”€ 3. Who We Are â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function WhoWeAre() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1286px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title={
              <>
                Who We <span className="gradient-text">Are</span>
              </>
            }
            subtitle="We are more than just a tech company â€” we are your growth partners."
          />
        </FadeUp>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {whoWeAreItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group bg-white w-full max-w-[220px] p-6 rounded-2xl border border-[#1F2A44]/10 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-[0_4px_20px_rgba(230,92,0,0.12)] hover:border-[#F7931E]/30 transition-all duration-300"
              >
                <div className="w-[90px] h-[90px] rounded-full p-[2px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                    <Icon className="text-[#F7931E] text-[32px]" />
                  </div>
                </div>
                <h3 className="text-[#1C1C1C] text-center font-medium text-[15px] leading-[1.4]">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ 4. Our Moments â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function OurMoments() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* LEFT â€” stacked images */}
            <div className="relative w-full md:w-[560px] shrink-0">
              <div className="w-full aspect-[595/420] rounded-2xl overflow-hidden">
                <img src={aboutimage.ourmoments.ourmomentsmillingface} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 sm:bottom-[-24px] sm:right-[-24px] w-[140px] sm:w-[220px] md:w-[280px] rounded-xl border-[6px] sm:border-[8px] border-white overflow-hidden shadow-xl">
                <img src={aboutimage.ourmoments.colleaguesworkingproject} alt="" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* RIGHT â€” text */}
            <div className="flex-1 max-w-[480px] flex flex-col gap-5 text-center md:text-left items-center md:items-start mt-8 md:mt-0">
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1F2A44] leading-[1.2]">
                Our Moments
                <span className="block text-[#F7931E]">Real Work, Real Impact</span>
              </h2>
              <div className="w-[160px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full mx-auto md:mx-0" />
              <p className="text-[#4B5563] text-[15px] leading-[1.75]">
                These moments reflect our journey â€” from client meetings to partnerships and team milestones.
              </p>
              <div className="flex flex-col gap-3 mt-2 items-center md:items-start">
                {["Building trust", "Creating opportunities", "Delivering results"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <BsCheckAll className="text-[#F7931E] text-[22px] shrink-0" />
                    <p className="text-[#1F2A44] text-[15px] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// â”€â”€â”€ 5. Why Choose â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function WhyChooseDeleosys() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8 sm:mb-12">
            <div className="flex flex-col gap-3 text-center md:text-left items-center md:items-start">
              <h2 className="text-[24px] sm:text-[34px] font-bold text-[#1F2A44]">Why Choose Deleosys?</h2>
              <div className="w-[160px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full" />
            </div>
            <p className="text-[#4B5563] text-[15px] leading-[1.75] max-w-[460px] text-center md:text-left">
              We focus on delivering practical, scalable solutions that align with your business goals and drive measurable results.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div ref={ref} className="flex flex-col gap-4 w-full max-w-[440px]">
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-4 px-4 py-3 rounded-xl border border-[#1F2A44]/10 bg-white hover:bg-orange-50/50 hover:border-[#F7931E]/30 transition-all duration-300"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#F7931E]/10 flex items-center justify-center shrink-0">
                  <img src={item.image} alt="" className="w-[26px] h-[26px]" />
                </div>
                <h3 className="text-[#1F2A44] text-[15px] font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <div className="w-full max-w-[620px] rounded-2xl overflow-hidden">
              <img src={aboutimage.whychoose.confidentbusinessmen} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ 6. Driven by Innovation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function DrivenByInnovation() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-24 flex items-center justify-center overflow-hidden">
      <img src={aboutimage.DrivenbyInnovation.businesspeople} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <FadeUp>
        <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6 max-w-[720px]">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white">
            Driven by <span className="gradient-text">Innovation</span>
          </h2>
          <div className="w-[180px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full" />
          <p className="text-white/80 text-[16px] sm:text-[18px] leading-[1.75] italic">
            &quot;Engineering the Future with Smart Technology&quot;
          </p>
          <p className="text-white/75 text-[15px] leading-[1.75] max-w-[560px]">
            We don&apos;t just build software â€” we build solutions that solve real business problems.
          </p>
          <button type="button" onClick={() => navigate("/contact")} className="mt-2 inline-flex items-center gap-2 px-6 h-[52px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">Contact Us</button>
        </div>
      </FadeUp>
    </section>
  );
}

const AboutUs = () => (
  <div>
    <AboutHero />
    <OurJourneyTeam />
    <WhoWeAre />
    <OurMoments />
    <WhyChooseDeleosys />
    <DrivenByInnovation />
  </div>
);

export default AboutUs;

