import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "@/data/projects.json";
import { ArrowRight, Code2, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";

const FILTERS = ["All Projects", "Full Stack", "Frontend"];

const CATEGORY_STYLES = {
  "Full Stack": "bg-violet-600/90 text-white",
  Frontend: "bg-slate-800/90 text-slate-200 border border-slate-700",
  "Web Application": "bg-sky-600/90 text-white",
};

// Deterministic gradient per project so placeholders feel designed, not random
const GRADIENTS = [
  "from-fuchsia-600 via-purple-700 to-indigo-900",
  "from-emerald-600 via-teal-700 to-slate-900",
  "from-sky-600 via-blue-700 to-slate-900",
  "from-orange-500 via-rose-600 to-slate-900",
];

function ProjectImage({ image, title, index }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
        <span className="text-white/90 font-semibold text-lg px-6 text-center tracking-tight drop-shadow">
          {title.split("|")[0].trim()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setErrored(true)}
      className="w-full h-full object-cover"
    />
  );
}

function ProjectCard({ project, index }) {
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
        <a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-violet-600 transition-colors text-white p-1.5 rounded-md border border-white/10"
          aria-label={`View ${project.title} source code`}
        >
          <Code2 size={14} />
        </a>
        <ProjectImage image={project.image} title={project.title} index={index} />
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
            className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Live Demo <ExternalLink size={13} />
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            GitHub <Github size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

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
                className={`text-sm px-4 py-2 rounded-lg border transition-colors ${activeFilter === filter
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
            {filtered.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.title} />
            ))}
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
            <a href="/#contact" onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }} className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 whitespace-nowrap">
Get In Touch <ArrowRight size={15} />
          </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}