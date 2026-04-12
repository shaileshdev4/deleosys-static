import { useEffect, useState } from "react";
import { brandConfig } from "../../config/brandConfig";
import { motion, AnimatePresence } from "framer-motion";

const slider = brandConfig.meta.home.hero;

const slides = [
  {
    bg: slider.slider1.image1,
    visual: slider.slider1.image2,
    title: "Building future-ready digital experiences.",
    description:
      "From strategy to design and technology, we help organizations transform ideas into scalable digital solutions.",
    buttons: [
      { label: "Explore our work", variant: "solid" },
    ],
  },
  {
    bg: slider.slider2.image1,
    visual: slider.slider2.image2,
    title: "Courier Aggregator SaaS Platform",
    description:
      "Aggregate and manage shipments from multiple courier services with a powerful SaaS platform designed for efficiency and scale.",
    buttons: [
      { label: "Explore Platform", variant: "solid" },
      { label: "Request Demo", variant: "outline" },
    ],
  },
];

// splits title into words for staggered reveal
const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[120%]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-[400px] md:h-[564px]">

      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index !== current ? null : (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full min-h-[400px] md:h-[564px]"
            >
              {/* BG */}
              <img
                src={slide.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/45" />

              {/* CONTENT */}
              <div className="relative z-10 w-full max-w-[1200px] mx-auto h-full flex items-center mt-20 sm:mt-0 px-10">
                <div className="flex flex-col gap-6 max-w-[670px] text-white">
                  
                  <WordReveal text={slide.title} />

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-xs sm:text-base md:text-lg xl:text-[16px] font-normal text-white tracking-[0.002em] max-w-[580px]"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex gap-6 flex-wrap"
                  >
                    {slide.buttons.map((btn, i) => (
                      btn.variant === "solid" ? (
                        <button
                          key={i}
                          className="flex items-center gap-2 px-5 h-[52px] w-fit rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-semibold text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                        >
                          {btn.label}
                        </button>
                      ) : (
                        <button
                          key={i}
                          className="flex items-center gap-2 px-5 h-[52px] w-fit rounded-full border-2 border-white text-white font-semibold text-[16px] transition-all duration-300 hover:bg-white/10 hover:scale-105"
                        >
                          {btn.label}
                        </button>
                      )
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] md:w-[844px] lg:w-[944px] h-auto mt-30 sm:mt-0 pointer-events-none">
                <motion.img
                  src={slide.visual}
                  alt=""
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* SLIDE INDICATORS — thin lines replacing cheap dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-[3px] rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: current === i ? "28px" : "14px",
              background: current === i
                ? "linear-gradient(to right, #E65C00, #F7931E)"
                : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
