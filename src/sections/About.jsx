import MotionWrapper from "../components/MotionWrpper";
import { motion } from "framer-motion";

export default function About() {
  // داده‌های مهارت‌ها
  const skills = [
    { name: "React", percentage: 85, color: "bg-cyan-500" },
    { name: "JavaScript", percentage: 90, color: "bg-blue-500" },
    { name: "Tailwind CSS", percentage: 80, color: "bg-indigo-500" },
    { name: "HTML/CSS", percentage: 95, color: "bg-green-500" },
    { name: "Git & GitHub", percentage: 85, color: "bg-gray-500" },
    { name: "Responsive Design", percentage: 90, color: "bg-purple-500" },
  ];

  // داده های تایم لاین
  const timeline = [
    {
      year: "1404",
      title: "توسعه‌دهنده فرانت‌اند",
      description:
        "شروع مسیر حرفه‌ای به عنوان توسعه‌دهنده فرانت‌اند با تمرکز بر React و Tailwind CSS. ساخت پروژه‌های شخصی و مستقل.",
    },
    {
      year: "1403",
      title: "یادگیری React و اکوسیستم آن",
      description:
        "یادگیری React، مدیریت State، کامپوننت‌ها و مفاهیم پیشرفته React. شروع ساخت پروژه‌های کاربردی.",
    },
    {
      year: "1402",
      title: "پایه‌گذاری مهارت‌های وب",
      description:
        "یادگیری کامل HTML، CSS، JavaScript و مفاهیم پایه وب. تسلط بر Responsive Design و Flexbox/Grid.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* عنوان بخش */}
        <MotionWrapper
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            درباره من
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            من توسعه‌دهنده فرانت‌اند هستم که به ساخت رابط‌های کاربری زیبا،
            کاربردی و با عملکرد بالا متمرکز شده‌ام.
          </p>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* تایم لاین تجربه */}
          <div className="space-y-8 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              مسیر حرفه ای من
            </h3>

            <div>
              {/* خط عمودی تایم لاین
              <div className="absolute right-5 bottom-40  top-0 w-0.5 bg-linear-to-b from-cyan-500 to-blue-500"></div> */}

              {timeline.map((item, index) => (
                <div key={index} className="flex items-start mb-12">
                  <div className="w-10 h-10 p-2 ml-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-sm">{item.year}</span>
                  </div>

                  <div className="ml-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* مهارت ها */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
              مهارت‌های فنی
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className={`h-3 rounded-full ${skill.color}`}
                    style={{width: `${skill.percentage}%`}}
                    >

                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
