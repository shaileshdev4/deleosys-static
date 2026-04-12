import React from "react";
import { brandConfig } from "../../config/brandConfig";

const config = brandConfig.meta.whyChooseus;
const features = [
  {
    title: "Business-first approach",
    description: "Design driven by real user needs",
    image: config.features.skill,
  },
  {
    title: "Scalable & future-ready solutions",
    description: "Built to evolve with your business and technology roadmap",
    image: config.features.scalibilty,
  },
  {
    title: "Collaborative, transparent process",
    description: "Balancing speed, quality, and long-term value",
    image: config.features.deal,
  },
];

function WhyChooseUs() {
  return (
  <section className="w-full bg-[#FFFFFF] py-0">
      <div className="max-w-[1315px] mx-auto px-4 sm:px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* LEFT IMAGE */}
<div className="w-full max-w-[688px] mx-auto px-4 sm:px-0">
  
  <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[489px] flex items-center justify-center">
    
    <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg">
      <img
        src={config.wcuimage}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>

</div>

        {/* RIGHT CONTENT */}
<div className="flex flex-col gap-0 sm:gap-0 w-full max-w-[541px] mx-auto">
  
  <div className="text-center sm:text-left">
    
          <div className="min-h-[40px] sm:min-h-[50px] lg:min-h-[58px] items-center sm:items-start justify-center flex flex-col gap-[3px] mb-5 sm:gap-[4px]">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[157%] tracking-[0.05em] font-medium text-[#F7931E]">
                 Why Choose Us
              </p>
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-[#1F2A44] leading-[120%]">
               Why partner with us
              </h2>
              <div className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[8px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]" />
            </div>
            <p className="text-[#1C1C1C] text-[18px] leading-[1.5] mb-8 tracking-[0.002em] max-w-[454px]">
             We don’t just deliver projects — we build long-term digital partnerships.
            </p>
          </div>

          {/* FEATURES */}
  
          <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[289px] mx-auto sm:mx-0">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3">
                {/* ICON */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                  <img
                    src={f.image}
                    alt="icon"
                    className="w-4 h-4 sm:w-[32px] sm:h-[32px] object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h4 className="text-[#1F2A44] leading-[1.5] font-semibold text-[16px] mb-1">
                    {f.title}
                  </h4>

                  <p className="text-[#1C1C1C] text-[15px] leading-[1.6]">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
