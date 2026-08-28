// import { motion } from "framer-motion";

// const Skill = () => {
//   const skills = [
//     { name: "React", level: "90%" },
//     { name: "Next.js", level: "85%" },
//     { name: "Node.js", level: "80%" },
//     { name: "Tailwind CSS", level: "95%" },
//     { name: "MongoDB", level: "75%" },
//     { name: "TypeScript", level: "80%" },
//   ];

//   return (
//     <section id='stack' className='py-24 bg-background'>
//       <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='text-center mb-16'>
//           <h2 className='text-3xl font-bold text-primary'>Technical Skills</h2>
//           <p className='text-muted-foreground mt-4'>
//             Technologies I use to bring ideas to life
//           </p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className='p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors'
//             >
//               <div className='flex justify-between mb-2'>
//                 <span className='font-semibold'>{skill.name}</span>
//                 <span className='text-primary'>{skill.level}</span>
//               </div>
//               <div className='w-full h-2 bg-secondary rounded-full overflow-hidden'>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: skill.level }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className='h-full bg-primary'
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skill;


import { motion } from "framer-motion";

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "90%" },
        { name: "Next.js", level: "85%" },
        { name: "JavaScript / TypeScript", level: "85%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "HTML5", level: "95%" },
        { name: "CSS3", level: "90%" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: "80%" },
        { name: "Express.js", level: "80%" },
        { name: "PostgreSQL", level: "75%" },
        { name: "MongoDB", level: "75%" },
        { name: "Prisma ORM", level: "80%" },
        { name: "REST APIs", level: "85%" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: "90%" },
        { name: "Vite", level: "85%" },
        { name: "ESLint", level: "80%" },
        { name: "Figma / Pixso", level: "70%" },
        { name: "VS Code Customization", level: "95%" },
        { name: "Postman", level: "85%" },
      ],
    },
  ];

  return (
    <section id="skill" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build high-performance, responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-border bg-card/30"
            >
              <h3 className="text-xl font-bold mb-8 text-primary border-b border-primary/20 pb-2">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-xs text-primary font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;