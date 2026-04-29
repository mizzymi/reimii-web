import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Smartphone,
  Monitor,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../components/i18n/LanguageContext";
import { useTheme } from "../components/ThemeContext";
import {
  PROJECT_IMAGES,
  PROJECT_SCREENSHOTS,
  PROJECT_TAGS,
  APP_RATINGS,
  PROJECT_SLUGS,
} from "../components/projects/projectsData";

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);

  const { slug } = useParams();
  const index = PROJECT_SLUGS.indexOf(slug ?? "");
  const project = index >= 0 ? t.projects[index] : null;

  useEffect(() => {
    setActiveImg(0);
  }, [slug]);

  if (!project || index < 0) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
      >
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Project not found</p>
          <button
            onClick={() => navigate("/Proyectos")}
            className="text-teal-500 underline"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  const screenshots =
    PROJECT_SCREENSHOTS[index]?.length > 0
      ? PROJECT_SCREENSHOTS[index]
      : [PROJECT_IMAGES[index]];

  const tags = PROJECT_TAGS[index] ?? [];
  const rating = APP_RATINGS[index] ?? "—";

  const pp = t.projectsPage;
  const bg = isDark ? "bg-slate-900" : "bg-slate-50";
  const cardBg = isDark
    ? "bg-white/[0.03] border-white/[0.06]"
    : "bg-white border-slate-200 shadow-sm";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-slate-300" : "text-slate-600";
  const metaColor = isDark ? "text-slate-400" : "text-slate-500";
  const pillBg = isDark
    ? "bg-white/5 border-white/10 text-slate-300"
    : "bg-slate-50 border-slate-200 text-slate-600";
  const tagBg = isDark
    ? "bg-teal-500/10 border-teal-500/20 text-teal-300"
    : "bg-teal-50 border-teal-200 text-teal-600";
  const borderColor = isDark ? "border-white/5" : "border-slate-200";
  const backBtn = isDark
    ? "text-slate-400 hover:text-white"
    : "text-slate-500 hover:text-slate-900";

  const prev = () =>
    setActiveImg((v) => (v - 1 + screenshots.length) % screenshots.length);
  const next = () => setActiveImg((v) => (v + 1) % screenshots.length);

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-24">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/Proyectos")}
          className={`flex items-center gap-2 text-sm font-medium mb-10 transition-colors ${backBtn}`}
        >
          <ArrowLeft className="w-4 h-4" /> {pp.subtitle}
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video mb-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={screenshots[activeImg]}
                  alt={`${project.name} screenshot ${activeImg + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? (isDark ? "border-teal-400" : "border-teal-500") : isDark ? "border-white/10 opacity-50 hover:opacity-80" : "border-slate-200 opacity-50 hover:opacity-80"}`}
                >
                  <img src={s} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Status + type */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.statusColor}`}
              >
                {project.status}
              </span>
              <span
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs ${isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-500"}`}
              >
                {project.type === "game" ? (
                  <Gamepad2 className="w-3 h-3" />
                ) : (
                  <Smartphone className="w-3 h-3" />
                )}
                {project.type === "game" ? pp.gameLabel : pp.appLabel}
              </span>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-amber-400 font-medium">
                  {rating}
                </span>
              </div>
            </div>

            <span
              className={`text-xs font-semibold uppercase tracking-widest mb-2 block ${isDark ? "text-teal-400" : "text-teal-600"}`}
            >
              {project.category}
            </span>
            <h1 className={`text-4xl font-black mb-4 ${titleColor}`}>
              {project.name}
            </h1>
            <p className={`text-base leading-relaxed mb-6 ${descColor}`}>
              {project.description}
            </p>

            {/* Platform */}
            <div
              className={`flex items-center gap-4 pb-6 border-b mb-6 ${borderColor}`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${metaColor}`}
              >
                {pp.platform}:
              </span>
              {project.type === "game" ? (
                [
                  { Icon: Monitor, label: "PC" },
                  { Icon: Smartphone, label: "Android" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-1.5 text-sm ${metaColor}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </div>
                ))
              ) : (
                <div
                  className={`flex items-center gap-1.5 text-sm ${metaColor}`}
                >
                  <Smartphone className="w-4 h-4" />
                  Android
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mb-6">
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${metaColor}`}
              >
                {pp.featuresLabel}
              </p>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-sm ${descColor}`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${isDark ? "text-teal-400" : "text-teal-500"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${metaColor}`}
              >
                <Tag className="w-3.5 h-3.5" /> Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium ${tagBg}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* More screenshots full row if > 3 */}
        {screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-16 pt-10 border-t ${borderColor}`}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-5 ${metaColor}`}
            >
              Screenshots
            </p>
            <div className="grid grid-cols-3 gap-4">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveImg(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`rounded-2xl overflow-hidden aspect-video border-2 transition-all hover:scale-[1.02] ${i === activeImg ? (isDark ? "border-teal-400" : "border-teal-500") : isDark ? "border-white/5" : "border-slate-200"}`}
                >
                  <img src={s} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
