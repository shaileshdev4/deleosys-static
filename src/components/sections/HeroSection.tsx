import { useEffect, useState } from "react";
import { brandConfig } from "../../config/brandConfig";
import { motion, AnimatePresence } from "framer-motion";

const slider = brandConfig.meta.home.hero;

const slides = [
  {
    bg: slider.slider1.image1,
    visual: slider.slider1.image2,
    title: ["Building", "future-ready", "digital", "experiences."],
    highlight: [3], // index of words to gradient
    description: "From strategy to design and technology, we help organizations transform ideas into scalable digital solutions.",
    buttons: [
      { label: "Explore our work", variant: "primary" as const },
    ],
  },
  {
    bg: slider.slider2.image1,
    visual: slider.slider2.image2,
    title: ["Courier", "Aggregator", "SaaS", "Platform"],
    highlight: [2, 3],
    description: "Aggregate and manage shipments from multiple courier services with a powerful SaaS platform designed for efficiency and scale.",
    buttons: [
      { label: "Explore Platform", variant: "primary" as const },
      { label: "Request Demo", variant: "outline" as const },
    ],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
      setKey((prev) => prev + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden min-h-[500px] md:h-[620px]">

      {/* ── Animated BG ───────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.bg}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* dark overlay — slightly heavier for text legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* ── Ambient orbs ──────────────────────────────────────────────────── */}
      <div className="orb orb-1 top-[-80px] left-[-60px]" />
      <div className="orb orb-2 bottom-[-40px] left-[30%]" />
      <div className="orb orb-3 top-[20%] left-[15%]" />

      {/* ── Subtle grid overlay ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto h-full flex items-center px-6 md:px-10 min-h-[500px] md:min-h-[620px]">
        <div className="flex flex-col gap-7 max-w-[640px] text-white">

          {/* eyebrow label */}
          <motion.div
            key={`label-${key}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="section-label !text-white/80 !border-white/20 !bg-white/10">
              Digital Agency
            </span>
          </motion.div>

          {/* headline — word by word */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[115%] tracking-[-0.02em]">
            {slide.title.map((word, i) => (
              <motion.span
                key={`${key}-${i}`}
                initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                className={`inline-block mr-[0.28em] ${
                  slide.highlight.includes(i) ? "gradient-text" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* description */}
          <motion.p
            key={`desc-${key}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6 }}
            className="text-white/80 text-[15px] sm:text-[17px] leading-[1.75] max-w-[520px]"
          >
            {slide.description}
          </motion.p>

          {/* buttons */}
          <motion.div
            key={`btns-${key}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            className="flex gap-4 flex-wrap"
          >
            {slide.buttons.map((btn, i) => (
              <button
                key={i}
                type="button"
                className={btn.variant === "primary" ? "btn-primary" : "btn-outline"}
              >
                {btn.label}
              </button>
            ))}
          </motion.div>

          {/* micro stats row */}
          <motion.div
            key={`stats-${key}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="flex gap-8 pt-2 border-t border-white/15 mt-1"
          >
            {[
              { value: "150+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "5+", label: "Years" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[22px] font-bold text-white leading-none">{stat.value}</span>
                <span className="text-white/55 text-[12px] mt-1 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right visual ──────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`visual-${current}`}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="float absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none
              w-[220px] sm:w-[380px] md:w-[520px] lg:w-[660px] xl:w-[740px]"
          >
            <img
              src={slide.visual}
              alt=""
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide indicators ──────────────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setCurrent(i);
              setKey((p) => p + 1);
            }}
            className="h-[3px] rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: current === i ? "32px" : "14px",
              background: current === i
                ? "linear-gradient(to right, #E65C00, #F7931E)"
                : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* ── Scroll hint ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-10 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/40 text-[11px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-[32px] bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
