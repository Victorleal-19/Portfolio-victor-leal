import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { getCoursesData, Course } from "../i18n/coursesData";

const CourseCard: React.FC<{ course: Course; index: number; inProgressBadge: string }> = ({ course, index, inProgressBadge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`
        p-6 rounded-2xl border transition-all duration-300
        ${course.featured 
          ? "bg-brand-blue/5 border-brand-blue/20 shadow-lg shadow-brand-blue/5" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10"
        }
      `}
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className={`font-bold leading-tight ${course.featured ? "text-white text-lg" : "text-white/90"}`}>
              {course.name}
            </h3>
            {course.cursando && (
              <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-brand-blue text-[10px] font-bold text-white uppercase tracking-wider">
                {inProgressBadge}
              </span>
            )}
          </div>
          <p className="text-secondary text-xs font-medium">
            {course.institution} <span className="opacity-30">•</span> {course.year}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {course.tags.map(tag => (
            <span 
              key={tag} 
              className={`
                px-2 py-0.5 rounded-md text-[10px] font-medium
                ${course.featured 
                  ? "bg-brand-blue/10 text-brand-blue/80" 
                  : "bg-white/5 text-secondary/70"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Courses() {
  const { language } = useLanguage();
  const { titleMain, titleHighlight, subtitle, inProgressBadge, featured: featuredCourses, regular: regularCourses } = getCoursesData(language);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  
  // Group courses into pages of 4
  const pages = [];
  for (let i = 0; i < regularCourses.length; i += itemsPerPage) {
    pages.push(regularCourses.slice(i, i + itemsPerPage));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <section id="courses" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{titleMain} <span className="text-brand-blue">{titleHighlight}</span></h2>
        <p className="text-secondary max-w-xl mx-auto">{subtitle}</p>
      </div>

      <div className="space-y-12">
        {/* Featured Courses Grid - Static */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, i) => (
            <CourseCard key={course.name} course={course} index={i} inProgressBadge={inProgressBadge} />
          ))}
        </div>

        {/* Regular Courses Carousel */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${currentPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {pages[currentPage].map((course, i) => (
                <CourseCard 
                  key={course.name} 
                  course={course} 
                  index={i} 
                  inProgressBadge={inProgressBadge}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === i ? "bg-brand-blue w-6" : "bg-white/10"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
