import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "@/data/projects.json";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Grid3x3,
  Lightbulb,
  Layers,
  Star,
  User,
  Users,
  X,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const FILTERS = ["All Projects", "Full Stack", "Frontend"];

const CATEGORY_STYLES = {
  "Full Stack": "bg-violet-600/90 text-white",
  Frontend: "bg-slate-800/90 text-slate-200 border border-slate-700",
};

const TECH_LOGOS = {
  "Next.js": "/logo/next-js.svg",
  React: "/logo/react.svg",
  TypeScript: null,
  Tailwind: "/logo/tailwind.svg",
  Vite: null,
  "Chakra UI": null,
  MongoDB: "/logo/mongodb.svg",
  "NextAuth.js": null,
  Cloudinary: null,
  "Radix UI": null,
  Zod: null,
  "Prisma ORM": null,
  PostgreSQL: null,
};

const TECH_STYLE = {
  TypeScript: { bg: "bg-blue-600/20", text: "text-blue-400", label: "TS" },
  Vite: { bg: "bg-purple-500/20", text: "text-purple-400", label: "V" },
  "Chakra UI": { bg: "bg-teal-500/20", text: "text-teal-400", label: "C" },
  "NextAuth.js": { bg: "bg-white/10", text: "text-white", label: "N" },
  Cloudinary: { bg: "bg-blue-500/20", text: "text-blue-300", label: "☁" },
  "Radix UI": { bg: "bg-violet-500/20", text: "text-violet-300", label: "R" },
  Zod: { bg: "bg-indigo-500/20", text: "text-indigo-300", label: "Z" },
  "Prisma ORM": { bg: "bg-slate-700/40", text: "text-slate-200", label: "▲" },
  PostgreSQL: { bg: "bg-blue-700/20", text: "text-blue-300", label: "P" },
};

const GRADIENTS = [
  "from-fuchsia-600 via-purple-700 to-indigo-900",
  "from-emerald-600 via-teal-700 to-slate-900",
  "from-sky-600 via-blue-700 to-slate-900",
  "from-orange-500 via-rose-600 to-slate-900",
];

