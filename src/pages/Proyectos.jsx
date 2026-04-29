import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star, Smartphone, Gamepad2, Tag, X } from "lucide-react";
import { useLanguage } from "../components/i18n/LanguageContext";
import { useTheme } from "../components/ThemeContext";
import { PROJECT_IMAGES, PROJECT_TAGS, APP_RATINGS, PROJECT_SLUGS } from "../components/projects/projectsData";

// Collect all unique tags from all projects
const ALL_TAGS = [...new Set(PROJECT_TAGS.flat())].sort();

export default function Proyectos() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [activeTags, setActiveTags] = useState([]);
  const pp = t.projectsPage;
  const projects = t.projects;

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredIndices = projects.reduce((acc, _, i) => {
    const matches = activeTags.length === 0 || activeTags.every((tag) => PROJECT_TAGS[i]?.includes(tag));
    if (matches) acc.push(i);
    return acc;
  }, []);

  const card = isDark ? "bg-white/[0.03] border-white/[0.06] hover:border-teal-500/20" : "bg-white border-slate-200 hover:border-teal-400/40 shadow-sm hover:shadow-md";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const titleAccent = isDark ? "bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const catColor = isDark ? "text-teal-400" : "text-teal-600";
  const metaColor = isDark ? "text-slate-500" : "text-slate-400";
  const subtitleColor = isDark ? "text-teal-400" : "text-teal-600";
  const detailBtn = isDark ? "bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 border-teal-500/20" : "bg-teal-50 text-teal-600 hover:bg-teal-100 border-teal-200";
  const typeTag = isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-500";
  const tagActive = isDark ? "bg-teal-500/20 border-teal-400 text-teal-300" : "bg-teal-100 border-teal-400 text-teal-700";
  const tagIdle = isDark ? "bg-white/5 border-white/10 text-slate-400 hover:border-teal-500/40 hover:text-teal-300" : "bg-slate-50 border-slate-200 text-slate-500 hover:border-teal-300 hover:text-teal-600";

  return (
    <>
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${subtitleColor}`}>{pp.subtitle}</p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 ${titleColor}`}>
              {pp.title}<br />
              <span className={titleAccent}>{pp.titleAccent}</span>
            </h1>
            <p className={`text-lg max-w-xl ${descColor}`}>{pp.description}</p>
          </motion.div>

          {/* Tag Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mb-10">
            <div className={`flex items-center gap-1.5 mb-3 text-xs font-semibold uppercase tracking-wider ${metaColor}`}>
              <Tag className="w-3.5 h-3.5" /> Tags
              {activeTags.length > 0 && (
                <button onClick={() => setActiveTags([])} className={`ml-2 flex items-center gap-1 px-2 py-0.5 rounded-lg border text-xs ${isDark ? "border-white/10 text-slate-400 hover:text-white" : "border-slate-200 text-slate-400 hover:text-slate-700"}`}>
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <button key={tag} onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${activeTags.includes(tag) ? tagActive : tagIdle}`}>
                  #{tag}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredIndices.map((i) => {
                const project = projects[i];
                return (
                  <motion.div key={project.name}
                    layout
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className={`group rounded-3xl border overflow-hidden transition-all duration-500 h-full flex flex-col ${card}`}>
                      <div className="relative h-48 overflow-hidden">
                        <img src={PROJECT_IMAGES[i]} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${project.statusColor}`}>{project.status}</span>
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs text-white font-medium">{APP_RATINGS[i]}</span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold uppercase tracking-wider ${catColor}`}>{project.category}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-lg font-bold ${titleColor}`}>{project.name}</h3>
                          <span className={`flex items-center gap-1 px-2 py-0.5 rounded-lg border text-xs ${typeTag}`}>
                            {project.type === "game" ? <Gamepad2 className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                            {project.type === "game" ? pp.gameLabel : pp.appLabel}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed mb-3 flex-1 ${descColor}`}>{project.description}</p>
                        {/* Tags preview */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {PROJECT_TAGS[i]?.slice(0, 3).map((tag) => (
                            <span key={tag} className={`px-2 py-0.5 rounded-lg border text-xs ${activeTags.includes(tag) ? tagActive : tagIdle}`}>#{tag}</span>
                          ))}
                          {PROJECT_TAGS[i]?.length > 3 && (
                            <span className={`px-2 py-0.5 rounded-lg border text-xs ${tagIdle}`}>+{PROJECT_TAGS[i].length - 3}</span>
                          )}
                        </div>
                        <button onClick={() => navigate(`/Proyectos/${PROJECT_SLUGS[i]}`)} className={`w-full py-2 rounded-xl text-sm font-medium border transition-all ${detailBtn}`}>
                          {pp.detail}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredIndices.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-center py-20 ${metaColor}`}>
              <Tag className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p className="text-sm">No projects match the selected tags.</p>
            </motion.div>
          )}
        </div>
      </div>

    </>
  );
}