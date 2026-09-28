import { useState } from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "JavaScript",
    icon: "/logo/javascript.svg",
    label: "JS",
    badgeBg: "bg-yellow-500/20",
    badgeText: "text-yellow-400",
    color: "group-hover:shadow-yellow-400/40",
  },
  {
    name: "TypeScript",
    icon: "/logo/typescript.svg",
    label: "TS",
    badgeBg: "bg-blue-500/20",
    badgeText: "text-blue-400",
    color: "group-hover:shadow-blue-500/40",
  },
  {
    name: "HTML5",
    icon: "/logo/html5.svg",
    label: "H5",
    badgeBg: "bg-orange-500/20",
    badgeText: "text-orange-400",
    color: "group-hover:shadow-orange-500/40",
  },
  {
    name: "CSS3",
    icon: "/logo/css3.svg",
    label: "C3",
    badgeBg: "bg-blue-500/20",
    badgeText: "text-blue-400",
    color: "group-hover:shadow-blue-500/40",
  },
  {
    name: "React",
    icon: "/logo/react.svg",
    label: "RE",
    badgeBg: "bg-cyan-500/20",
    badgeText: "text-cyan-400",
    color: "group-hover:shadow-cyan-400/40",
  },
  {
    name: "Next.js",
    icon: "/logo/nextjs.svg",
    label: "NX",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    color: "group-hover:shadow-white/40",
    invert: true,
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwindcss.svg",
    label: "TW",
    badgeBg: "bg-teal-500/20",
    badgeText: "text-teal-400",
    color: "group-hover:shadow-teal-400/40",
  },
  {
    name: "Docker",
    icon: "/logo/docker.svg",
    label: "DK",
    badgeBg: "bg-blue-600/20",
    badgeText: "text-blue-400",
    color: "group-hover:shadow-blue-500/40",
  },
  {
    name: "Node.js",
    icon: "/logo/nodejs.svg",
    label: "ND",
    badgeBg: "bg-green-500/20",
    badgeText: "text-green-400",
    color: "group-hover:shadow-green-500/40",
  },
  {
    name: "Express.js",
    icon: "/logo/express.svg",
    label: "EX",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    color: "group-hover:shadow-white/40",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "/logo/mongodb.svg",
    label: "MG",
    badgeBg: "bg-green-500/20",
    badgeText: "text-green-400",
    color: "group-hover:shadow-green-500/40",
  },
  {
    name: "Mongoose",
    icon: "/logo/mongoose.svg",
    label: "MS",
    badgeBg: "bg-green-500/20",
    badgeText: "text-green-400",
    color: "group-hover:shadow-green-500/40",
  },
  {
    name: "PostgreSQL",
    icon: "/logo/postgresql.svg",
    label: "PG",
    badgeBg: "bg-blue-700/20",
    badgeText: "text-blue-300",
    color: "group-hover:shadow-blue-500/40",
  },
  {
    name: "Prisma ORM",
    icon: "/logo/prisma.svg",
    label: "PR",
    badgeBg: "bg-slate-700/40",
    badgeText: "text-slate-200",
    color: "group-hover:shadow-teal-400/40",
  },
  {
    name: "Vite",
    icon: "/logo/vitejs.svg",
    label: "V",
    badgeBg: "bg-violet-500/20",
    badgeText: "text-violet-400",
    color: "group-hover:shadow-violet-500/40",
  },
  {
    name: "ESLint",
    icon: "/logo/eslint.svg",
    label: "ES",
    badgeBg: "bg-violet-500/20",
    badgeText: "text-violet-400",
    color: "group-hover:shadow-violet-500/40",
  },
  {
    name: "Git",
    icon: "/logo/git.svg",
    label: "GI",
    badgeBg: "bg-orange-600/20",
    badgeText: "text-orange-400",
    color: "group-hover:shadow-orange-600/40",
  },
  {
    name: "GitHub",
    icon: "/logo/github.svg",
    label: "GH",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    color: "group-hover:shadow-white/40",
    invert: true,
  },
];

const TechIcon = ({ tech }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        title={`${tech.name} logo could not be loaded`}
        className={`w-full h-full rounded-md flex items-center justify-center text-[11px] font-bold leading-none ${tech.badgeBg} ${tech.badgeText}`}
      >
        {tech.label}
      </span>
    );
  }

  return (
    <img
      src={tech.icon}
      alt={tech.name}
      loading="lazy"
      decoding="async"
      className={`w-full h-full object-contain${tech.invert ? " invert" : ""}`}
      onError={() => setErrored(true)}
    />
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const TechStack = () => {
  return (
    <section id='stack' className='py-24 bg-[#0a0a0a]'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-white text-4xl font-bold'>Tech Stack</h2>
          <p className='text-gray-400 mt-4'>Technologies I work with</p>
        </div>

        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='group p-8 rounded-2xl border border-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-6 bg-white/[0.03] backdrop-blur-sm'
            >
              <motion.div
                className={`w-12 h-10 flex items-center justify-center transition-all duration-300 ease-out ${tech.color} group-hover:-translate-y-2 group-hover:scale-125`}
              >
                <TechIcon tech={tech} />
              </motion.div>
              <span className='font-bold text-sm md:text-base text-gray-300 group-hover:text-white'>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
