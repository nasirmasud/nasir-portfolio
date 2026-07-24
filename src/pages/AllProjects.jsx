import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects from "@/data/projects.json";

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

const AllProjects = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white'>
      <Navbar />
      <main className='py-24'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-12'
          >
            <Link
              to='/'
              className='text-primary hover:underline font-semibold text-sm mb-4 inline-block'
            >
              &larr; Back to Home
            </Link>
            <h1 className='text-3xl sm:text-4xl font-bold'>All Projects</h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
