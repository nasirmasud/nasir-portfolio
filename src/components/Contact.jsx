import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id='contact' data-cmp='Contact' className='py-24' ref={ref}>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className='text-primary font-semibold tracking-wider uppercase text-sm'>
              Contact
            </span>
            <motion.h2
              className='text-3xl sm:text-4xl font-bold mt-2 mb-6'
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let's work together
            </motion.h2>
            <motion.p
              className='text-lg text-muted-foreground mb-8'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm currently looking for full-time opportunities or freelance
              projects. Whether you have a question or just want to say hi, my
              inbox is always open!
            </motion.p>

            <div className='space-y-6'>
              <ContactInfo
                delay={0.4}
                isInView={isInView}
                icon={<Mail className='w-5 h-5 text-primary' />}
                label='Email me at'
                value='hello@example.com'
                isLink={true}
              />
              <ContactInfo
                delay={0.5}
                isInView={isInView}
                icon={<MapPin className='w-5 h-5 text-primary' />}
                label='Location'
                value='Remote / Worldwide'
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className='glass-panel p-8 rounded-2xl border border-border shadow-custom bg-card/30'
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 50, scale: 0.95 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
          >
            <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <FormInput label='Name' id='name' placeholder='John Doe' />
                <FormInput
                  label='Email'
                  id='email'
                  type='email'
                  placeholder='john@example.com'
                />
              </div>

              <FormInput
                label='Subject'
                id='subject'
                placeholder='Project inquiry'
              />

              <div className='space-y-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium text-muted-foreground'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-custom transition-all flex items-center justify-center gap-2'
              >
                Send Message
                <Send className='w-4 h-4' />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper component for Contact Details
const ContactInfo = ({ icon, label, value, isLink, delay, isInView }) => (
  <motion.div
    className='flex items-center gap-4'
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className='w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-border'>
      {icon}
    </div>
    <div>
      <p className='text-sm text-muted-foreground'>{label}</p>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          className='text-lg font-semibold hover:text-primary transition-colors'
        >
          {value}
        </a>
      ) : (
        <p className='text-lg font-semibold'>{value}</p>
      )}
    </div>
  </motion.div>
);

// Helper component for Form Inputs
const FormInput = ({ label, id, placeholder, type = "text" }) => (
  <div className='space-y-2'>
    <label htmlFor={id} className='text-sm font-medium text-muted-foreground'>
      {label}
    </label>
    <input
      type={type}
      id={id}
      className='w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50'
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
