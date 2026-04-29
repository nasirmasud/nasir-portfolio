import { motion } from "framer-motion";
import { Book, Briefcase, User } from "lucide-react";

const AboutAndExperience = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: About Me Story */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            {...fadeIn}
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm flex items-center gap-2">
                <User size={16} /> About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">The Story Behind <span className="text-primary">The Code</span></h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                আমার প্রোগ্রামিং যাত্রা শুরু হয় কৌতূহল থেকে। একজন সেলফ-টট (Self-taught) ডেভেলপার হিসেবে আমি জাভাস্ক্রিপ্ট এবং রিঅ্যাক্ট ইকোসিস্টেমের প্রেমে পড়ে যাই। জটিল সমস্যাকে সহজ কোডে রূপান্তর করাটাই আমার কাছে নেশার মতো।
              </p>
              <p>
                আমি মূলত এমন কাজ করতে পছন্দ করি যা মানুষের দৈনন্দিন জীবনকে সহজ করে। ফ্রন্টএন্ড ডেভেলপমেন্টে সুন্দর ইউজার ইন্টারফেস (UI) এবং মসৃণ ইউজার এক্সপেরিয়েন্স (UX) তৈরি করা আমার প্রধান লক্ষ্য।
              </p>
            </div>

            {/* Hobbies / Books Section */}
            <div className="glass-panel p-6 rounded-2xl bg-secondary/20 border border-border">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <Book className="text-primary" size={20} /> Beyond the Screen
              </h4>
              <p className="text-muted-foreground mb-4">
                কোডিংয়ের বাইরে আমি একজন বইপোকা। বইয়ের পাতা আমাকে নতুন পৃথিবী চিনতে সাহায্য করে। আমার প্রিয় বিষয়ের তালিকায় রয়েছে:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Science Fiction", "Fantasy", "Biography", "Informative", "Geo-political", "Islamic Literature"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Experience Timeline */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm flex items-center gap-2">
                <Briefcase size={16} /> Experience
              </span>
              <h2 className="text-3xl font-bold mt-2">Work History</h2>
            </div>

            <div className="relative border-l-2 border-primary/30 ml-4 space-y-10 pt-4">
              {/* Experience Item 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                <h4 className="text-xl font-bold">Professional Role</h4>
                <p className="text-primary font-medium text-sm">March 2026 - Present</p>
                <p className="text-muted-foreground mt-2 italic">
                  বর্তমানে আমি একটি প্রফেশনাল রোলে কাজ করছি যা আমাকে রিমোটলি কাজ করার এবং দক্ষতা বাড়ানোর সুযোগ দিচ্ছে।
                </p>
              </div>

              {/* Previous Jobs Mention */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary/40 rounded-full border-4 border-background"></div>
                <h4 className="text-xl font-bold text-muted-foreground">Previous Professional Experience</h4>
                <p className="text-muted-foreground/60 font-medium text-sm">2021 - 2025</p>
                <p className="text-muted-foreground mt-2">
                  আমি বিভিন্ন সেক্টরে কাজ করেছি যা সরাসরি ডেভেলপমেন্টের না হলেও আমার ডিসিপ্লিন, টিমওয়ার্ক এবং প্রফেশনাল কমিউনিকেশন স্কিল তৈরিতে সাহায্য করেছে।
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndExperience;