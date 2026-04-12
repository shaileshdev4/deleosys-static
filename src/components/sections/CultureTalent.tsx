import { brandConfig } from "../../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamworkingimage = brandConfig.meta.CultureTalent.teamworkingimage;

const values = ["Innovation-first", "Collaborative", "Growth mindset", "Result-driven"];

const CultureTalent = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* LEFT content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-[500px] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <span className="section-label">Culture & Talent</span>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1F2A44] leading-[120%]">
              Built by passionate <span className="gradient-text">problem solvers</span>
            </h2>
            <div className="gradient-divider w-[160px]" />

            <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75] max-w-[420px]">
              Our team brings together strategists, designers, and technologists who are passionate about building meaningful
              digital experiences that matter.
            </p>

            {/* value pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {values.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#1F2A44]/10 text-[#1F2A44] text-[13px] font-medium shadow-sm"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-[#E65C00] to-[#F7931E]"
                    aria-hidden
                  />
                  {label}
                </motion.span>
              ))}
            </div>

            <Link to="/careers" className="btn-primary mt-2 inline-flex items-center gap-2">
              Join our team <FaArrowRight className="text-[13px]" />
            </Link>
          </motion.div>

          {/* RIGHT image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full max-w-[580px] relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(31,42,68,0.12)] relative">
              <img src={teamworkingimage} alt="Our team" className="w-full h-[420px] object-cover" />
              {/* subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-2xl" />
            </div>

            {/* floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-[0_8px_32px_rgba(31,42,68,0.14)] px-5 py-4 border border-[#1F2A44]/10"
            >
              <p className="stat-number text-[28px]">20+</p>
              <p className="text-[#9CA3AF] text-[12px] mt-0.5 font-medium">Team members</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureTalent;
