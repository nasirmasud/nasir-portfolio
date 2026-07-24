// import { motion } from "framer-motion";
// import {
//   Atom,
//   Database,
//   FileJson,
//   Globe,
//   Layout,
//   Palette,
//   Server,
//   Terminal,
// } from "lucide-react";

// const TechStack = () => {
//   const technologies = [
//     {
//       name: "React",
//       icon: <Atom className='w-8 h-8' />,
//       color: "text-cyan-400",
//     },
//     {
//       name: "Next.js",
//       icon: <Globe className='w-8 h-8' />,
//       color: "text-white",
//     },
//     {
//       name: "TypeScript",
//       icon: <FileJson className='w-8 h-8' />,
//       color: "text-blue-500",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: <Palette className='w-8 h-8' />,
//       color: "text-teal-400",
//     },
//     {
//       name: "Node.js",
//       icon: <Server className='w-8 h-8' />,
//       color: "text-green-500",
//     },
//     {
//       name: "Git",
//       icon: <Terminal className='w-8 h-8' />,
//       color: "text-orange-500",
//     },
//     {
//       name: "HTML5/CSS3",
//       icon: <Layout className='w-8 h-8' />,
//       color: "text-orange-400",
//     },
//     {
//       name: "SQL",
//       icon: <Database className='w-8 h-8' />,
//       color: "text-purple-400",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.06,
//       },
//     },
//   };

//   // কার্ড ভেরিয়েন্ট
//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 260, damping: 20 },
//     },
//   };

//   return (
//     <section id='stack' data-cmp='TechStack' className='py-24'>
//       <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
//         {/* Header Animation */}
//         <motion.div
//           className='text-center mb-16'
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <span className='text-primary text-3xl font-bold'>Tech Stack</span>
//           <h2 className='text-muted-foreground mt-4'>
//             Technologies I work with
//           </h2>
//         </motion.div>

//         {/* Tech Grid */}
//         <motion.div
//           className='grid grid-cols-2 md:grid-cols-4 gap-6'
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {technologies.map((tech) => (
//             <motion.div
//               key={tech.name}
//               variants={itemVariants}
//               whileHover={{
//                 y: -8,
//                 transition: { duration: 0.5 },
//               }}
//               className='group p-6 glass-panel rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 bg-card/30'
//             >
//               <motion.div
//                 className={`p-4 rounded-full bg-secondary/50 transition-colors duration-300 ${tech.color}`}
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 1 }}
//               >
//                 {tech.icon}
//               </motion.div>
//               <span className='font-semibold text-lg'>{tech.name}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;

import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
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
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "group-hover:shadow-yellow-400/40",
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
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "group-hover:shadow-teal-400/40",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "group-hover:shadow-orange-600/40",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "group-hover:shadow-orange-600/40",
    },
  ];

  // এই ভেরিয়েন্টগুলো না থাকলে ফ্রেমার মোশন এরর দিবে
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
          className='grid grid-cols-2 md:grid-cols-4 gap-6'
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
                className={`w-20 h-20 p-4 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${tech.color} group-hover:shadow-2xl group-hover:scale-110 border border-white/10`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className='w-full h-full object-contain'
                  // যদি ইমেজ না পায় তবে কনসোলে এরর দিবে না
                  onError={(e) => {
                    e.target.style.opacity = "0";
                  }}
                />
              </motion.div>
              <span className='font-bold text-lg text-gray-300 group-hover:text-white'>
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
