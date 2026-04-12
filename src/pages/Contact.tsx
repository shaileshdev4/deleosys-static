import { useState } from "react";
import { brandConfig } from "../config/brandConfig";

const servicesimage = brandConfig.meta.Services;
const contactimage = brandConfig.meta.contactPageData;


const WhatWeOffer = [
  {
    city: "Pune (India)",
    branch:"Headquarters",
    location:
      "Deleosys Technologies Pvt. Ltd. R6, Sector B, 1203S No. 74, Life Republic Marunji, Mulshi, Pune-411057 Maharashtra, India",
    icon: contactimage.icon.workplaceicon,
  },
  {
    city: "Amravati (India)",
     branch:"Main Operations Office",
    location:
      "Deleosys Technologies Pvt. Ltd.First Floor, Govind Complex B127, Pote Patil Road Amravati - 444604 Maharashtra, India",
    icon: contactimage.icon.brifcaseicon,
  },
  {
    city: "Nagpur (India)",
     branch:" Office",
    location:
      "Deleosys Technologies Pvt. Ltd. 2nd Floor, Padma Apartment Pratap Nagar Main RoadNear Mate Square, Pratap Nagar Nagpur - 440022 Maharashtra, India",
    icon: contactimage.icon.officeicon,
  },
];

// About Header Component
function ContactHero() {
  return (
    <section
      className="
  relative 
  w-full 
  min-h-[400px] 
  sm:min-h-[480px] 
  md:min-h-[520px] 
  lg:min-h-[564px] 
  flex items-center justify-center 
  overflow-hidden
"
    >
      {/* Background Image */}
      <img
        src={contactimage.herosection.contactherobg}
        alt="bg"
        className="
    absolute inset-0 
    w-full h-full 
    object-cover 
    object-center 
    z-0
  "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1020px] mx-auto flex items-center justify-between px-6">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 max-w-[805px] sm:max-w-[805px] text-">
          <div className=" flex flex-col w-full h-auto gap-[6px]">
            <h1
              className="
          font-bold 
          text-white 
          max-w-[808px]

          text-[20px] 
          sm:text-[40px] 
          md:text-[48px] 
          lg:text-[56px] 
          xl:text-[64px]

          leading-[110%] 
          tracking-[-0.05em]
        "
              style={{ fontFamily: "Space Grotesk" }}
            >
              Contact Us
            </h1>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className=" flex justify-center lg:justify-end w-[500px] mt-20 whitespace-nowrap sm:mt-0">
          <img
            src={contactimage.herosection.contactheromain}
            alt="illustration"
            className="w-[300px] sm:w-[566px] md:w-[566px] lg:w-[566px] xl:w-[515px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section className="w-full bg-[#FFFFFF] min-h-[386px] pt-[72px] relative z-10 mb-10">
      <div className="max-w-[1286px] mx-auto px-4 sm:px-8 lg:px-[76px]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[40px] font-semibold text-[#11253E]">
            Contact Us
          </h2>

          <div className="w-[170px] sm:w-[260px] h-[6px] bg-gradient-to-r from-[#E65C00] to-[#F7931E] mx-auto mt-2 rounded-full" />

          <p className="text-[#1C1C1C] text-[12px] sm:text-[18px] max-w-[700px] mx-auto mt-2 leading-[158%]">
            We’d love to hear from you. Whether you have a project in mind, need
            support, or want to collaborate — our team is here to help.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-12 justify-center">
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
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>Consulting</option>
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

const GetInTouch = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="w-full bg-[#FFFFFF] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-10">
      <div className="w-full max-w-[1439px] mx-auto min-h-[400px] md:min-h-[631px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-12">
          {/* 1 */}
          <div className="text-center mb-5 sm:mb-8 md:mb-5 min-h-[100px] sm:min-h-[110px] md:min-h-[122px]">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-center font-semibold mt-2 text-[#11253E]">
              Get in Touch
            </h2>
            <div className="w-[150px] sm:w-[110px] md:w-[260px]  h-[6px] bg-[#F7931E] mx-auto mt-1 rounded-full" />

            <p className="text-[#1C1C1C] font-normal text-[11px] sm:text-[12px] md:text-[12px] text-center max-w-[700px] w-full mx-auto leading-[158%] tracking-[0.002rem] mt-1 px-2 sm:px-0">
              Reach out to us via email or visit one of our offices — our team
              will respond promptly.
            </p>
          </div>

          {/* Cards */}
          <div
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
w-full max-w-[1236px] mx-auto 
gap-6 sm:gap-8 lg:gap-[24px] "
          >
            {WhatWeOffer.map((WhatWeOffer, i) => (
              <div
                className="
w-full max-w-[412px] 
min-h-[260px] sm:min-h-[300px] lg:min-h-[354px] 
bg-white rounded-xl 
border border-[#1F2A44]/15 
shadow-[0_4px_16px_rgba(31,42,68,0.12)] 
mx-auto pb-7 sm:p-5 lg:p-6  flex items-center  
"
              >
                <div
                  key={i}
                  className="
  relative 
  w-full max-w-full mx-auto 
  min-h-full sm:min-h-full lg:w-[390px]
  p-2 sm:p-2 lg:p-3 
  flex flex-col items-center justify-center 
  gap-7 sm:gap-7"
                >

        {/* <div
          key={i}
          onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          className={`relative 
          w-full max-w-full mx-auto 
          min-h-full sm:min-h-full lg:w-[390px]
          p-2 sm:p-2 lg:p-3 
          flex flex-col items-center justify-center 
          gap-1 sm:gap-7 
          cursor-pointer transition-all duration-300
          
          ${
            activeIndex === i
              ? "bg-orange-50 rounded-xl shadow-lg"
              : "bg-white md:hover:bg-white hover:bg-orange-100"
          }`}
        > */}
          

                  {/* ICON */}

                  <div className="w-full flex  ml-12 sm:ml-0 md:justify-start">
                    <div className="flex items-center gap-4">
                      {/* Circle */}
                      <div
                        className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] 
  rounded-full bg-[#F7931E]/10 shadow-md flex items-center justify-center flex-shrink-0"
                      >
                        <img
                          src={WhatWeOffer.icon}
                          alt="icon"
                          className="h-[28px] w-[28px] sm:h-[48px] sm:w-[48px]"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-full max-w-[163px] flex flex-col gap-1 ">
                        <h3 className="text-sm font-semibold">{WhatWeOffer.city}</h3>
                        <p className="text-xs text-gray-500">{WhatWeOffer.branch}</p>
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="sm:mt-5 md:mb-15   mt-0 mb-20  flex flex-col w-[300px] h-[88px] gap-[8px] text-start">
                    

               <div className="flex gap-3 items-start">
  
  <span className="flex-shrink-0">
    <img 
      src={contactimage.icon.locationicon} 
      alt="location" 
      className="w-[22px] h-[24px] object-contain"
    />
  </span>

  <p className="text-[14px] sm:text-[12px] md:text-[14px] text-[#1C1C1C] leading-relaxed">
    {WhatWeOffer.location}
  </p>

</div>


                  
  <p className=" flex gap-3">

                    <span> <img src={contactimage.icon.mailicon} alt="" className=" w-[20px] flex" /></span>
                    <p
                      className="text-[14px] sm:text-[12px] md:text-[14px] 
        text-[#1C1C1C] leading-relaxed"
                    >  <a href=" mailto:support@deleosys.com">support@deleosys.com</a>  
                    </p>
                    </p>


                      <p className=" flex gap-3">

                    <span> <img src={contactimage.icon.callicon} alt="" className=" w-[20px] flex" /></span>

                    <p
                      className="text-[14px] sm:text-[12px] md:text-[14px] 
        text-[#1C1C1C] leading-relaxed"
                    >
                       <a href="tel:+919270137130">+91 9270137130</a>
                    </p>

                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactUs />
      <GetInTouch />
    </div>
  );
};
export default Contact;
