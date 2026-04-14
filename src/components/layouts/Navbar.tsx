import { brandConfig } from "../../config/brandConfig";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../style/gloabal.css";

const NAVBAR_STYLES = `
  @keyframes nav-ping {
    0%   { transform: scale(1);   opacity: 0.7; }
    100% { transform: scale(1.9); opacity: 0;   }
  }
  .nav-ping {
    position: absolute;
    inset: -3px;
    border-radius: 9999px;
    border: 1.5px solid rgba(230,92,0,0.5);
    animation: nav-ping 2s ease-out infinite;
    pointer-events: none;
  }
  .nav-ping-2 { animation-delay: 1s; }
`;

const MobileAccordion = ({
  item,
  onClose,
}: {
  item: (typeof brandConfig.meta.home.nav.menuItems)[0];
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1F2A44]/08 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-3 text-[#1F2A44] font-medium hover:text-orange-500 transition"
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[12px] opacity-50"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4 pb-2"
          >
            {item.subMenu?.map((sub, i) =>
              sub.path.startsWith("http") ? (
                <a
                  key={i}
                  href={sub.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block py-2 text-[14px] text-[#4B5563] hover:text-orange-500 transition"
                >
                  {sub.label}
                </a>
              ) : (
                <Link
                  key={i}
                  to={sub.path}
                  onClick={onClose}
                  className="block py-2 text-[14px] text-[#4B5563] hover:text-orange-500 transition"
                >
                  {sub.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const nav = brandConfig.meta.home.nav;
  const logo = brandConfig.meta.companylogo;
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 300);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-[#F7F7F7]"
      }`}
    >
      <div className="w-full h-[50px] md:h-[85px] mx-auto py-4 flex items-center justify-between px-4 md:px-[40px]">
        
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Deleosys logo" className="w-[140px] md:w-[186px] h-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-[25px] lg:gap-[70px] text-[#1F2A44] font-medium text-[13.5px] lg:text-[16px]">
          {nav.menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleOpen(index)}
                onMouseLeave={handleClose}
              >
                {item.subMenu ? (
                  <button
                    type="button"
                    onClick={() => {
                      const firstPath = item.subMenu?.[0]?.path;
                      if (!firstPath) return;
                      if (firstPath.startsWith("http")) {
                        window.open(firstPath, "_blank", "noopener,noreferrer");
                        return;
                      }
                      navigate(firstPath);
                    }}
                    className="hover:text-orange-500 transition pb-1"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="relative pb-1 block hover:text-orange-500 transition"
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E]"
                      />
                    )}
                  </Link>
                )}

                {/* DROPDOWN */}
                <AnimatePresence>
                  {item.subMenu && openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg min-w-[200px] z-50 origin-top overflow-hidden"
                      onMouseEnter={() => handleOpen(index)}
                      onMouseLeave={handleClose}
                    >
                      {item.subMenu.map((sub, i) =>
                        sub.path.startsWith("http") ? (
                          <a
                            key={i}
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-[14px] text-[#1F2A44] hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            key={i}
                            to={sub.path}
                            className="block px-4 py-2.5 text-[14px] text-[#1F2A44] hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <>
          <style>{NAVBAR_STYLES}</style>
          <div className="hidden md:block relative">
            <div className="nav-ping" />
            <div className="nav-ping nav-ping-2" />
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="relative z-10 p-[2px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E]"
            >
              <span className="flex items-center justify-center h-[40px] px-4 bg-white rounded-full text-[#E65C00] font-semibold hover:bg-transparent hover:text-white transition duration-300">
                {nav.buttons.getstarted}
              </span>
            </button>
          </div>
        </>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white px-6 py-4 flex flex-col gap-1 shadow-md overflow-hidden"
          >
            {nav.menuItems.map((item, index) => {
              if (item.subMenu) {
                return (
                  <MobileAccordion
                    key={index}
                    item={item}
                    onClose={() => setIsOpen(false)}
                  />
                );
              }
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#1F2A44] font-medium hover:text-orange-500 transition py-3 border-b border-[#1F2A44]/08 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false); navigate("/contact");
              }}
              className="mt-3 p-[2px] rounded-full bg-gradient-to-r from-[#E65C00] to-[#F7931E]"
            >
              <span className="flex items-center justify-center h-[44px] px-4 bg-white rounded-full text-[#E65C00] font-semibold">
                {nav.buttons.getstarted}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
