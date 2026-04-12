import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const mouse = { x: 0, y: 0 };
    const ring_pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${mouse.x}px`;
        dot.current.style.top = `${mouse.y}px`;
      }
    };

    const animate = () => {
      ring_pos.x += (mouse.x - ring_pos.x) * 0.12;
      ring_pos.y += (mouse.y - ring_pos.y) * 0.12;
      if (ring.current) {
        ring.current.style.left = `${ring_pos.x}px`;
        ring.current.style.top = `${ring_pos.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1.8)";
      if (ring.current) ring.current.style.borderColor = "rgba(230,92,0,0.8)";
    };
    const onLeave = () => {
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ring.current) ring.current.style.borderColor = "rgba(230,92,0,0.5)";
    };

    const interactive = document.querySelectorAll("a,button");

    window.addEventListener("mousemove", onMove);
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
};

const Layouts = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layouts;
