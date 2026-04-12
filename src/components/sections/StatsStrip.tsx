import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 3, suffix: "", label: "Office Locations" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="stat-number text-[40px] sm:text-[48px] md:text-[56px]">
      {count}
      {suffix}
    </span>
  );
};

const StatsStrip = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="w-full bg-[#0F1A2E] py-14 relative overflow-hidden">
      {/* subtle orb */}
      <div className="orb orb-2 top-[-60px] left-[40%] opacity-10" />

      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2 relative">
              {/* divider between items — desktop only */}
              {i !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
              <CountUp target={stat.target} suffix={stat.suffix} inView={inView} />
              <span className="text-white/50 text-[13px] font-medium uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
