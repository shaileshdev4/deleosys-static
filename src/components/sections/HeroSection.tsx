import { useEffect, useState } from "react";
import { brandConfig } from "../../config/brandConfig";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DemoModal } from "./DemoModal";

const slider = brandConfig.meta.home.hero;

const slides = [
  {
    bg: slider.slider1.image1,
    visual: slider.slider1.image2,
    title: ["Building", "future-ready", "digital", "experiences."],
    highlight: [3],
    description: "From strategy to design and technology, we help organizations transform ideas into scalable digital solutions.",
    buttons: [{ label: "Explore our work", variant: "primary" as const }],
    // slide 1 — image anchors bottom-right, sized to not overflow
    imgClass: "absolute bottom-[-170px] right-[-40px] w-[380px] sm:w-[520px] md:w-[640px] lg:w-[880px] xl:w-[1200px] pointer-events-none",
    imgAnim: "anim-glow",
  },
  {
    bg: slider.slider2.image1,
    visual: slider.slider2.image2,
    title: ["Courier", "Aggregator", "SaaS", "Platform"],
    highlight: [2, 3],
    description: "Aggregate and manage shipments from multiple courier services with a powerful SaaS platform designed for efficiency and scale.",
    buttons: [
      { label: "Explore Platform", variant: "primary" as const },
      { label: "Request Demo",     variant: "outline" as const },
    ],
    imgClass: "absolute right-[40px] top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[560px] lg:w-[680px] xl:w-[760px] pointer-events-none",
    imgAnim: "anim-breathe",
  },
];

const CountUp = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
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
  }, [active, target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [key, setKey]         = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);

  const goToSlide = (i: number) => { setCurrent(i); setKey((p) => p + 1); };

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p === 0 ? 1 : 0));
      setKey((p) => p + 1);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <>
      {/* keyframes injected once */}
      <style>{`
        @keyframes hero-glow {
          0%,100% { filter: drop-shadow(0 0 0px rgba(247,147,30,0)); }
          50%      { filter: drop-shadow(0 0 28px rgba(247,147,30,0.22)); }
        }
        @keyframes hero-breathe {
          0%,100% { transform: scale(1);    filter: drop-shadow(0 12px 32px rgba(0,0,0,0.4)); }
          50%      { transform: scale(1.018); filter: drop-shadow(0 20px 48px rgba(0,0,0,0.55)); }
        }
        @keyframes hero-shimmer {
          0%   { opacity: 0; transform: translateX(-100%) skewX(-12deg); }
          60%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%) skewX(-12deg); }
        }
        .anim-glow    { animation: hero-glow    3.5s ease-in-out infinite; }
        .anim-breathe { animation: hero-breathe 4s   ease-in-out infinite; }
      `}</style>

      <section className="relative w-full min-h-[520px] md:h-[680px]" style={{ overflow: "hidden" }}>

        {/* -- BG clip-wipe ------------------------------------------------- */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.7 }}
            animate={{ clipPath: "inset(0 0% 0 0)",   opacity: 1   }}
            exit={{    clipPath: "inset(0 0 0 100%)",  opacity: 0.7 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <img src={slide.bg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.10) 100%)"
            }} />
          </motion.div>
        </AnimatePresence>

        {/* -- Orbs --------------------------------------------------------- */}
        <div className="orb orb-1 top-[-80px] left-[-60px]" />
        <div className="orb orb-2 bottom-[-40px] left-[30%]"  />
        <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

        {/* -- Content ------------------------------------------------------ */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto flex items-center px-6 md:px-10 min-h-[520px] md:min-h-[680px]">
          <div className="flex flex-col gap-5 sm:gap-7 w-full max-w-[580px] text-white">

            <motion.div key={`label-${key}`} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4, delay:0.1 }}>
              <span className="section-label !text-white/75 !border-white/20 !bg-white/10">Digital Agency</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[115%] tracking-[-0.02em]">
              {slide.title.map((word, i) => (
                <motion.span
                  key={`${key}-${i}`}
                  initial={{ opacity:0, y:22, filter:"blur(4px)" }}
                  animate={{ opacity:1, y:0,  filter:"blur(0px)" }}
                  transition={{ duration:0.45, delay:0.2 + i * 0.08, ease:"easeOut" }}
                  className={`inline-block mr-[0.28em] ${slide.highlight.includes(i) ? "gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p key={`desc-${key}`} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.45, delay:0.6 }}
              className="text-white/75 text-[15px] sm:text-[16px] leading-[1.8] max-w-[480px]">
              {slide.description}
            </motion.p>

            <motion.div key={`btns-${key}`} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4, delay:0.75 }}
              className="flex gap-4 flex-wrap">
              {slide.buttons.map((btn, i) => (
                <button
                  key={i}
                  type="button"
                  className={btn.variant === "primary" ? "btn-primary" : "btn-outline"}
                  onClick={() => {
                    if (btn.label === "Request Demo") {
                      setDemoOpen(true);
                      return;
                    }
                    navigate("/contact");
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </motion.div>

            <motion.div key={`stats-${key}`} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.4, delay:1.0 }}
              className="flex gap-5 sm:gap-8 pt-3 border-t border-white/15 flex-wrap">
              {[
                { target: 150, suffix: "+", label: "Projects" },
                { target: 50, suffix: "+", label: "Clients" },
                { target: 5, suffix: "+", label: "Years" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[22px] font-bold text-white leading-none">
                    <CountUp target={s.target} suffix={s.suffix} active={key > 0 || current === 0} />
                  </span>
                  <span className="text-white/50 text-[11px] mt-1 font-medium uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* -- Right visual — hidden on mobile, shows from sm up ----------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`visual-${current}`}
            initial={{ opacity:0, x:50 }}
            animate={{ opacity:1, x:0  }}
            exit={{    opacity:0, x:-30 }}
            transition={{ duration:0.55, delay:0.2, ease:[0.76,0,0.24,1] }}
            className={`hidden sm:block ${slide.imgClass}`}
          >
            {/* shimmer sweep over image */}
            <div className="relative">
              <img
                src={slide.visual}
                alt=""
                className={`w-full h-auto object-contain ${slide.imgAnim}`}
                style={{ display:"block" }}
              />
              {/* one-time shimmer on slide enter */}
              <motion.div
                key={`shimmer-${key}`}
                initial={{ x:"-100%", opacity:0 }}
                animate={{ x:"200%",  opacity:[0,0.6,0] }}
                transition={{ duration:1.1, delay:0.5, ease:"easeInOut" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  mixBlendMode:"screen",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* -- Indicators --------------------------------------------------- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} type="button" onClick={() => goToSlide(i)}
              className="h-[3px] rounded-full transition-all duration-300"
              style={{
                width: current === i ? "32px" : "14px",
                background: current === i ? "linear-gradient(to right,#E65C00,#F7931E)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* -- Scroll hint -------------------------------------------------- */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
          className="absolute bottom-6 right-10 z-20 hidden md:flex flex-col items-center gap-2">
          <span className="text-white/35 text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y:[0,6,0] }}
            transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}
            className="w-px h-[28px]"
            style={{ background:"linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }}
          />
        </motion.div>

      </section>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default HeroSection;




