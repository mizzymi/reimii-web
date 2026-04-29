import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";

const LOGO_URL = "/images/073fb0ac3_reimii4x.png";

const LANGS = [
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "ca", label: "CA", flag: "🇪🇸" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "hi", label: "HI", flag: "🇮🇳" },
  { code: "ja", label: "JP", flag: "🇯🇵" },
  { code: "ko", label: "KR", flag: "🇰🇷" },
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.nav.home, path: "/Home" },
    { label: t.nav.projects, path: "/Proyectos" },
    { label: t.nav.about, path: "/Nosotros" },
    { label: t.nav.contact, path: "/Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
    setMobileLangOpen(false);
  }, [location.pathname]);

  const currentLang = LANGS.find((l) => l.code === lang) || LANGS[4];

  const navBg = scrolled
    ? isDark
      ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
      : "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md"
    : "bg-transparent";

  const linkActive = isDark
    ? "bg-teal-500/15 text-teal-300"
    : "bg-teal-500/10 text-teal-600";

  const linkIdle = isDark
    ? "text-slate-300 hover:text-white hover:bg-white/5"
    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100";

  const dropdownBg = isDark
    ? "bg-slate-800 border-white/10"
    : "bg-white border-slate-200 shadow-lg";

  const dropdownItem = (active) =>
    isDark
      ? active
        ? "bg-teal-500/20 text-teal-300"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
      : active
        ? "bg-teal-50 text-teal-600"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/Home" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="REIMII"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path ? linkActive : linkIdle
                }`}
              >
                {link.label}
              </Link>
            ))}

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-2 p-2.5 rounded-full transition-all duration-300 ${
                isDark
                  ? "text-slate-300 hover:text-amber-300 hover:bg-amber-500/10"
                  : "text-slate-500 hover:text-amber-500 hover:bg-amber-50"
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.button>

            <div className="relative ml-1">
              <button
                onClick={() => setLangOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute right-0 top-full mt-1 w-28 max-h-72 overflow-y-auto rounded-2xl border shadow-2xl ${dropdownBg}`}
                  >
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${dropdownItem(
                          lang === l.code,
                        )}`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => {
              setIsOpen((prev) => {
                const next = !prev;
                if (!next) setMobileLangOpen(false);
                return next;
              });
            }}
            className={`md:hidden p-2 rounded-xl transition-all ${
              isDark
                ? "text-slate-300 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t overflow-hidden ${
              isDark
                ? "bg-slate-900/95 backdrop-blur-xl border-white/5"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileLangOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path ? linkActive : linkIdle
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div
                  className={`pt-2 border-t px-4 ${isDark ? "border-white/5" : "border-slate-100"}`}
                >
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMobileLangOpen((prev) => !prev)}
                      className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isDark
                          ? "text-slate-300 hover:text-white hover:bg-white/5"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{currentLang.flag}</span>
                        <span>{currentLang.label}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileLangOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <button
                      onClick={() => {
                        toggleTheme();
                        setIsOpen(false);
                        setMobileLangOpen(false);
                      }}
                      className={`p-2.5 rounded-xl transition-all ${
                        isDark
                          ? "text-slate-400 hover:text-amber-300 hover:bg-amber-500/10"
                          : "text-slate-500 hover:text-amber-500 hover:bg-amber-50"
                      }`}
                    >
                      {isDark ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 overflow-hidden"
                      >
                        <div
                          className={`rounded-2xl border max-h-60 overflow-y-auto ${
                            isDark
                              ? "bg-slate-800/70 border-white/10"
                              : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          {LANGS.map((l) => (
                            <button
                              key={l.code}
                              onClick={() => {
                                setLang(l.code);
                                setMobileLangOpen(false);
                                setIsOpen(false);
                              }}
                              className={`w-full flex items-center gap-2 px-4 py-3 text-sm transition-colors ${dropdownItem(
                                lang === l.code,
                              )}`}
                            >
                              <span>{l.flag}</span>
                              <span>{l.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
