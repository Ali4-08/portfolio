// src/sections/Projects.jsx
import MotionWrapper from "../components/MotionWrpper";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
 
  const projects = [
    {
      id: 1,
      title: "پورتفولیو شخصی ۲۰۲۵",
      description:
        "پورتفولیو حرفه‌ای با React، Tailwind و انیمیشن‌های Framer Motion. همین سایتی که الان داری می‌بینی!",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      liveUrl: "https://yourname.vercel.app", // بعداً عوض کن
      githubUrl: "https://github.com/yourusername/yourname-portfolio",
      image: "/api/placeholder/600/400", // بعداً عکس واقعی بذار
      featured: true,
    },
    {
      id: 2,
      title: "Job Board ایرانی (در حال ساخت)",
      description:
        "پلتفرم جستجوی شغل با فیلتر پیشرفته، سرچ هوشمند و طراحی مدرن. پروژه بعدی ما!",
      tech: ["React", "Zustand", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400",
      featured: false,
    },
    {
      id: 3,
      title: "داشبورد ادمین + چارت",
      description:
        "داشبورد مدیریت با چارت‌های زیبا، جدول داده و تم دارک/لایت. پروژه سوم ما!",
      tech: ["React", "Recharts", "TanStack Table", "Shadcn/ui"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400",
      featured: false,
    },
  ];

  // // انیمیشن ورود کارت‌ها (یکی یکی ظاهر بشن)
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1, // هر کارت ۰.۲ ثانیه بعد از قبلی ظاهر بشه
  //     },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, y: 60 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
       
        {/* عنوان بخش */}
        <MotionWrapper
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            پروژه‌های من
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            چیزایی که با عشق ساختم و هنوزم دارم می‌سازم
          </p>
        </MotionWrapper>

        {/* گرید کارت‌ها */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => (
            <div 
            key={project.id}
            className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 border border-gray-200 hover:border-cyan-500 transition-all duration-500">
              
              {/* تصویر پروژه */}
              <div className="relative overflow-hidden h-56">
                
                <div className="w-full h-full bg-linear-to-br from-cyan-400 to-blue-600">
                  <div className="flex items-center justify-center h-full text-6xl font-black text-white/20 hover:scale-110 transition-all duration-300">
                    {project.title[0]}
                  </div>
                </div>

                {/* لیبل ویژه (featured) */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-white dark:text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ویژه
                  </div>
                )}

              </div>

              {/* محتوای کارت */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>

                {/* تکنولوژی‌ها */}
                <div className="flex justify-center flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* دکمه‌ها */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:gap-3 transition-all"
                  >
                    <ExternalLink size={20} />
                    مشاهده دمو
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    گیت‌هاب
                  </a>
                </div>
              </div>

              {/* افکت برق زدن (Shimmer) — از بالا چپ به پایین راست */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-linear"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
