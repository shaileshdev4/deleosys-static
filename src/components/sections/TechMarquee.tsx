const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "Kubernetes",
  "Figma",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "Kubernetes",
  "Figma",
];

const TechMarquee = () => {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-[#1F2A44]/10 py-6 overflow-hidden">
      <div className="flex items-center gap-6 mb-1">
        <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-widest whitespace-nowrap pl-6 shrink-0">
          Technologies we use
        </p>
        <div className="w-px h-5 bg-[#1F2A44]/15 shrink-0" />
      </div>

      <div className="relative overflow-hidden mt-3">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-4 px-4 py-1.5 rounded-full
                bg-white border border-[#1F2A44]/10 text-[#1F2A44] text-[13px]
                font-medium whitespace-nowrap shadow-sm
                hover:border-[#F7931E]/40 hover:text-[#E65C00] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
