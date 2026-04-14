import { brandConfig } from "../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const icons = brandConfig.meta.contact.images;

const perks = [
  { icon: icons.bulb, label: "Consulting & Development" },
  { icon: icons.rocket, label: "Scalable Solutions" },
  { icon: icons.global, label: "Global Delivery" },
];

const ContactUs = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="relative w-full bg-[#0F1A2E] overflow-hidden py-20 md:py-28">
      {/* orbs */}
      <div className="orb orb-1 top-[-60px] right-[5%] opacity-15" />
      <div className="orb orb-2 bottom-[-40px] left-[15%] opacity-10" />
      <div className="orb orb-3 top-[40%] right-[30%] opacity-[0.08]" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-[480px] flex flex-col gap-7 text-center lg:text-left items-center lg:items-start"
          >
            <span className="section-label !text-white/70 !border-white/20 !bg-white/10">Start a project</span>

            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white leading-[1.15] tracking-[-0.02em]">
              Let&apos;s build <span className="gradient-text">What&apos;s next</span>
            </h2>

            <div className="gradient-divider w-[140px]" />

            <p className="text-white/60 text-[15px] sm:text-[16px] leading-[1.75] max-w-[400px]">
              Whether you&apos;re building from scratch or transforming an existing business, we&apos;re here to help you move
              forward.
            </p>

            {/* perks */}
            <div className="flex flex-col gap-3 w-full">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-[40px] h-[40px] rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <img src={perk.icon} alt="" className="w-[20px] h-[20px] object-contain" />
                  </div>
                  <span className="text-white/80 font-medium text-[14px]">{perk.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full max-w-[520px]"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-[22px]">Ready to get started?</h3>
                <p className="text-white/55 text-[14px] leading-[1.7]">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* quick form */}
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#F7931E] transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Work email address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#F7931E] transition-all duration-200"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#F7931E] transition-all duration-200 resize-none"
                />
                <button type="button" onClick={() => navigate("/contact")} className="btn-primary w-full justify-center">
                  Send message <FaArrowRight className="text-[13px]" />
                </button>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <p className="text-white/40 text-[12px]">Want the full form?</p>
                <Link
                  to="/contact"
                  className="text-[#F7931E] text-[12px] font-semibold hover:text-[#F7931E]/80 transition-colors duration-200 flex items-center gap-1"
                >
                  Visit contact page <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
