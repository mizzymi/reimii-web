import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";
import {
  PROJECT_IMAGES,
  APP_RATINGS,
  PROJECT_SLUGS,
} from "../projects/projectsData";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const fp = t.featuredProjects;
  const pp = t.projectsPage;
  const projects = t.projects.slice(0, 3);

  const card = isDark
    ? "bg-white/[0.03] border-white/[0.06] hover:border-teal-500/25"
    : "bg-white border-slate-200 hover:border-teal-400/40 shadow-sm hover:shadow-md";
  const subtitleColor = isDark ? "text-teal-400" : "text-teal-600";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const catColor = isDark ? "text-teal-400" : "text-teal-600";
  const viewAllColor = isDark
    ? "text-teal-300 hover:text-teal-200"
    : "text-teal-600 hover:text-teal-700";
  const detailColor = isDark
    ? "text-teal-300 hover:text-teal-200 bg-teal-500/10 hover:bg-teal-500/20"
    : "text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`text-sm font-semibold uppercase tracking-widest mb-3 ${subtitleColor}`}
            >
              ✦ {fp.subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-black ${titleColor}`}
            >
              {fp.title}
            </motion.h2>
          </div>
          <motion.div whileHover={{ x: 4 }}>
            <Link
              to="/Proyectos"
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${viewAllColor}`}
            >
              {fp.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              className="h-full"
              key={project.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8 }}
            >
              <div
                className={`group rounded-3xl border overflow-hidden transition-all duration-500 h-full flex flex-col ${card}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={PROJECT_IMAGES[i]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs text-white font-medium">
                      {APP_RATINGS[i]}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-2 ${catColor}`}
                  >
                    {project.category}
                  </p>
                  <h3 className={`text-xl font-bold mb-2 ${titleColor}`}>
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${descColor}`}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() => navigate(`/Proyectos/${PROJECT_SLUGS[i]}`)}
                    className={`w-full py-2 rounded-xl text-sm font-medium transition-all ${detailColor}`}
                  >
                    {pp.detail}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/Proyectos"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${viewAllColor}`}
          >
            {fp.viewAllMobile} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
