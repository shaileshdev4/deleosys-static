import type { ReactNode } from "react";
import { useState } from "react";
import { brandConfig } from "../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const contactimage = brandConfig.meta.contactPageData;

const offices = [
  {
    city: "Pune",
    badge: "Headquarters",
    badgeColor: "bg-[#E65C00]",
    address:
      "R6, Sector B, 1203S No. 74, Life Republic Marunji, Mulshi, Pune-411057 Maharashtra, India",
    icon: contactimage.icon.workplaceicon,
  },
  {
    city: "Amravati",
    badge: "Main Operations",
    badgeColor: "bg-[#1F2A44]",
    address: "First Floor, Govind Complex B127, Pote Patil Road, Amravati - 444604 Maharashtra, India",
    icon: contactimage.icon.brifcaseicon,
  },
  {
    city: "Nagpur",
    badge: "Office",
    badgeColor: "bg-[#1F2A44]",
    address:
      "2nd Floor, Padma Apartment, Pratap Nagar Main Road, Near Mate Square, Nagpur - 440022 Maharashtra, India",
    icon: contactimage.icon.officeicon,
  },
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

// â”€â”€â”€ 1. Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ContactHero() {
  return (
    <section className="relative w-full min-h-[340px] md:min-h-[420px] flex items-center overflow-hidden bg-[#0F1A2E]">
      {/* orbs */}
      <div className="orb orb-1 top-[-80px] right-[10%] opacity-15" />
      <div className="orb orb-2 bottom-[-40px] left-[20%] opacity-10" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 max-w-[600px]"
        >
          <span className="section-label !text-white/70 !border-white/20 !bg-white/10">Get in touch</span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold text-white leading-[115%] tracking-[-0.02em]">
            Let&apos;s build something <span className="gradient-text">great together</span>
          </h1>
          <p className="text-white/70 text-[16px] leading-[1.75] max-w-[480px]">
            Whether you have a project in mind, need support, or want to collaborate â€” our team is here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// â”€â”€â”€ 2. Form + CTA split â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const icons = brandConfig.meta.contact.images;
  const logo = brandConfig.meta.companylogo;

  const [form, setForm] = useState({
    fullName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    challenge: "",
    newsletter: false,
  });

  const update = (field: string, value: string | boolean) => setForm((p) => ({ ...p, [field]: value }));

  const isValid =
    form.fullName.trim() &&
    form.lastName.trim() &&
    form.email.includes("@") &&
    form.challenge.trim().length >= 10 &&
    form.service;

  const handleSubmit = async () => {
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          <FadeUp>
            <div className="w-full lg:flex-1 lg:max-w-[440px] flex flex-col gap-7 lg:sticky lg:top-28">
              <img src={logo} alt="Deleosys" className="w-[160px] h-auto" />
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1F2A44] leading-[1.2]">
                  Let&apos;s build <span className="gradient-text">What&apos;s next</span>
                </h2>
                <div className="gradient-divider w-[140px]" />
                <p className="text-[#4B5563] text-[15px] leading-[1.75]">
                  Whether you&apos;re building from scratch or transforming an existing business, we&apos;re here to help.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: icons.bulb, label: "Consulting & Development" },
                  { icon: icons.rocket, label: "Scalable Solutions" },
                  { icon: icons.global, label: "Global Delivery" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-xl bg-[#F7931E]/10 border border-[#FFDDC4] flex items-center justify-center shrink-0">
                      <img src={item.icon} alt="" className="w-[22px] h-[22px] object-contain" />
                    </div>
                    <span className="text-[#1F2A44] font-semibold text-[15px]">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#1F2A44]/10">
                <a
                  href="mailto:info@deleosys.com"
                  className="flex items-center gap-2 text-[#4B5563] text-[14px] hover:text-[#E65C00] transition-colors duration-200"
                >
                  <img src={contactimage.icon.mailicon} alt="" className="w-[18px] h-[18px]" />
                  info@deleosys.com
                </a>
                <a
                  href="tel:+919270137130"
                  className="flex items-center gap-2 text-[#4B5563] text-[14px] hover:text-[#E65C00] transition-colors duration-200"
                >
                  <img src={contactimage.icon.callicon} alt="" className="w-[18px] h-[18px]" />
                  +91 9270137130
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="w-full lg:flex-1 lg:max-w-[660px] bg-white rounded-2xl border border-[#1F2A44]/10 shadow-[0_8px_48px_rgba(31,42,68,0.1)] p-5 sm:p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center gap-5 py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 text-[32px]" />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#1F2A44]">Message sent!</h3>
                  <p className="text-[#4B5563] text-[15px] leading-[1.7] max-w-[340px]">
                    We&apos;ll get back to you within 24 hours. Looking forward to working with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        service: "",
                        challenge: "",
                        newsletter: false,
                      });
                    }}
                    className="btn-outline-dark mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-[20px] font-bold text-[#1F2A44] mb-6">Tell us about your project</h3>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1C1C1C] text-[13px] font-semibold">
                        Your challenge or goal <span className="text-[#EF4444]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        maxLength={300}
                        placeholder="Briefly describe what you're looking to build or improve"
                        value={form.challenge}
                        onChange={(e) => update("challenge", e.target.value)}
                        className="input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#4B5563] placeholder:text-[#9CA3AF] resize-none transition"
                      />
                      <p className="text-[11px] text-[#9CA3AF] text-right">{form.challenge.length}/300</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {([
                        { label: "First Name", field: "fullName", placeholder: "Enter your first name" },
                        { label: "Last Name", field: "lastName", placeholder: "Enter your last name" },
                      ] as const).map((f) => (
                        <div key={f.field} className="flex flex-col gap-1.5">
                          <label className="text-[#1C1C1C] text-[13px] font-semibold">
                            {f.label} <span className="text-[#EF4444]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder={f.placeholder}
                            value={form[f.field]}
                            onChange={(e) => update(f.field, e.target.value)}
                            className="input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#4B5563] placeholder:text-[#9CA3AF] transition"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1C1C1C] text-[13px] font-semibold">
                          Email Address <span className="text-[#EF4444]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#4B5563] placeholder:text-[#9CA3AF] transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1C1C1C] text-[13px] font-semibold">Company</label>
                        <input
                          type="text"
                          placeholder="Company or organization name"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#4B5563] placeholder:text-[#9CA3AF] transition"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1C1C1C] text-[13px] font-semibold">
                        Service needed <span className="text-[#EF4444]">*</span>
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="input-glow w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#4B5563] bg-white transition"
                      >
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>AI &amp; Automation</option>
                        <option>Cyber Security</option>
                        <option>Custom Software</option>
                        <option>Consulting</option>
                      </select>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.newsletter}
                        onChange={(e) => update("newsletter", e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-[#9E9E9E] accent-[#F37021]"
                      />
                      <span className="text-[13px] text-[#4B5563] leading-[1.6]">
                        I&apos;d like to receive occasional emails with insights, updates, and useful resources.
                      </span>
                    </label>

                    <p className="text-[12px] text-[#9CA3AF] leading-[1.6]">
                      By submitting, you agree to our{" "}
                      <a href="#" className="text-[#1C1C1C] underline hover:text-[#F37021] transition">
                        Privacy Policy
                      </a>
                      .
                    </p>

                    {error && (
                      <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-[13px]">
                        {error}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading || !isValid}
                      className={`btn-primary w-full justify-center mt-1 ${!isValid || loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send message <FaArrowRight className="text-[13px]" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ 3. Office cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function GetInTouch() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="text-center mb-14">
            <span className="section-label">Our offices</span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#11253E] mt-3">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="gradient-divider w-[120px] mx-auto mt-3" />
            <p className="text-[#4B5563] text-[15px] max-w-[520px] mx-auto mt-4 leading-[1.75]">
              Reach out via email or visit one of our offices â€” our team will respond promptly.
            </p>
          </div>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl border border-[#1F2A44]/10 shadow-sm p-6 flex flex-col gap-5 hover:shadow-[0_8px_32px_rgba(230,92,0,0.12)] hover:border-[#F7931E]/30 transition-all duration-300"
            >
              {/* header */}
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#F7931E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F7931E]/20 transition-colors duration-300">
                  <img src={office.icon} alt="" className="w-[26px] h-[26px] object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#1F2A44] font-bold text-[17px]">{office.city}</h3>
                    <span className={`text-[10px] font-semibold text-white px-2 py-0.5 rounded-full ${office.badgeColor}`}>
                      {office.badge}
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] text-[12px]">India</p>
                </div>
              </div>

              {/* divider */}
              <div className="h-px bg-[#1F2A44]/10" />

              {/* details */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={contactimage.icon.locationicon}
                    alt=""
                    className="w-[18px] h-[18px] shrink-0 mt-0.5 opacity-60"
                  />
                  <p className="text-[#4B5563] text-[13px] leading-[1.65]">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={contactimage.icon.mailicon} alt="" className="w-[18px] h-[18px] shrink-0 opacity-60" />
                  <a
                    href="mailto:support@deleosys.com"
                    className="text-[#4B5563] text-[13px] hover:text-[#E65C00] transition-colors duration-200"
                  >
                    support@deleosys.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <img src={contactimage.icon.callicon} alt="" className="w-[18px] h-[18px] shrink-0 opacity-60" />
                  <a
                    href="tel:+919270137130"
                    className="text-[#4B5563] text-[13px] hover:text-[#E65C00] transition-colors duration-200"
                  >
                    +91 9270137130
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Contact = () => (
  <div>
    <ContactHero />
    <ContactForm />
    <GetInTouch />
  </div>
);

export default Contact;

