import { brandConfig } from "../../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const peopledata = brandConfig.meta.casestudy.peopleanalyzingfinance;

const metrics = [
  { target: 3, suffix: "×", label: "Faster load time" },
  { target: 40, suffix: "%", label: "Reduced bounce rate" },
  { target: 2, suffix: "×", label: "Lead conversion lift" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 30;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const CaseStudy = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-28">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-[500px] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <span className="section-label">Case Study</span>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1F2A44] leading-[120%]">
              Selected work <span className="gradient-text">&amp; impact</span>
            </h2>
            <div className="gradient-divider w-[160px]" />

            <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75] max-w-[420px]">
              These case studies highlight our process — from understanding business challenges to designing and building solutions
              that create measurable value.
            </p>

            {/* metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mt-2">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center lg:items-start gap-1 p-3 rounded-xl bg-white border border-[#1F2A44]/10 shadow-sm"
                >
                  <span className="stat-number text-[20px] sm:text-[26px]">
                    <CountUp target={m.target} suffix={m.suffix} inView={inView} />
                  </span>
                  <span className="text-[#9CA3AF] text-[11px] font-medium leading-[1.4]">{m.label}</span>
                </motion.div>
              ))}
            </div>

            <button type="button" onClick={() => navigate("/our-products")} className="btn-primary mt-2">
              View case study <FaArrowRight className="text-[13px]" />
            </button>
          </motion.div>

          {/* RIGHT — video thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full max-w-[600px]"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => setPlaying(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setPlaying(true);
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_40px_rgba(31,42,68,0.15)]"
            >
              <img
                src={peopledata}
                alt="Case study"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />

              {/* play button */}
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <FaPlay className="text-white text-[20px] ml-1" />
                  </div>
                </div>
              )}

              {/* bottom tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[#E65C00] text-white text-[12px] font-semibold">Logistics Client</span>
                <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-[12px] font-medium border border-white/20">
                  3 min read
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
