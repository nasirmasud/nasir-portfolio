import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => {
  // Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id='projects' data-cmp='Projects' className='py-24 bg-card/30'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'
        >
          <div>
            <span className='text-primary font-semibold tracking-wider uppercase text-sm'>
              Portfolio
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold mt-2'>
              Featured Projects
            </h2>
          </div>
          <Link
            to='/all-projects'
            className='text-primary hover:underline font-semibold text-lg flex items-center gap-1'
          >
            All Projects <span aria-hidden='true'>&rarr;</span>
          </Link>
        </motion.div>

        {/* Project Cards Grid with Stagger Effect */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
