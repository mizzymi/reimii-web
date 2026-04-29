import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Shield, Lightbulb } from "lucide-react";
import { useLanguage } from "../components/i18n/LanguageContext";
import { useTheme } from "../components/ThemeContext";

const TEAM_IMG = "/images/08d25b927_generated_3c4d9597.png";
const VALUE_ICONS = [Heart, Zap, Shield, Lightbulb];
const VALUE_COLORS = [
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-teal-500 to-cyan-500",
  "from-violet-500 to-purple-500",
];

export default function Nosotros() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ap = t.aboutPage;
  const v = ap.values;

  const values = [
    { title: v.passion, desc: v.passionDesc },
    { title: v.speed, desc: v.speedDesc },
    { title: v.respect, desc: v.respectDesc },
    { title: v.simplicity, desc: v.simplicityDesc },
  ];

  const titleColor = isDark ? "text-white" : "text-slate-900";
  const titleAccent = isDark
    ? "bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent";
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const subtitleColor = isDark ? "text-teal-400" : "text-teal-600";
  const storyColor = isDark ? "text-slate-400" : "text-slate-600";
  const card = isDark
    ? "bg-white/[0.03] border-white/[0.06] hover:border-white/10"
    : "bg-white border-slate-200 hover:border-slate-300 shadow-sm";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-3 ${subtitleColor}`}
          >
            {ap.subtitle}
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 ${titleColor}`}
          >
            {ap.title}
            <br />
            <span className={titleAccent}>
              {ap.titleAccent}
            </span>
          </h1>
          <p className={`text-lg max-w-2xl ${descColor}`}>{ap.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] overflow-hidden mb-20"
        >
          <img
            src={TEAM_IMG}
            alt="Equipo REIMII"
            className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover rounded-[2rem]"
          />
        </motion.div>

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${titleColor}`}
          >
            {ap.storyTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-3xl mx-auto leading-relaxed text-center text-lg ${storyColor}`}
          >
            {ap.story}
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl font-bold mb-10 text-center ${titleColor}`}
          >
            {ap.valuesTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-500 text-center ${card}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${VALUE_COLORS[i]} flex items-center justify-center mx-auto mb-4 opacity-80`}
                >
                  {React.createElement(VALUE_ICONS[i], {
                    className: "w-6 h-6 text-white",
                  })}
                </div>
                <h3 className={`font-bold mb-2 ${titleColor}`}>{val.title}</h3>
                <p className={`text-sm leading-relaxed ${descColor}`}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
