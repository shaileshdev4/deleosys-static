import { brandConfig } from "../../config/brandConfig";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ourservice = brandConfig.meta.OurServicesimg;

const services = [
  {
    title: "Digital Strategy",
    description: "We help organizations define clear digital roadmaps aligned with business goals.",
    icon: ourservice.supplychain,
  },
  {
    title: "Experience Design",
    description: "Human-centered design that creates meaningful, intuitive, and scalable user experiences.",
    icon: ourservice.userexperiance,
  },
  {
    title: "Technology & Development",
    description: "We help organizations define clear digital roadmaps aligned with business goals.",
    icon: ourservice.ideabulb,
  },
  {
    title: "Data, AI & Automation",
    description: "We enable smarter decisions and operational efficiency through data-driven solutions.",
    icon: ourservice.integration,
  },
];

const OurServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1286px] mx-auto px-6 md:px-[76px]">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[13px] font-medium tracking-[0.05rem] text-[#F7931E] uppercase mb-2">
            What we do
          </p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#11253E]">
            Our Services
          </h2>
          <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto mt-3 rounded-full" />
          <p className="text-[#4B5563] text-[14px] sm:text-[15px] text-center max-w-[600px] mx-auto mt-4 leading-[1.7]">
            We help organizations design, build, and scale digital solutions
            through a combination of strategy, design, and technology.
          </p>
        </div>

        {/* CARDS */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-2xl border border-[#1F2A44]/10 shadow-[0_2px_16px_rgba(31,42,68,0.08)] p-8 flex flex-col items-center text-center gap-5 hover:shadow-[0_4px_24px_rgba(230,92,0,0.15)] hover:border-[#F7931E]/30 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-[80px] h-[80px] rounded-full bg-[#F7931E]/10 flex items-center justify-center group-hover:bg-[#F7931E]/20 transition-colors duration-300">
                <img src={service.icon} alt={service.title} className="w-[40px] h-[40px]" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[#1C1C1C] font-semibold text-[18px] sm:text-[20px] leading-[130%]">
                  {service.title}
                </h3>
                <p className="text-[#4B5563] text-[14px] leading-[1.65]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
