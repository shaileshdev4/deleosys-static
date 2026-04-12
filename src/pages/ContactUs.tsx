import React from "react";

import { brandConfig } from "../config/brandConfig";

function ContactUs() {
  const logo = brandConfig.meta.companylogo;
  const icons = brandConfig.meta.contact.images;

  return (
    <section
      className="w-full bg-[#FEFCFA] 
min-h-[600px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[958px]
py-[0px] sm:py-[10px] md:py-[20px] lg:py-[20px]"
    >
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row 
    items-center justify-between 
    
    gap-6 sm:gap-8 md:gap-12 lg:gap-[43px] 
    
    min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[435px]"
        >
          {/* left side section */}

          <div className="flex-1 w-full max-w-[440px] mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[50px] min-h-[260px] sm:min-h-[300px]  lg:h-[326px]">
            <img
              src={logo}
              alt="Deleosys"
              className="w-[160px] lg:relative lg:mr-62 mx-auto sm:w-[200px] md:w-[220px] lg:w-[244px] h-auto mb-6 sm:mb-7 lg:mb-8"
            />
            <div className="w-full max-w-[497px] min-h-[160px] sm:min-h-[180px] lg:min-h-[208px] flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[32px]">
              <div className="flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[16px] min-h-[90px] sm:min-h-[110px] lg:min-h-[126px] ">
                <div className="mb-2 sm:mb-3">
                  <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#1F2A44] leading-[1.15] mb-1 text-center lg:whitespace-nowrap sm:text-left">
                    Let's build{" "}
                    <span className="text-[#F7931E]">What's next</span>
                  </h2>

                  <div className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[4px] sm:h-[5px] lg:h-[6px] rounded-[8px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto sm:mx-0"></div>
                </div>

                <p className="text-[#1C1C1C] text-[14px]  sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] tracking-[0.2%] mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-center sm:text-left">
                  Whether you're building from scratch or transforming an
                  existing business, we're here to help you move forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start mt-2 sm:mt-3 gap-[16px] sm:gap-[24px] lg:gap-[32px]">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  {/* Circle */}
                  <div
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] 
  rounded-[8px] bg-[#F7931E]/10 border border-[#FFDDC4] 
  flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={icons.bulb}
                      alt="Bulb Icon"
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className=" w-[122px]">
                    <p className="font-semibold text-[#1F2A44] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] tracking-[0.02em]">
                      Consulting and Development
                    </p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                  {/* Circle */}
                  <div
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] 
  rounded-[8px] bg-[#F7931E]/10 border border-[#FFDDC4] 
  flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={icons.rocket}
                      alt="Rocket Icon"
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-[122px] sm:w-[73px]">
                    <p className="font-semibold text-[#1F2A44] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] tracking-[0.02em]">
                      Scalable <br /> Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center justify-start gap-2 sm:gap-3 md:gap-4">
                  {/* Circle */}
                  <div
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] 
  rounded-[8px] bg-[#F7931E]/10 border border-[#FFDDC4] 
  flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={icons.global}
                      alt="Global Icon"
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className=" w-[122px]">
                    <p className="font-semibold text-[#1F2A44] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] tracking-[0.02em]">
                      Global <br /> Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 w-full max-w-[720px] min-h-[500px] sm:min-h-[620px] md:min-h-[850px] lg:h-[765px] bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#FFDDC4] p-5 sm:p-6 md:p-7 lg:p-8 mx-auto">
            <div className="w-full max-w-[656px] flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] p-[16px] sm:p-[24px] lg:p-[32px]">
              <h3 className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[1.4] text-[#1F2A44] mb-4 sm:mb-5 lg:mb-6 text-center sm:text-left">
                Tell us about your project
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-4">
                <div className="w-full min-h-[110px] sm:min-h-[130px] lg:min-h-[146px] flex flex-col gap-[2px] sm:gap-[4px]">
                  <div>
                    <div className="w-full max-w-[656px] flex flex-col gap-[2px] sm:gap-[4px] min-h-[110px] sm:min-h-[130px] lg:min-h-[146px]">
                      <label className="text-[#1C1C1C] text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] font-medium block mb-1 sm:mb-1.5">
                        Your challenge or goal
                        <span className="text-[#EF4444]">*</span>
                      </label>
                      <textarea
                        placeholder="Briefly describe what you’re looking to build or improve"
                        className="w-full border bg-[#FFFFFF] border-[#BDBDBD] rounded-[8px] min-h-[80px] sm:min-h-[90px] lg:min-h-[96px] px-3 sm:px-4 py-2 sm:py-3 text-[13px] sm:text-[14px] text-[#4B5563] outline-none focus:border-[#F37021] transition placeholder:text-[#6B6B6B] resize-none"
                      />
                      <p className=" text-[12px] font text-[#6B6B6B] text-right mt-1">
                        max 300 characters
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  {/* First Name */}
                  <div className="w-full max-w-[318px] flex flex-col gap-[4px]">
                    <label className="text-[#1C1C1C] text-[14px] leading-[21px] font-medium">
                      First Name <span className="text-[#EF4444]">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[14px] text-[#4B5563] outline-none focus:border-[#F37021] transition placeholder:text-[#6B6B6B]"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="w-full max-w-[318px] flex flex-col gap-[4px]">
                    <label className="text-[#1C1C1C] text-[14px] leading-[21px] font-medium">
                      Last Name <span className="text-[#EF4444]">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[14px] text-[#4B5563] outline-none focus:border-[#F37021] transition placeholder:text-[#6B6B6B]"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  {/* Email */}
                  <div className="w-full max-w-[318px] flex flex-col gap-[4px]">
                    <label className="text-[#1C1C1C] text-[14px] leading-[21px] font-medium">
                      Email Address <span className="text-[#EF4444]">*</span>
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your work email"
                      className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[14px] text-[#4B5563] outline-none focus:border-[#F37021] transition placeholder:text-[#6B6B6B]"
                    />
                  </div>

                  {/* Company */}
                  <div className="w-full max-w-[318px] flex flex-col gap-[4px]">
                    <label className="text-[#1C1C1C] text-[14px] leading-[21px] font-medium">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company or organization name"
                      className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-[14px] text-[#4B5563] outline-none focus:border-[#F37021] transition placeholder:text-[#6B6B6B]"
                    />
                  </div>
                </div>

                {/* country Select input */}

                <div className="w-full max-w-[656px] flex flex-col gap-1 px-4 sm:px-0 mx-auto">
                  <label
                    className="block text-[#1C1C1C] font-medium 
text-[12px] sm:text-[13px] md:text-[14px] 
leading-[18px] sm:leading-[20px] md:leading-[21px] 
mb-1 sm:mb-1.5"
                  >
                    Country <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="w-full max-w-[656px]">
                    <select
                      className="w-full h-[40px] 
    px-[12px] py-[7px] 
    border border-[#BDBDBD] 
    rounded-[8px] 
    bg-white 
    text-[14px] text-[#1C1C1C] 
    outline-none 
    focus:border-[#F37021] 
    transition"
                    >
                      <option value="">Select type</option>
                      <option>India</option>
                      
                    </select>
                  </div>
                </div>

                <div className="w-full max-w-[656px] flex flex-col gap-2 sm:gap-3 px-4 sm:px-0 mx-auto">
                  <label className="flex items-start gap-3 sm:gap-4 w-full max-w-[561px] mx-auto cursor-pointer px-2 sm:px-0">
                    {/* Hidden Checkbox */}
                    <input type="checkbox" className="peer hidden" />

                    {/* Custom Checkbox */}
                    <div
                      className="w-4 h-4 min-w-[16px] border border-[#9E9E9E] rounded-[4px] 
  flex items-center justify-center 
  mt-[2px] 
  peer-checked:bg-[#F37021] peer-checked:border-[#F37021] 
  transition"
                    >
                      {/* Tick */}
                      <div className="w-[4px] h-[8px] border-white border-r-2 border-b-2 rotate-45 hidden peer-checked:block"></div>
                    </div>

                    {/* Text */}
                    <span
                      className="text-[12px] sm:text-[13px] md:text-[14px] 
  leading-[150%] sm:leading-[155%] md:leading-[157%] 
  text-[#1C1C1C]"
                    >
                      I’d like to receive occasional emails with insights,
                      updates, and useful resources.
                    </span>
                  </label>

                  <div className="w-full max-w-[656px] flex flex-col gap-2 px-4 sm:px-0 mx-auto">
                    <p
                      className="text-[12px] sm:text-[13px] md:text-[14px] 
leading-[1.4] sm:leading-[1.5] 
text-[#6B6B6B] 
max-w-[656px] w-full 
px-2 sm:px-0 mx-auto"
                    >
                      By submitting this form, you agree to our{" "}
                      <a
                        href="#"
                        className="font-medium text-[#1C1C1C] underline hover:text-[#F37021] transition"
                      >
                        Privacy Policy
                      </a>{" "}
                      and confirm that the information provided is accurate.
                    </p>

                    <p
                      className="text-[12px] sm:text-[13px] md:text-[14px] 
leading-[1.4] sm:leading-[1.5] 
text-[#6B6B6B] 
w-full max-w-[656px] 
px-2 sm:px-0 mx-auto"
                    >
                      This site is protected by reCAPTCHA and subject to the{" "}
                      <a
                        href="#"
                        className="font-medium text-[#1C1C1C] underline hover:text-[#F37021] transition"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-[#1C1C1C] underline hover:text-[#F37021] transition"
                      >
                        Terms of Service
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="w-full max-w-[656px] 
  h-[56px] 
  flex items-center justify-center gap-[10px] 
  px-[16px] py-[10px] 
  rounded-[28px] 
  bg-gradient-to-r from-[#E65C00] to-[#F7931E] 
  text-white font-semibold text-[14px] sm:text-[15px] 
  transition hover:opacity-90 mx-auto"
              >
                Send me message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
