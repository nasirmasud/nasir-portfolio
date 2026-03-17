import { motion } from "framer-motion";

const Skill = () => {
  const skills = [
    { name: "React", level: "90%" },
    { name: "Next.js", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "MongoDB", level: "75%" },
    { name: "TypeScript", level: "80%" },
  ];

  return (
    <section id='stack' className='py-24 bg-background'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold'>Technical Skills</h2>
          <p className='text-muted-foreground mt-4'>
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors'
            >
              <div className='flex justify-between mb-2'>
                <span className='font-semibold'>{skill.name}</span>
                <span className='text-primary'>{skill.level}</span>
              </div>
              <div className='w-full h-2 bg-secondary rounded-full overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className='h-full bg-primary'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
