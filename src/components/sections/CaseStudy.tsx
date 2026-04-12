import React from "react";
import { brandConfig } from "../../config/brandConfig";
import { FaPlayCircle } from "react-icons/fa";

  const peopledata =brandConfig.meta.casestudy.peopleanalyzingfinance;

function CaseStudy() {

  return (
  <section className=" w-full bg-white py-3 sm:py-16 lg:py-10">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-[58px] gap-10 md:gap-[80px]">

          {/* LEFT CONTENT */}

          {/* For Desktop N TAB */}
<div className="w-full sm:flex-1 max-w-full sm:max-w-[460px] mx-auto md:mx-0 text-center md:text-left">


           {/* Header Row */}
        <div className="flex flex-col   justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-7 mb-6 sm:mb-5 md:mb-2 min-h-[60px] sm:min-h-[70px] lg:min-h-[88px]  ">
          <div className="max-w-[541px] w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[88px] flex flex-col gap-[6px] sm:gap-[8px]">
            <div className="min-h-[40px] sm:min-h-[50px] lg:min-h-[58px] items-center sm:items-start justify-center flex flex-col gap-[2px] sm:gap-[4px]">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[157%] tracking-[0.05em] font-medium text-[#F7931E]">
                 Case Study
              </p>
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-[#1F2A44] leading-[120%]">
               Selected work & impact
              </h2>
              <div className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[8px] bg-gradient-to-r from-[#E65C00] to-[#F7931E]" />
            </div>
          </div>
            <p className="text-[#1C1C1C] text-[16px] sm:text-[18px] leading-[1.5] mb-8 tracking-[0.002em] max-w-[454px] mx-auto md:mx-0">
        These case studies highlight our process—from understanding
        business challenges to designing and building solutions that
        create value.
      </p>


        </div>

    {/* BUTTON */}
    <div className="flex justify-center md:justify-start">
      <a
        href="#"
        className="inline-flex items-center gap-[10px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-white font-medium px-[16px] py-[10px] rounded-full hover:opacity-90 transition"
      >
        View case study
      </a>
    </div>

  </div>

          {/* RIGHT IMAGE */}
      <div className="flex-1 w-full max-w-[626px]">

  <div className="rounded-2xl overflow-hidden w-full h-[240px] sm:h-[300px] md:h-[340px] relative">

    {/* IMAGE */}
    <img
      src={peopledata}
      alt=""
      className="w-full h-full object-cover"
    />

     {/* 🔹 DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* PLAY BUTTON */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full   flex items-center justify-center backdrop-blur-sm hover:bg-white/30 cursor-pointer transition">
        <FaPlayCircle className="text-white text-xl sm:text-2xl md:text-3xl" />
      </div>
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudy;