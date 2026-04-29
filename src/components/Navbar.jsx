import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavContact from "./NavContact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      data-cmp='Navbar'
      className='fixed w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md'
    >
      <div className='w-full px-4 sm:px-8 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          {/* Left Section - NavContact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center'
          >
            <NavContact />
          </motion.div>

          {/* Right Section - Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <div className='flex items-center space-x-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-gray-400 hover:text-white transition-colors text-sm font-medium relative group'
                >
                  {item.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300' />
                </motion.a>
              ))}

              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-purple-500/20'
              >
                Let's Talk
              </motion.a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white p-2'
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-full right-0 w-1/3 bg-black/95 border-b border-white/10 p-6 md:hidden'
          >
            <div className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10, color: "#a855f7" }}
                  whileTap={{ scale: 0.95 }}
                  className='text-xl text-gray-300 font-medium transition-colors'
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href='#contact'
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                className='text-center bg-purple-600 text-white py-3 rounded-xl font-bold'
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
