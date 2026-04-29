import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Download, Star, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";

function AnimatedCounter({ target, suffix, isFloat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const duration = 1500,
      steps = 60,
      increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else
        setCount(
          isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current),
        );
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const s = t.stats;

  const stats = [
    {
      icon: Rocket,
      value: 3,
      suffix: "+",
      label: s.launched,
      color: "from-teal-400 to-cyan-400",
      glow: "shadow-teal-500/20",
    },
    {
      icon: Download,
      value: 10,
      suffix: "+",
      label: s.downloads,
      color: "from-cyan-400 to-blue-400",
      glow: "shadow-cyan-500/20",
    },
    {
      icon: Star,
      value: 4.8,
      suffix: "",
      label: s.rating,
      color: "from-amber-400 to-orange-400",
      glow: "shadow-amber-500/20",
    },
    {
      icon: Users,
      value: 2,
      suffix: "",
      label: s.team,
      color: "from-violet-400 to-purple-400",
      glow: "shadow-violet-500/20",
    },
  ];

  const card = isDark
    ? "bg-white/[0.04] border-white/[0.07] hover:border-white/15"
    : "bg-white border-slate-200 hover:border-slate-300 shadow-sm";

  const labelColor = isDark ? "text-slate-400" : "text-slate-500";
  const valueColor = isDark ? "text-white" : "text-slate-800";

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group cursor-default"
            >
              <div
                className={`p-6 lg:p-8 rounded-3xl border transition-all duration-500 text-center h-full shadow-xl ${stat.glow} group-hover:shadow-2xl ${card}`}
              >
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7 text-slate-900" />
                </motion.div>
                <p
                  className={`text-4xl lg:text-5xl font-black mb-2 ${valueColor}`}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isFloat={!Number.isInteger(stat.value)}
                  />
                </p>
                <p className={`text-sm leading-tight ${labelColor}`}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
