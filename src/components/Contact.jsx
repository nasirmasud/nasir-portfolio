import { motion, useInView } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorType, setErrorType] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorType("validation");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus("error");
      setErrorType("validation");
      return;
    }

    setStatus("sending");
    setErrorType(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorType("network");
    }
  };

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
                value='nasir.masud@ymail.com'
                isLink={true}
              />
              <ContactInfo
                delay={0.5}
                isInView={isInView}
                icon={<MapPin className='w-5 h-5 text-primary' />}
                label='Location'
                value='Remote / Worldwide'
              />
              <ContactInfo
                delay={0.6}
                isInView={isInView}
                icon={<Phone className='w-5 h-5 text-primary' />}
                label='Call me at'
                value='+8801911907105'
                isLink={true}
                linkType="tel"
              />
              <ContactInfo
                delay={0.7}
                isInView={isInView}
                icon={<MessageCircle className='w-5 h-5 text-green-500' />}
                label='WhatsApp'
                value='+8801911907105'
                isLink={true}
                linkType="whatsapp"
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
            <form ref={formRef} className='space-y-6' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <FormInput label='Name' name='name' value={form.name} onChange={handleChange} placeholder='John Doe' />
                <FormInput
                  label='Email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='john@example.com'
                />
              </div>

              <FormInput
                label='Subject'
                name='subject'
                value={form.subject}
                onChange={handleChange}
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
                  name='message'
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              {status === "success" && (
                <p className='text-sm text-green-500 font-medium'>Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === "error" && errorType === "validation" && (
                <p className='text-sm text-red-500 font-medium'>Please fill in all required fields with a valid email.</p>
              )}
              {status === "error" && errorType === "network" && (
                <p className='text-sm text-red-500 font-medium'>Something went wrong. Please try again later.</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                disabled={status === "sending"}
                className='w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-custom transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {status === "sending" ? "Sending..." : "Send Message"}
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
const ContactInfo = ({ icon, label, value, isLink, delay, isInView, linkType }) => {
  let href = "";
  if (linkType === "tel") href = `tel:${value}`;
  else if (linkType === "whatsapp") href = `https://wa.me/${value.replace(/[^0-9]/g, '')}`;
  else href = `mailto:${value}`;

  return (
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
            href={href}
            target={linkType === "whatsapp" ? "_blank" : "_self"}
            rel={linkType === "whatsapp" ? "noopener noreferrer" : ""}
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
};

// Helper component for Form Inputs
const FormInput = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className='space-y-2'>
    <label htmlFor={name} className='text-sm font-medium text-muted-foreground'>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className='w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50'
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
