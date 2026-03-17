import { motion } from "framer-motion";
import {
  Atom,
  Database,
  FileJson,
  Globe,
  Layout,
  Palette,
  Server,
  Terminal,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      icon: <Atom className='w-8 h-8' />,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      icon: <Globe className='w-8 h-8' />,
      color: "text-white",
    },
    {
      name: "TypeScript",
      icon: <FileJson className='w-8 h-8' />,
      color: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className='w-8 h-8' />,
      color: "text-teal-400",
    },
    {
      name: "Node.js",
      icon: <Server className='w-8 h-8' />,
      color: "text-green-500",
    },
    {
      name: "Git",
      icon: <Terminal className='w-8 h-8' />,
      color: "text-orange-500",
    },
    {
      name: "HTML5/CSS3",
      icon: <Layout className='w-8 h-8' />,
      color: "text-orange-400",
    },
    {
      name: "SQL",
      icon: <Database className='w-8 h-8' />,
      color: "text-purple-400",
    },
  ];

  // কন্টেইনার ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // কার্ডগুলো একে একে আসবে
      },
    },
  };

  // কার্ড ভেরিয়েন্ট
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
    <section id='stack' data-cmp='TechStack' className='py-24'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Animation */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='text-primary font-semibold tracking-wider uppercase text-sm'>
            Tech Stack
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold mt-2'>
            Technologies I work with
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className='group p-6 glass-panel rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 bg-card/30'
            >
              <motion.div
                className={`p-4 rounded-full bg-secondary/50 transition-colors duration-300 ${tech.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {tech.icon}
              </motion.div>
              <span className='font-semibold text-lg'>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
