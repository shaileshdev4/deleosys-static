import { brandConfig } from "../../config/brandConfig";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../style/gloabal.css"

function Footer() {
  const logo = brandConfig.meta.footerlogo;
  const contact = brandConfig.meta.contactPage;
  const whatsapp = brandConfig.meta.mainPhone;
  const nav = brandConfig.meta.home.nav;
  const whatsappDigits = whatsapp.replace(/\D/g, "");

  return (
    <footer
      className="
  w-full 
  bg-[#1F2A44]
  border-t-2 border-[#E65C00]/40 
  px-4 sm:px-6 md:px-10 lg:px-[77px] 
  py-10 sm:py-12 md:py-16 lg:py-[96px]
"
    >
      <div
        className="
  max-w-[1280px] 
  mx-auto 
  mt-8 sm:mt-10 md:mt-12 lg:mt-16 
  px-4 sm:px-6 md:px-0
"
      >
        <div
          className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-8 sm:gap-10 md:gap-12 
    mb-10
  "
        >
          <div
            className="
  w-full 
  max-w-[421px] 
  flex flex-col 
  gap-4 sm:gap-5 md:gap-6 
  justify-between
"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Logo */}

              <Link to="/">
                <img
                  src={logo}
                  alt="Deleosys"
                  className="w-[120px] sm:w-[140px] md:w-[160px] mb-3 sm:mb-4"
                />{" "}
              </Link>
              {/* Text */}
              <p
                className="
    text-[14px] sm:text-[16px] md:text-[18px] 
    leading-[1.5] 
    font-normal 
    tracking-[0.002em] 
    text-[#FFFFFF] 
    mb-2
  "
              >
                © 2026 {contact.companyName}. All rights reserved.
              </p>
            </div>

            <div
              className="
  w-full 
  max-w-[188px] mx-auto sm:mx-0
  flex flex-col 
  gap-4 
  items-center sm:items-start 
  text-center sm:text-left
"
            >
              <p
                className="
    text-[14px] sm:text-[16px] md:text-[18px] 
    leading-[1.3] 
    font-semibold mx-auto sm:mx-0
    tracking-[0.005em] 
    text-[#FFFFFF]
  "
              >
                Follow Us
              </p>

              <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-[36px] md:h-[36px] bg-[#F1F3F5] rounded-full flex items-center justify-center  hover:bg-[#fdf1de] 
      transition duration-300
    "
                >
                  <FaXTwitter className=" text-[#E65C00] text-2xl" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      w-8 h-8 sm:w-9 sm:h-9 md:w-[36px] md:h-[36px] 
      bg-[#F1F3F5] 
      rounded-full 
      flex items-center justify-center 
      hover:bg-[#fdf1de] 
      transition duration-300
    "
                >
                  <CgFacebook className=" text-[#E65C00] text-2xl" />
                </a>

                {/* Instagram  */}
                <a
                  href="https://www.instagram.com/deleosys?igsh=MTc0bjlycjQwdWF5Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      w-8 h-8 sm:w-9 sm:h-9 md:w-[36px] md:h-[36px] 
      bg-[#F1F3F5] 
      rounded-full 
      flex items-center justify-center 
      hover:bg-[#fdf1de] 
      transition duration-300
    "
                >
                  <FaInstagram className="bg-gradient-to-r from-[#E65C00] to-[#F7931E] bg-clip-text text-[#E65C00] text-2xl" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      w-8 h-8 sm:w-9 sm:h-9 md:w-[36px] md:h-[36px] 
      bg-[#F1F3F5] 
      rounded-full 
      flex items-center justify-center 
      hover:bg-[#fdf1de] 
      transition duration-300  
    " 
                >
          <FaWhatsapp className="text-[#E65C00] bg-clip-text bg-gradient-to-r from-[#E65C00] to-[#F7931E] text-2xl" />
                </ a>
              </div>
            </div>
          </div>

          {/* column 2: Contact Us */}
          <div
            className="
  w-full 
  max-w-[176px] 
  flex flex-col 
  gap-6 mx-auto sm:mx-0
  items-center sm:items-start 
  text-center sm:text-left
"
          >
            <p
              className="
    text-[16px] sm:text-[17px] md:text-[18px] 
    font-bold 
    leading-[1.3] 
    tracking-[0.005em] 
    text-[#FFFFFF]
  "
            >
              Contact Us
            </p>
            <div className="w-full flex flex-col gap-1 sm:gap-2">
              <p
                className="
    text-[14px] sm:text-[16px] md:text-[18px] 
    font-normal 
    leading-[1.4] 
    tracking-[0.002em] 
    text-[#FFFFFF]
  "
              >
                Get In Touch
              </p>

              <a
                href="mailto:hello@deleosys.com"
                className="
      text-[14px] sm:text-[16px] md:text-[18px] 
      font-normal 
      leading-[1.4] 
      tracking-[0.002em] 
      text-[#FFFFFF] 
      hover:text-[#F37021] 
      transition
      break-words
    "
              >
                info@deleosys.com
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div
            className="
  w-full 
  max-w-[176px] 
  flex flex-col 
  gap-6 sm:gap-8 mx-auto sm:mx-0
  justify-between 
  items-center sm:items-start 
  text-center sm:text-left
"
          >
            {/* Title */}
            <p
              className="
    text-[16px] sm:text-[17px] md:text-[18px] 
    font-bold 
    leading-[1.3] 
    tracking-[0.005em] 
    text-[#FFFFFF]
  "
            >
              Quick Links
            </p>

            {/* Links */}
            <ul className="flex flex-col gap-2 sm:gap-3">
              {nav.menuItems.map((item, i) => (
                <li key={i}>
                  {item.subMenu?.[0]?.path?.startsWith("http") ? (
                    <a
                      href={item.subMenu[0].path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-normal text-[#FFFFFF] hover:text-[#F37021] hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path === "#" ? item.subMenu?.[0]?.path ?? "/" : item.path}
                      className="text-[15px] font-normal text-[#FFFFFF] hover:text-[#F37021] hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="
  w-full 
  max-w-[279px] 
  mx-auto sm:mx-0
  flex flex-col 
  gap-[24px] 
"
          >
            <p className="text-[18px] font-bold leading-[23.4px] tracking-[0.5%] text-[#FFFFFF]">
              Newsletter
            </p>

            <p className="text-[18px] font-normal leading-[23.4px] tracking-[0.2%] text-[#FFFFFF]">
              Stay updated with our latest insights, news, and events.
            </p>

            <div
              className="
    w-full 
    h-[40px] 
    border border-[#BDBDBD] 
    rounded-[8px] 
    flex items-center justify-between 
    px-[12px] py-[7px]
  "
            >
              <input
                type="email"
                placeholder=" Enter your email id"
                className="outline-none bg-transparent text-[#FFFFFF] text-[14px] w-full placeholder:text-[#FFFFFF]/60"
              />

              <button type="button" className="btn-primary !h-[32px] !px-3 !text-[13px] shrink-0" aria-label="Subscribe">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
