import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import projects from "@/data/projects.json";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % projects.length));
  const handlePrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
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
    <section
      id='projects'
      data-cmp='Projects'
      className='flex min-h-[100dvh] scroll-mt-20 flex-col bg-card/30 md:h-full md:min-h-0'
    >
      {/* pt-20 clears the fixed Navbar (Navbar.jsx h-20); centring happens in the
          space that is actually visible below it, so no dead gap at the bottom. */}
      <div className='flex w-full flex-1 flex-col pt-20'>
        <div className='flex flex-1 px-4 py-8 sm:px-6 lg:px-8'>
          <div className='m-auto w-full max-w-[1440px]'>
        {/* Header Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end'
            >
              <div>
                <span className='text-sm font-semibold uppercase tracking-wider text-primary'>
                  Portfolio
                </span>
                <h2 className='mt-2 text-3xl font-bold sm:text-4xl'>
                  Featured Projects
                </h2>
              </div>
              <Link
                to='/all-projects'
                className='flex items-center gap-1 text-lg font-semibold text-primary hover:underline'
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
              className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
            >
              {projects.slice(0, 3).map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProjectCard {...project} index={index} onOpen={setOpenIndex} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Projects;
