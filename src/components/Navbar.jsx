import { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); //بررسی اسکرول کردن صفحه
  const {isDark, toggleTheme} = useTheme(); //بررسی حالت دارک مود
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //بررسی نمایش موی موبایل

  //گرفتن اسکرول صفحه
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

  
  //لینک های منو
  const links = [
    { name: "درباره من", href: "#about" },
    { name: "پروژه ها", href: "#projects" },
    { name: "مهارت ها", href: "#about" },
    { name: "تماس", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
      initial={{y: -60}}
      animate={{y: 0}}      
      transition={{duration: 0.8}}

      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/65 dark:bg-gray-700/90 backdrop-blur-sm shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between flex-row-reverse">
           
            {/* اسم / لوگو */}
            <div              
              className="text-2xl font-black text-cyan-500 dark:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
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

              {/* دکمه دارک/لایت */}
              <button onClick={toggleTheme}>
                {isDark ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>
            </div>

            {/* منوی موبایل - همبرگری */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="p-2 text-gray-200"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* منوی موبایل وقتی باز بشه */}
       
          {isMobileMenuOpen && (
            <div              
              className="fixed md:hidden top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl border-t dark:border-gray-800"
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
            </div>
          )}
        
      </motion.nav>

      <div className="h-24" />
    </>
  );
}
