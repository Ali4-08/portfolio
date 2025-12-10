import { motion } from "framer-motion";
import MotionWrapper from "../components/MotionWrpper";
import { Sparkles, Mouse } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 ">
      {/* پس‌زمینه پویا */}
      <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 to-transparent" />

      {/* محتوای اصلی */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <MotionWrapper className="text-3xl md:text-7xl lg:text-8xl font-black text-white leading-tight space-y-8">
          سلام، من
          <div>
            {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              علی باقری
            </span>{" "}
            هستم
          </div>

          {/* تایپ انیمیشن */}
          <div className="text-lg md:text-4xl text-gray-300 font-light mb-6 sm:mb-12">
            
            <TypeAnimation
              sequence={[
                "توسعه‌ دهنده فرانت‌ اند حرفه‌ای",
                2000,
                "متخصص React و JavaScript",
                2000,
                "تسلط کامل بر Tailwind CSS",
                2000,
                "سازنده رابط‌ های کاربری مدرن",
                2000,
                "تمرکز بر تجربه کاربری و عملکرد",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              className="text-cyan-400 font-bold"
            /> 

          </div>
        </MotionWrapper>

        {/* دکمه‌ها — نسخه شیشه‌ای + glow */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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

          <a
            href="/resume.pdf"
            className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 transition duration-300"
          >
            دانلود رزومه
          </a>
        </div>
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
