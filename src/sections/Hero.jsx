
import { motion } from "framer-motion";
import MotionWrapper from "../components/MotionWrpper";
import { Sparkles, Mouse } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; 

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 ">
      
      {/* پس‌زمینه پویا */}
      <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 to-transparent" />
      
      {/* ذرات درخشان — نسخه بهینه‌شده و تصادفی‌تر */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            boxShadow: "0 0 10px #06b6d4",
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* محتوای اصلی */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        <motion.h1
          initial={{ opacity: 0, y: 65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
        >
          سلام، من <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">علی باقری</span> هستم
        </motion.h1>

        {/* تایپ انیمیشن */}
        <MotionWrapper
        delay={0.8}
          className="text-lg md:text-4xl text-gray-300 font-light mb-6 sm:mb-12">

          من یک{" "}
          <TypeAnimation
            sequence={[
              "فرانت‌اند دولوپر",
              2000,
              "عاشق Tailwind",
              2000,
              "سازنده چیزای خفن",
              2000,
              "React Ninja",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={65}
            repeat={Infinity}
            className="text-cyan-400 font-bold"
          />{""}
          هستم
        </MotionWrapper>

        {/* دکمه‌ها — نسخه شیشه‌ای + glow */}
        <MotionWrapper
        delay={1.4}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-10 py-5 bg-cyan-500 text-black font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="group-hover:rotate-12 transition-transform" />
              پروژه‌هامو ببین
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <motion.a
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            href="/resume.pdf"
            className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10"
          >
            دانلود رزومه
          </motion.a>
        </MotionWrapper>
      </div>

      {/* اسکرول داون — با آیکون ماوس */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}        
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400"
      >
        <Mouse size={32} className="animate-bounce" />
      </motion.div>
    </section>
  );
}