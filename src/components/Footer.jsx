import { Github } from "lucide-react";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/Ali4-08/", label: "گیت‌هاب" },
    { icon: Phone, url: "https://wa.me/+989372333084", label: "واتس اپ" },
    { icon: Send, url: "https://t.me/AliDev408", label: "تلگرام" },
    { icon: Mail, url: "mailto:ali.bagheri408@gmail.com", label: "ایمیل" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
       
        <div className="grid md:grid-cols-2 gap-10 text-center">
          {/* بخش نام و توضیحات */}
          <div
            className="space-y-4 text-center md:text-right"
          >
            <h3>علی باقری</h3>
            <p>Frontend Developer</p>
            <p>HTML, CSS, Javascript, Tailwindcss, React, Github</p>
          </div>

          {/* بخش لینک های اجتماعی */}
          <div className="flex justify-center items-center md:justify-end gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"               
                aria-label={link.label}
                className="group p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                {
                  <link.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                }
              </a>
            ))}
          </div>
        </div>

       
        <div className="max-w-7xl mt-10 pt-8 border-t border-gray-800 text-gray-500 text-xs text-center">
          {/* بخش کپی رایت */}
          <div
         
            className="text-center md:text-right text-gray-500 text-sm"
          >
            <p>© {currentYear} همه حقوق این سایت محفوظ است. Ali.Dev</p>

            <p className="mt-2 text-xs">ساخته شده با React + Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
