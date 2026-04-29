import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";

export default function CTASection() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const c = t.cta;

  const sectionBg = isDark
    ? "from-teal-500/10 via-cyan-500/5 to-transparent border-teal-500/15"
    : "from-teal-50 via-cyan-50/50 to-white border-teal-200";

  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", stiffness: 80 }} className={`rounded-[2.5rem] p-12 lg:p-20 bg-gradient-to-br border backdrop-blur-sm ${sectionBg}`}>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-teal-500/30">
            <MessageCircle className="w-8 h-8 text-slate-900" />
          </motion.div>
          <motion.h2 className={`text-3xl sm:text-5xl font-black mb-4 ${titleColor}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>{c.title}</motion.h2>
          <motion.p className={`text-lg mb-10 max-w-lg mx-auto leading-relaxed ${descColor}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>{c.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/Contacto" className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-bold text-sm shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 transition-all duration-300">
              {c.button} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}