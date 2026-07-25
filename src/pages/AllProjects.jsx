import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectDetailsModal, {
  SmartImage,
} from "@/components/ProjectDetailsModal";
import projects from "@/data/projects.json";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Send,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

const FILTERS = ["All Projects", "Full Stack", "Frontend"];

function normalizeCategory(cat) {
  return cat.toLowerCase().replace(/[\s-]+/g, "");
}

const CATEGORY_STYLES = {
  "Full Stack": "bg-violet-600/90 text-white",
  Frontend: "bg-slate-800/90 text-slate-200 border border-slate-700",
};

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

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0d0d13] border border-white/10 rounded-2xl w-full max-w-lg relative"
      >
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 text-sm mt-1">
              Fill out the form and I'll get back to you soon.
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-lg p-2 shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <form
          className="p-6 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="modal-name" className="text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-500"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="modal-email" className="text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-500"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="modal-subject" className="text-sm font-medium text-slate-300">
              Subject
            </label>
            <input
              type="text"
              id="modal-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-500"
              placeholder="Project inquiry"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="modal-message" className="text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="modal-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-500 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 font-medium">Something went wrong. Please try again later.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"} <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [openIndex, setOpenIndex] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const filtered = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter(
      (p) => normalizeCategory(p.category) === normalizeCategory(activeFilter)
    );
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 max-w-7xl mx-auto">
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
            <button
              onClick={() => setContactOpen(true)}
              className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 whitespace-nowrap"
            >
              Get In Touch <ArrowRight size={15} />
            </button>
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

      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}
    </div>
  );
}
