import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";

const HERO_BG_DARK = "/images/83d89c374_765be4a9e_generated_f133a446.png";
const HERO_BG_LIGHT = "/images/52f758cf3_765be4a9e_generated_f133a446-light.png";

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 4 + 2, duration: Math.random() * 8 + 6, delay: Math.random() * 5,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute rounded-full bg-teal-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${isDark ? HERO_BG_DARK : HERO_BG_LIGHT})` }} />
      <div className={`absolute inset-0 ${isDark
        ? "bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900"
        : "bg-gradient-to-b from-white/20 via-white/10 to-slate-50"
      }`} />
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring", stiffness: 200 }}>
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${isDark ? "bg-black/50 border-teal-500/30" : "bg-white/50 border-teal-500/30"}`}
            animate={{ boxShadow: ["0 0 0px rgba(20,184,166,0)", "0 0 20px rgba(20,184,166,0.3)", "0 0 0px rgba(20,184,166,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className={`w-4 h-4 ${isDark ? "text-teal-400" : "text-teal-600"}`} />
            <span className={`text-sm font-medium ${isDark ? "text-teal-300" : "text-teal-700"}`}>{h.badge}</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 100 }} className="mb-6 flex justify-center">
          <img src="/images/073fb0ac3_reimii4x.png" alt="REIMII" className={`w-64 sm:w-80 lg:w-[28rem] object-contain drop-shadow-2xl ${!isDark ? "brightness-90" : ""}`} />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className={`text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? "text-slate-200" : "text-slate-600"}`}>
          {h.subtitle}<br />
          <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{h.accent}</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link to="/Proyectos" className="group px-9 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-bold text-sm shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 transition-all duration-300 flex items-center gap-2">
              {h.cta1} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link to="/Nosotros" className={`px-9 py-4 rounded-2xl border font-semibold text-sm backdrop-blur-sm transition-all duration-300 ${isDark ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40" : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"}`}>
              {h.cta2}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${isDark ? "from-slate-900" : "from-slate-50"} to-transparent`} />
    </section>
  );
}