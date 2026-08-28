import { motion } from "framer-motion";
import { Component } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "group-hover:shadow-yellow-400/40",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "group-hover:shadow-blue-500/40",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "group-hover:shadow-orange-500/40",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "group-hover:shadow-blue-500/40",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "group-hover:shadow-cyan-400/40",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "group-hover:shadow-white/40",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "group-hover:shadow-teal-400/40",
    },
    {
      name: "ShadCN",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shadcnui/shadcnui-original.svg",
      color: "group-hover:shadow-teal-400/40",
      fallbackIcon: "Component",
      invert: true,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "group-hover:shadow-green-500/40",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "group-hover:shadow-white/40",
      invert: true,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "group-hover:shadow-green-500/40",
    },
    {
      name: "Mongoose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
      color: "group-hover:shadow-green-500/40",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "group-hover:shadow-blue-500/40",
    },
    {
      name: "Prisma ORM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      color: "group-hover:shadow-teal-400/40",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "group-hover:shadow-violet-500/40",
    },
    {
      name: "ESLint",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
      color: "group-hover:shadow-violet-500/40",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "group-hover:shadow-orange-600/40",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "group-hover:shadow-white/40",
      invert: true,
    },
  ];

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
          viewport={{ once: true }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='group p-8 rounded-2xl border border-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-6 bg-white/[0.03] backdrop-blur-sm'
            >
              <motion.div
                className={`w-12 h-10 flex items-center justify-center transition-all duration-300 ${tech.color} group-hover:scale-110`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {tech.fallbackIcon ? (
                  <Component className='w-full h-full text-white' />
                ) : (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-full h-full object-contain${tech.invert ? " invert" : ""}`}
                    onError={(e) => {
                      e.target.style.opacity = "0";
                    }}
                  />
                )}
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
