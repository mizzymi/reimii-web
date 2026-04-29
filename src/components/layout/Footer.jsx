import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../ThemeContext";

const LOGO_URL = "/images/be3274199_reimiilogo-100.jpg";
const CONTACT_EMAIL = "shop@reimii.com";

export default function Footer() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const navLinks = [
    { label: t.nav.home, path: "/Home" },
    { label: t.nav.projects, path: "/Proyectos" },
    { label: t.nav.about, path: "/Nosotros" },
    { label: t.nav.contact, path: "/Contacto" },
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${isDark ? "bg-slate-950 border-white/5" : "bg-slate-100 border-slate-200"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="REIMII" className="w-9 h-9 rounded-xl object-cover" />
              <span className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>REIMII</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isDark ? "text-white" : "text-slate-700"}`}>{t.footer.nav}</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`block text-sm transition-colors ${isDark ? "text-slate-400 hover:text-teal-300" : "text-slate-500 hover:text-teal-600"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isDark ? "text-white" : "text-slate-700"}`}>{t.footer.contact}</h4>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className={`flex items-center gap-2 text-sm transition-colors ${isDark ? "text-slate-400 hover:text-teal-300" : "text-slate-500 hover:text-teal-600"}`}>
                <Mail className="w-4 h-4" />{CONTACT_EMAIL}
              </a>
              <div className={`flex items-center gap-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                <MapPin className="w-4 h-4" />{t.footer.location}
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-12 pt-8 border-t text-center ${isDark ? "border-white/5" : "border-slate-200"}`}>
          <p className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            © {new Date().getFullYear()} REIMII. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}