import { brandConfig } from "../../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const brand = brandConfig.meta.Industries.features;

const industries = [
  { title: "Logistics & Supply Chain", tag: "Smart Logistics", image: brand.shortbussinessman },
  { title: "Travel & Hospitality", tag: "Digital Journeys", image: brand.welcomepeople },
  { title: "Retail & E-Commerce", tag: "Smart Commerce", image: brand.meeting },
  { title: "Healthcare & Wellness", tag: "Trusted Care", image: brand.doctormeeting },
];

const IndustriesSupport = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="flex flex-col gap-3">
            <span className="section-label">Industries</span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1F2A44] leading-[120%]">
              Industries we <span className="gradient-text">support</span>
            </h2>
            <div className="gradient-divider w-[160px]" />
          </div>
          <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[1.75] max-w-[420px] mt-2">
            We understand that every industry has unique challenges. Our solutions are tailored to meet specific business needs
            across sectors.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative w-full aspect-[3/4] min-h-[280px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* image with zoom */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* base overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* hover overlay — slides up */}
              <div className="absolute inset-0 bg-linear-to-t from-[#E65C00]/80 via-[#E65C00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/80 text-[11px] font-semibold uppercase tracking-wider border border-white/20">
                  {industry.tag}
                </span>
                <h3 className="text-white font-bold text-[20px] leading-[130%]">{industry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSupport;
