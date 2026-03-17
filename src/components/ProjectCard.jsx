import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  repoLink,
  index = 0, // গ্রিডে সিরিয়ালি আসার জন্য index ব্যবহার করা যেতে পারে
}) => {
  return (
    <motion.div
      data-cmp='ProjectCard'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }} // হোভার করলে কার্ডটি উপরে উঠবে
      className='group rounded-xl overflow-hidden glass-panel border border-border hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full bg-card/50'
    >
      {/* Image Container */}
      <div className='relative overflow-hidden aspect-video'>
        <motion.img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500'
          whileHover={{ scale: 1.1 }} // ইমেজে জুম ইফেক্ট
        />

        {/* Overlay with Buttons */}
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]'>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href={demoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 bg-white text-black rounded-full shadow-lg transition-transform'
            title='View Demo'
          >
            <ExternalLink className='w-5 h-5' />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 bg-black text-white border border-white/20 rounded-full shadow-lg transition-transform'
            title='View Code'
          >
            <Github className='w-5 h-5' />
          </motion.a>
        </div>
      </div>

      {/* Content Area */}
      <div className='p-6 flex-1 flex flex-col'>
        <motion.h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
          {title}
        </motion.h3>
        <p className='text-muted-foreground text-sm mb-4 flex-1 line-clamp-3'>
          {description}
        </p>

        {/* Tags with subtle animation */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className='px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border'
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
