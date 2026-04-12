import React from "react";

import { brandConfig } from "../../config/brandConfig";

function CultureTalent() {
  const teamworkingimage = brandConfig.meta.CultureTalent.teamworkingimage;
  return (
   <section className="w-full bg-[#FFFFFF] py-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-[58px] gap-6 mx-auto md:gap-[80px]">

          {/* LEFT CONTENT */}


          <div className="w-full sm:flex-1 max-w-full sm:max-w-[541px] mx-auto md:mx-0 text-center md:text-left">

           {/* Header Row */}
        <div className="flex flex-col   justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-7 mb-6 sm:mb-0 md:mb-2 min-h-[60px] sm:min-h-[70px] lg:min-h-[88px]  ">
          <div className=" w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[88px] flex flex-col gap-[6px] sm:gap-[8px]">
            <div className="min-h-[40px] sm:min-h-[50px] lg:min-h-[58px] items-center sm:items-start justify-center flex flex-col gap-[2px] sm:gap-[4px]">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[157%] tracking-[0.05em] font-medium text-[#F7931E]">
                Culture & Talent
              </p>
              <h2 className="text-[26px]  sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-[#1F2A44] leading-[120%] whitespace-nowrap">
               Built by passionate <br className=" block lg:hidden" /> problem <br className=" hidden lg:block" /> solvers
              </h2>
              <div className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[8px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]" />
            </div>
          </div>
            <p className="text-[#1C1C1C] text-[16px] sm:text-[18px] leading-[1.5] mb-8 tracking-[0.002em] max-w-[454px] mx-auto md:mx-0">
       Our team brings together strategists, designers, and 
technologists who are passionate about building 
meaningful digital experiences.
      </p>


        </div>

    {/* BUTTON */}
    <div className="flex justify-center md:justify-start">
       {/* BUTTON */}
          <button className="mt-2 p-[2px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E]">
              <span className="flex items-center justify-center h-[40px] px-4 bg-white rounded-full text-[#E65C00] font-semibold">
                Join our team
              </span>
            </button>
    </div>

  </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full max-w-[626px]">

            <div className="rounded-2xl overflow-hidden w-full h-[491px]  relative flex items-center justify-center">
               <img src={ teamworkingimage} alt="" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CultureTalent;
