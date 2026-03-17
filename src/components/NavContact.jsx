import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Copy, Download, Mail } from "lucide-react";
import { useState } from "react";

const NavContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nasir.masud@ymail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <div className='ml-8 flex items-center gap-3'>
      {/* Email Section - Container Static */}
      <div className='flex items-center gap-2 border border-gray-600/30 rounded-full px-4 py-2 bg-card/20 backdrop-blur-sm'>
        {/* Copy Button */}
        <motion.button
          whileHover={{ scale: 1.2, color: "#a855f7" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className='p-1 rounded-full transition-colors outline-none text-purple-500 dark:text-purple-400' // এখানে কালার ক্লাস যোগ করা হয়েছে
          aria-label='Copy email'
        >
          <AnimatePresence mode='wait'>
            {copied ? (
              <motion.div
                key='check'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <CheckCircle2 className='h-4 w-4 text-green-500' />
              </motion.div>
            ) : (
              // সরাসরি আইকনেও ক্লাস দিতে পারেন অথবা উপরের বাটনে
              <Copy className='h-4 w-4' />
            )}
          </AnimatePresence>
        </motion.button>

        <span className='text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[180px]'>
          nasir.masud@ymail.com
        </span>

        {/* Mail-to Icon - Hover Active */}
        <motion.a
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          href='mailto:nasir.masud@ymail.com'
          className='text-purple-500 flex items-center justify-center p-1 rounded-full transition-colors'
        >
          <Mail size={18} />
        </motion.a>
      </div>

      {/* CV Button - Container Static */}
      <div className='flex items-center gap-2 border border-gray-600/30 rounded-full px-4 py-2 bg-card/20 backdrop-blur-sm'>
        <span className='text-sm font-medium'>CV</span>

        {/* Download Icon - Hover Active */}
        <motion.button
          whileHover={{ scale: 1.2, y: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownloadCV}
          className='p-1 rounded-full transition-colors outline-none'
        >
          <motion.div
            animate={{ y: [0, 1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Download className='h-4 w-4 text-purple-500 dark:text-purple-400' />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default NavContact;