function SmartImage({ src, alt, index, className }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className={`bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
        <span className="text-white/90 font-semibold text-sm px-4 text-center tracking-tight drop-shadow">
          {alt}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}

function ProjectCard({ project, index, onOpen }) {
  const badgeClass =
    CATEGORY_STYLES[project.category] ||
    "bg-slate-800/90 text-slate-200 border border-slate-700";

  return (
    <div className="bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-violet-500/40 transition-colors group">
      <div className="relative h-72 overflow-hidden">
        <span
          className={`absolute top-3 left-3 z-10 text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur ${badgeClass}`}
        >
          {project.category}
        </span>
        <button
          onClick={() => onOpen(index)}
          className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-violet-600 transition-colors text-white p-1.5 rounded-md border border-white/10"
          aria-label={`View ${project.title} details`}
        >
          <Code2 size={14} />
        </button>
        <SmartImage
          src={project.image}
          alt={project.title.split("|")[0].trim()}
          index={index}
          className="w-full h-full"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base mb-1.5 leading-snug">
          {project.title.split("|")[0].trim()}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-3 border-t border-white/5">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Live Demo <ExternalLink size={13} />
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            GitHub <Github size={13} />
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(index); }}
            className="ml-auto flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            View Details <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailsModal({ project, index, total, onClose, onNext, onPrev }) {
  const [activeShot, setActiveShot] = useState(0);
  const d = project.details;
  const shortTitle = project.title.split("|")[0].trim();
  const subtitle = project.title.split("|")[1]?.trim() || project.category;

  useEffect(() => {
    setActiveShot(0);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0d0d13] border border-white/10 rounded-2xl w-full max-w-4xl my-6 sm:my-0 relative"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-md px-2.5 py-1 mb-3">
              <Star size={12} fill="currentColor" /> Featured Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {shortTitle}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <Layers size={13} className="text-violet-400" />
              <span>{subtitle}</span>
              <span className="text-slate-600">•</span>
              <span>Published: {d.publishedDate}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-lg p-2 shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* Left: gallery */}
          <div>
            <div className="rounded-xl overflow-hidden border border-white/10 h-56 sm:h-72 mb-3">
              <SmartImage
                src={d.screenshots[activeShot]}
                alt={shortTitle}
                index={index}
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {d.screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveShot(i)}
                  className={`h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeShot === i
                      ? "border-violet-500"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <SmartImage
                    src={shot}
                    alt={`${shortTitle} screenshot ${i + 1}`}
                    index={index}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: overview, stack, features */}
          <div className="min-w-0">
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => {
                const logo = TECH_LOGOS[tag];
                const fallback = TECH_STYLE[tag] || {
                  bg: "bg-white/5",
                  text: "text-slate-300",
                  label: tag[0],
                };
                return (
                  <div
                    key={tag}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt={tag}
                        className="w-5 h-5 shrink-0 object-contain"
                      />
                    ) : (
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${fallback.bg} ${fallback.text}`}
                      >
                        {fallback.label}
                      </span>
                    )}
                    <span className="text-slate-200 text-xs truncate">{tag}</span>
                  </div>
                );
              })}
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-2">
              {d.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-violet-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mx-6 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium rounded-lg py-2.5 flex items-center justify-center gap-2"
          >
            Live Demo <ExternalLink size={14} />
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="bg-transparent border border-white/15 hover:border-white/30 transition-colors text-white text-sm font-medium rounded-lg py-2.5 flex items-center justify-center gap-2"
          >
            <Github size={14} /> GitHub Repository
          </a>
        </div>

        {/* Challenges & Solutions */}
        <div className="mx-6 mt-5 mb-6 bg-white/[0.03] border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 text-white text-sm font-semibold mb-4">
            <Lightbulb size={15} className="text-violet-400" /> Challenges & Solutions
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-medium mb-2">
                <AlertCircle size={13} /> Challenges
              </div>
              <ul className="space-y-1.5">
                {d.challenges.map((c) => (
                  <li key={c} className="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span className="text-slate-600 mt-1">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium mb-2">
                <CheckCircle2 size={13} /> Solutions
              </div>
              <ul className="space-y-1.5">
                {d.solutions.map((s) => (
                  <li key={s} className="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span className="text-slate-600 mt-1">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
          <button
            onClick={onPrev}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-colors"
          >
            <ArrowLeft size={14} /> Previous Project
          </button>
          <span className="text-slate-600 text-xs">
            {index + 1} / {total}
          </span>
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-colors"
          >
            Next Project <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % projects.length));
  const handlePrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main className="px-4 pt-28 pb-16 sm:px-8">
        <div className="mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10 relative">
            <span className="inline-block text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1 mb-4">
              My Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              All <span className="text-violet-500">Projects</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              A collection of projects that showcase my skills, experience and
              passion for building digital experiences.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm px-4 py-2 rounded-lg border transition-colors ${
                  activeFilter === filter
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "bg-transparent border-white/10 text-slate-300 hover:border-violet-500/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filtered.map((project) => {
              const realIndex = projects.indexOf(project);
              return (
                <ProjectCard
                  project={project}
                  index={realIndex}
                  key={project.title}
                  onOpen={setOpenIndex}
                />
              );
            })}
          </div>

          <p className="text-center text-slate-500 text-sm mb-16">
            Showing {filtered.length} of {projects.length} projects
          </p>

          {/* CTA */}
          <div className="bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-violet-600 rounded-xl p-3 flex items-center justify-center shrink-0">
                <ArrowRight className="text-white" size={22} />
              </div>
              <div>
                <p className="text-violet-400 text-xl font-medium mb-1">
                  Have a project in mind?
                </p>
                <h3 className="text-white font-semibold text-2xl mb-1">
                  Let's build something amazing together!
                </h3>
                <p className="text-slate-400 text-sm">
                  I'm always open to discussing new opportunities and
                  interesting projects.
                </p>
              </div>
            </div>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact";
              }}
              className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 whitespace-nowrap"
            >
              Get In Touch <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </main>
      <Footer />

      {openIndex !== null && (
        <ProjectDetailsModal
          project={projects[openIndex]}
          index={openIndex}
          total={projects.length}
          onClose={() => setOpenIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
