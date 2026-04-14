import { brandConfig } from "../../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const config = brandConfig.meta.whyChooseus;

const features = [
  {
    title: "Business-first approach",
    desc: "Design driven by real user needs, not assumptions.",
    image: config.features.skill,
  },
  {
    title: "Scalable & future-ready solutions",
    desc: "Built to evolve with your business and technology roadmap.",
    image: config.features.scalibilty,
  },
  {
    title: "Collaborative, transparent process",
    desc: "Balancing speed, quality, and long-term value at every step.",
    image: config.features.deal,
  },
];

const CountUp = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 35);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}</>;
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* LEFT image */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full max-w-[540px] relative"
            ref={ref}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(31,42,68,0.12)]">
              <img src={config.wcuimage} alt="Why choose us" className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover" />
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-3 right-3 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl shadow-[0_8px_32px_rgba(31,42,68,0.14)] px-4 py-3 flex items-center gap-3 border border-[#1F2A44]/10"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#E65C00] to-[#F7931E] flex items-center justify-center shrink-0">
                <span className="text-white text-[16px] font-bold">★</span>
              </div>
              <div>
                <p className="text-[#1F2A44] font-bold text-[15px] leading-none">
                  <CountUp target={98} inView={inView} />% satisfaction
                </p>
                <p className="text-[#9CA3AF] text-[12px] mt-0.5">across all clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT content */}
          <div className="flex-1 max-w-[500px] flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-3">
              <span className="section-label">Why Choose Us</span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1F2A44] leading-[120%]">
                Why partner <span className="gradient-text">with us</span>
              </h2>
              <div className="gradient-divider w-[160px]" />
              <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75] max-w-[420px]">
                We don&apos;t just deliver projects — we build long-term digital partnerships that grow with your business.
              </p>
            </div>

            {/* features */}
            <div className="flex flex-col gap-4 w-full">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-[#1F2A44]/10 hover:border-[#F7931E]/30 hover:bg-orange-50/40 hover:shadow-[0_4px_20px_rgba(230,92,0,0.08)] transition-all duration-300 cursor-default"
                >
                  <div className="w-[44px] h-[44px] rounded-xl bg-[#F7931E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F7931E]/20 transition-colors duration-300">
                    <img src={f.image} alt="" className="w-[22px] h-[22px] object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[#1F2A44] font-semibold text-[15px] mb-1">{f.title}</h4>
                    <p className="text-[#4B5563] text-[13px] leading-[1.65]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
