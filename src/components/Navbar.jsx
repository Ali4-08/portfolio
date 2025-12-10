import { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); //استیت برای اسکرول
  const { isDark, toggleTheme } = useTheme(); //استیت حالت روز و شب
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //استیت باز شدن منوی موبایل

  //بعد از اسکرول کردن به اندازه 50 پیکسل استیت را فعال یکند
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //لینک ها
  const links = [
    { name: "درباره من", href: "#about" },
    { name: "پروژه ها", href: "#projects" },
    { name: "مهارت ها", href: "#about" },
    { name: "تماس", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between flex-row-reverse">
          {/* لوگو / عنوان */}
          <div className="text-2xl font-black text-cyan-500 dark:text-cyan-400 hover:scale-110 transition-all duration-300">
            Ali.dev
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* حالت روز و شب */}
            <button onClick={toggleTheme}>
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* تاگل منوی موبایل */}
          <div className="sticky top-0 md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`p-2 ${isScrolled ? "text-gray-600" : "text-gray-200"}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* وقتی منوی موبایل باز می شود */}
      <AnimatePresence> 
      {isMobileMenuOpen && (                 
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{opacity: 0, x: "100%"}}
            transition={{ duration: 0.4 }}
            className="fixed md:hidden top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-2xl border-t border-t-gray-300 dark:border-gray-800"
          >
            <div className="py-6 px-6 space-y-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>        
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
