import React from "react";

import { brandConfig } from "../../config/brandConfig";


const brand=brandConfig.meta.Industries.features;
const industries = [
  {
    title: "Logistics and Supply Chain",
    subtitle: "Smart Logistics",
    gradient: "from-[#1a3a5c] via-[#1e4a70] to-[#0d2540]",
    image:brand.shortbussinessman,

  },
  {
    title: "Travel & Hospitality",
    subtitle: "Digital Journeys",
    gradient: "from-[#1a4d6e] via-[#1a5c80] to-[#0d2e42]",
    image:brand.welcomepeople
  },
  {
    title: "Retail & E-Commerce",
    subtitle: "Smart Commerce",
    gradient: "from-[#7a2e0e] via-[#8a3a18] to-[#431a08]",
    image:brand.meeting,
  },
  {
    title: "Healthcare & Wellness",
    subtitle: "Trusted Care",
    gradient: "from-[#064e3b] via-[#065f46] to-[#022c22]",
    image:brand.doctormeeting,
  },
];

function IndustriesSupport() {
  return (
   <section className="w-full py-3 lg:py-0 bg-white flex items-center justify-center px-4">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px] mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] px-4 sm:px-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row  justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 min-h-[60px] sm:min-h-[70px] lg:min-h-[88px]">
          <div className="max-w-[541px] w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[88px] flex flex-col gap-[6px] sm:gap-[8px]">
            <div className="min-h-[40px] sm:min-h-[50px] lg:min-h-[58px] items-center sm:items-start justify-center flex flex-col gap-[2px] sm:gap-[4px]">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[157%] tracking-[0.05em] font-medium text-[#F7931E]">
                Industries
              </p>
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-[#1F2A44] leading-[120%]">
                Industries we support
              </h2>
              <div className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[8px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]" />
            </div>
          </div>

      <div className="flex justify-center sm:justify-start">
  <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[155%] tracking-[0.002em] text-[#1C1C1C] w-full max-w-[527px] min-h-[60px] sm:min-h-[70px] md:min-h-[84px] text-center sm:text-left mx-auto sm:mx-0">
    
    We understand that every industry has unique challenges.
    <br />
    Our solutions are tailored to meet specific business needs
    <br className="hidden md:block" />
    across sectors.

  </p>
</div>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] sm:gap-[20px] md:gap-[24px] min-h-[260px] sm:min-h-[300px] lg:min-h-[341px] place-items-center">
          {industries.map((industry, i) => (

            
           <div
  key={i}
  className="relative items-center flex justify-center w-full max-w-[302px] min-h-[280px] sm:min-h-[310px] lg:min-h-[341px] rounded-2xl overflow-hidden cursor-pointer"
>

  {/* IMAGE */}
  <img
    src={industry.image}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* CONTENT */}
  <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 w-full px-4 flex flex-col items-center gap-2 text-center">

    <h3 className="text-white font-bold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[128%]">
      {industry.title}
    </h3>

    <a
      href="#"
      className="text-[#F7931E] text-[12px] sm:text-[13px] md:text-sm font-medium flex items-center gap-1"
    >
      {industry.subtitle}
    </a>

  </div>

</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSupport;
