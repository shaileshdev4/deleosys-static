import { useState, useEffect, type ReactNode } from "react";
import { brandConfig } from "../config/brandConfig";
import { IoSearchOutline } from "react-icons/io5";
import { FaGlobeAmericas, FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { FiUser, FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

const carrierimage = brandConfig.meta.carrier;

const whyWorkItems = [
  { title: "Innovate",  desc: "Work on next-gen technologies that solve real-world problems.", icon: carrierimage.Taketheright.rocketicon },
  { title: "Grow",      desc: "Continuous learning & career development opportunities.",       icon: carrierimage.Taketheright.growthicon },
  { title: "Thrive",    desc: "Be part of a supportive and inclusive culture.",                icon: carrierimage.Taketheright.groupicon },
];

const daysAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
};

interface Job {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  salaryMin: number | null;
  salaryMax: number | null;
  description: string;
  requirements: string;
  createdAt: string;
}

interface ApplyForm {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  coverLetter: string;
}

/** brandConfig.carrier.WhyJoinDeleosys has no growthicon â€” use distinct assets */
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

// â”€â”€â”€ 1. Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
            onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth", block: "start" })}
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

// â”€â”€â”€ 2. Job Search Bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 max-w-[1200px] mx-auto px-4">
            {[
              { label: "Country",          icon: <FaGlobeAmericas className="text-orange-500 text-[18px]" /> },
              { label: "Location",         icon: <FaGlobeAmericas className="text-[#1F2A44] text-[18px]" /> },
              { label: "All Technologies", icon: <FaGlobeAmericas className="text-[#1F2A44] text-[18px]" /> },
            ].map((filter, i) => (
              <div key={i} className="flex items-center justify-between w-full sm:w-[200px] h-[48px] px-4 rounded-xl border border-[#1F2A44]/15 bg-white">
                <div className="flex items-center gap-2">
                  {filter.icon}
                  <span className="text-[13px] text-[#1C1C1C]">{filter.label}</span>
                </div>
                <FaAngleDown className="text-[#1C1C1C] text-[14px]" />
              </div>
            ))}
            <div className="flex items-center justify-between w-full sm:w-[200px] h-[48px] px-4 rounded-xl border border-[#1F2A44]/15 bg-white">
              <span className="text-[13px] text-[#1C1C1C]">Search Jobs</span>
              <IoSearchOutline className="text-orange-500 text-[18px]" />
            </div>
            <button type="button" onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="flex items-center gap-2 px-5 h-[48px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white text-[14px] font-medium hover:scale-105 transition-all duration-300">Search <IoSearchOutline className="text-[16px]" /></button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// â”€â”€â”€ 3. Why Work With Us â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€â”€ 4. Open Positions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ApplyModal = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const [form, setForm] = useState<ApplyForm>({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (f: keyof ApplyForm, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const isValid = form.fullName.trim() && form.email.includes("@") && form.phone.trim().length >= 10;

  const handleSubmit = async () => {
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/careers/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, jobId: job.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#1F2A44] placeholder:text-[#9CA3AF] transition outline-none";
  const labelCls = "text-[#1C1C1C] text-[13px] font-semibold mb-1.5 block";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto w-full max-w-[540px] bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <div className="px-5 sm:px-8 pt-6 pb-5 border-b border-[#F3F4F6] flex items-start justify-between">
            <div>
              <span className="section-label mb-2 inline-flex">Apply Now</span>
              <h2 className="text-[20px] font-bold text-[#1F2A44] mt-2">{job.title}</h2>
              <p className="text-[#6B7280] text-[13px] mt-0.5">
                {job.department} · {job.type} · {job.location}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors shrink-0 mt-1"
            >
              <FaTimes className="text-[#6B7280] text-[12px]" />
            </button>
          </div>

          <div className="px-5 sm:px-8 py-5 sm:py-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-4 py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center"
                >
                  <FaCheckCircle className="text-green-500 text-[32px]" />
                </motion.div>
                <h3 className="text-[18px] font-bold text-[#1F2A44]">Application Submitted!</h3>
                <p className="text-[#6B7280] text-[14px] leading-[1.7] max-w-[320px]">
                  Thanks <strong>{form.fullName}</strong>! We&apos;ve received your application for{" "}
                  <strong>{job.title}</strong>. We&apos;ll be in touch within 3-5 business days.
                </p>
                <button onClick={onClose} className="btn-primary mt-2">
                  Close
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      Full Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className={`${inputCls} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Phone <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputCls} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>
                    Email Address <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${inputCls} pl-10`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      LinkedIn <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <FiLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                      <input
                        type="url"
                        placeholder="linkedin.com/in/..."
                        value={form.linkedin}
                        onChange={(e) => update("linkedin", e.target.value)}
                        className={`${inputCls} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Portfolio <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="yourportfolio.com"
                      value={form.portfolio}
                      onChange={(e) => update("portfolio", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>
                    Cover Letter <span className="text-[#9CA3AF] font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us why you'd be a great fit..."
                    value={form.coverLetter}
                    onChange={(e) => update("coverLetter", e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {error && (
                  <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-[13px]">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValid || loading}
                  className={`btn-primary w-full justify-center mt-1 ${!isValid || loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application ✓"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

function OpenPositions() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/careers`)
      .then((r) => r.json())
      .then((d) => {
        setJobs(d.data || []);
        setLoadingJobs(false);
      })
      .catch(() => {
        setFetchError("Could not load jobs. Please refresh.");
        setLoadingJobs(false);
      });
  }, []);

  const formatSalary = (min: number | null, max: number | null) => {
    if (!min && !max) return "Competitive";
    if (min && max) return `₹${Math.round(min / 100000)}-${Math.round(max / 100000)} LPA`;
    return `₹${Math.round((min || max || 0) / 100000)} LPA`;
  };

  return (
    <section id="open-positions" className="w-full bg-white py-20">
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

        {loadingJobs && (
          <div className="flex justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-[#F7931E]/30 border-t-[#F7931E] rounded-full"
            />
          </div>
        )}

        {fetchError && <div className="text-center py-12 text-[#EF4444] text-[14px]">{fetchError}</div>}

        {!loadingJobs && !fetchError && jobs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#9CA3AF] text-[16px]">No open positions right now.</p>
            <p className="text-[#9CA3AF] text-[14px] mt-2">
              Check back soon or send us your resume at{" "}
              <a href="mailto:info@deleosys.com" className="text-[#E65C00] hover:underline">
                info@deleosys.com
              </a>
            </p>
          </div>
        )}

        <div ref={ref} className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group w-full p-5 rounded-xl border border-[#1F2A44]/10 hover:border-[#F7931E]/40 hover:shadow-[0_4px_20px_rgba(230,92,0,0.1)] transition-all duration-300 bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#F7931E]/10 flex items-center justify-center shrink-0">
                    <img src={carrierimage.WhyJoinDeleosys.devlopmenticon} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div>
                    <h3 className="text-[#1F2A44] font-semibold text-[17px] leading-[1.2]">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md bg-[#E5F7EE] text-[#16A34A] text-[11px] font-medium">
                        {job.type}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#EAF2FF] text-[#2563EB] text-[11px] font-medium">
                        {job.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#6B7280] text-[11px] font-medium">
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 sm:shrink-0 flex-wrap">
                  <div className="flex flex-col items-end">
                    <span className="text-[#1F2A44] font-semibold text-[14px]">
                      {formatSalary(job.salaryMin, job.salaryMax)}
                    </span>
                    <span className="text-[#9CA3AF] text-[11px] mt-0.5">Posted {daysAgo(job.createdAt)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setApplyJob(job)}
                    className="btn-primary !h-[38px] !px-5 !text-[13px] shrink-0"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-[13px] leading-[1.65] mt-3 line-clamp-2">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>{applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}</AnimatePresence>
    </section>
  );
}

// â”€â”€â”€ 5. Why Join â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

