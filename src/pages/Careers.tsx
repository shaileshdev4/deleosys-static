import type { ReactNode } from "react";
import { brandConfig } from "../config/brandConfig";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import { FaGlobeAmericas, FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const carrierimage = brandConfig.meta.carrier;

const whyWorkItems = [
  { title: "Innovate",  desc: "Work on next-gen technologies that solve real-world problems.", icon: carrierimage.Taketheright.rocketicon },
  { title: "Grow",      desc: "Continuous learning & career development opportunities.",       icon: carrierimage.Taketheright.growthicon },
  { title: "Thrive",    desc: "Be part of a supportive and inclusive culture.",                icon: carrierimage.Taketheright.groupicon },
];

const jobListings = [
  { title: "Full Stack Developer",  type: "Full-time", location: "Remote",  salary: "₹8–14 LPA" },
  { title: "UI/UX Designer",        type: "Full-time", location: "Hybrid",  salary: "₹6–10 LPA" },
  { title: "DevOps Engineer",       type: "Full-time", location: "Remote",  salary: "₹10–18 LPA" },
];

/** brandConfig.carrier.WhyJoinDeleosys has no growthicon — use distinct assets */
const culturePerks = [
  { title: "Flexible Hours",     desc: "Work when you're most productive.",          icon: carrierimage.WhyJoinDeleosys.devlopmenticon },
  { title: "Learning Budget",    desc: "Courses, books, and conferences covered.",   icon: carrierimage.WhyJoinDeleosys.gifticon },
  { title: "Remote-first",       desc: "Work from anywhere in India.",               icon: carrierimage.WhyJoinDeleosys.groupicon },
  { title: "Fast-track Growth",  desc: "Clear path from junior to senior.",          icon: carrierimage.WhyJoinDeleosys.trendicon },
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

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
function CareersHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[564px] flex items-center justify-center overflow-hidden">
      <img src={carrierimage.carrierhero.herobg} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex items-center justify-between px-6">
        <div className="flex flex-col gap-6 max-w-[620px] text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight">
              Careers
            </h1>
            <h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-medium leading-[1.2]">
              Join Our Team. <span className="gradient-text">Build the Future.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/90 text-[15px] sm:text-[17px] max-w-[520px] leading-[1.7]"
          >
            At Deleosys, we believe in innovation, collaboration, and growth. Be part of a team that is shaping the future with technology.
          </motion.p>
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-2 px-6 h-[52px] w-fit rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-semibold text-[15px] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Explore Opportunities
          </motion.button>
        </div>
        <div className="hidden lg:flex justify-end w-[480px]">
          <motion.img
            src={carrierimage.carrierhero.carrierheroimage1}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

// ─── 2. Job Search Bar ────────────────────────────────────────────────────────
function JobSearch() {
  return (
    <section className="w-full bg-white py-16">
      <FadeUp>
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h2 className="text-[26px] sm:text-[34px] font-bold text-[#1F2A44] leading-[1.3]">
            Take the right steps to find the right job for you
          </h2>
          <div className="w-[180px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] rounded-full mx-auto mt-3" />
          <p className="text-[#4B5563] text-[15px] mt-4 leading-[1.7]">
            Platform users who are passionate about what they do can find a lot of job opportunities.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-8 w-full bg-[#FFF7EF] py-6 px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-[1200px] mx-auto">
            {[
              { label: "Country",          icon: <FaGlobeAmericas className="text-orange-500 text-[18px]" /> },
              { label: "Location",         icon: <FaGlobeAmericas className="text-[#1F2A44] text-[18px]" /> },
              { label: "All Technologies", icon: <FaGlobeAmericas className="text-[#1F2A44] text-[18px]" /> },
            ].map((filter, i) => (
              <div key={i} className="flex items-center justify-between w-[200px] h-[48px] px-4 rounded-xl border border-[#1F2A44]/15 bg-white">
                <div className="flex items-center gap-2">
                  {filter.icon}
                  <span className="text-[13px] text-[#1C1C1C]">{filter.label}</span>
                </div>
                <FaAngleDown className="text-[#1C1C1C] text-[14px]" />
              </div>
            ))}
            <div className="flex items-center justify-between w-[200px] h-[48px] px-4 rounded-xl border border-[#1F2A44]/15 bg-white">
              <span className="text-[13px] text-[#1C1C1C]">Search Jobs</span>
              <IoSearchOutline className="text-orange-500 text-[18px]" />
            </div>
            <button type="button" className="flex items-center gap-2 px-5 h-[48px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white text-[14px] font-medium hover:scale-105 transition-all duration-300">
              Search <IoSearchOutline className="text-[16px]" />
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── 3. Why Work With Us ──────────────────────────────────────────────────────
function WhyWorkWithUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1047px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title="Why Work with Us?"
            subtitle="We help organizations design, build, and scale digital solutions through a combination of strategy, design, and technology."
          />
        </FadeUp>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {whyWorkItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl border border-[#1F2A44]/10 shadow-sm p-8 flex flex-col items-center text-center gap-5 hover:shadow-[0_4px_24px_rgba(230,92,0,0.14)] hover:border-[#F7931E]/30 transition-all duration-300"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[#F7931E]/10 flex items-center justify-center group-hover:bg-[#F7931E]/20 transition-colors duration-300">
                <img src={item.icon} alt={item.title} className="w-[36px] h-[36px]" />
              </div>
              <h3 className="text-[#1C1C1C] font-semibold text-[20px]">{item.title}</h3>
              <p className="text-[#4B5563] text-[14px] leading-[1.65]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Open Positions ────────────────────────────────────────────────────────
function OpenPositions() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1286px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title={
              <>
                Open <span className="gradient-text">Positions</span>
              </>
            }
            subtitle="Be part of a team where innovation, growth, and collaboration shape meaningful careers."
          />
        </FadeUp>
        <div ref={ref} className="flex flex-col md:flex-row gap-6 justify-center">
          {jobListings.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group w-full max-w-[390px] p-5 rounded-xl border border-[#1F2A44]/10 hover:border-[#F7931E]/40 hover:shadow-[0_4px_20px_rgba(230,92,0,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[48px] h-[48px] rounded-full bg-[#F7931E]/10 flex items-center justify-center shrink-0">
                  <img src={carrierimage.WhyJoinDeleosys.devlopmenticon} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <h3 className="text-[#1F2A44] font-semibold text-[17px] leading-[1.2]">{job.title}</h3>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-[#E5F7EE] text-[#16A34A] text-[12px] font-medium mt-1">
                    {job.type}
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-[28px] h-[28px] rounded-md bg-[#EAF2FF] flex items-center justify-center">
                    <IoLocationOutline className="text-[#2563EB] text-[16px]" />
                  </div>
                  <span className="text-[#2563EB] text-[12px] font-medium">{job.location}</span>
                </div>
              </div>
              <p className="text-[#9CA3AF] text-[13px] leading-[1.6] mb-4">
                Office operations & communication. Handle queries & coordination. Support in implementation. Experience required.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-[#F3F4F6] text-[#1C1C1C] text-[13px] font-medium">
                  {job.salary}
                </span>
                <button type="button" className="flex items-center gap-1.5 px-4 h-[36px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white text-[13px] font-medium hover:scale-105 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Why Join ──────────────────────────────────────────────────────────────
function WhyJoinDeleosys() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-[1285px] mx-auto px-6 md:px-[76px]">
        <FadeUp>
          <SectionHeader
            title="Why Join Deleosys?"
            subtitle="Be part of a team where innovation, growth, and collaboration shape meaningful careers."
          />
        </FadeUp>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <FadeUp delay={0.1}>
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden">
              <img src={carrierimage.WhyJoinDeleosys.wjuimage} alt="" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </FadeUp>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[580px]">
            {culturePerks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-[#1F2A44]/10 bg-white hover:bg-orange-50/40 hover:border-[#F7931E]/30 hover:shadow-[0_4px_16px_rgba(230,92,0,0.1)] transition-all duration-300"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-white shadow-md flex items-center justify-center mb-3 group-hover:shadow-orange-100 transition-all duration-300">
                  <img src={perk.icon} alt={perk.title} className="w-[28px] h-[28px]" />
                </div>
                <h3 className="text-[#1F2A44] font-semibold text-[16px] mb-1">{perk.title}</h3>
                <p className="text-[#4B5563] text-[13px] leading-[1.6]">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Careers = () => (
  <>
    <CareersHero />
    <JobSearch />
    <WhyWorkWithUs />
    <OpenPositions />
    <WhyJoinDeleosys />
  </>
);

export default Careers;
