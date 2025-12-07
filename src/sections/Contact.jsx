import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "../components/MotionWrpper";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzrprrp");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
        await handleSubmit(e);

    if (state.errors) {
      setErrorMessage("مشکلی پیش اومده، دوباره امتحان کن.");
    } else if (state.succeeded) {
      setShowSuccess(true);
      triggerConfetti();
      setTimeout(() => setShowSuccess(false), 5000);
    }
    } catch (error) {
        setErrorMessage(error.message);
    }

  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* عنوان */}
        <MotionWrapper
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            بیا حرف بزنیم
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            آماده همکاری، فریلنس، یا یه گپ ساده؟ پیام بده 🙂
          </p>
        </MotionWrapper>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
          {showSuccess ? (
            <MotionWrapper
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                پیامت با موفقیت ارسال شد!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                به زودی جواب می‌دم ❤️
              </p>
            </MotionWrapper>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              {/* نام و نام خانوادگی */}
              <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="علی باقری"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-0 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* آدرس ایمیل */}
              <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ali@example.com"
                  dir="ltr"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-0 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* متن پیام */}
              <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  متن پیام
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="سلام علی، خیلی سایتت خفنه..."
                  className="w-full px-6 py-4 rounded-xl border resize-none border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-0 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-cyan-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    "درحال ارسال"
                  ) : (
                    <>
                      <Send size={24} />
                      ارسال پیام
                    </>
                  )}
                </button>
              </div>

              {/* نمایش خطا */}
              <AnimatePresence>
                {errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-red-500 text-center font-medium bg-red-50 dark:bg-red-900/30 px-6 py-4 rounded-2xl border border-red-200 dark:border-red-800"
                >
                  {errorMessage}
                </motion.p>
              )}
              </AnimatePresence>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
