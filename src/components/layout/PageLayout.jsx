import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../ThemeContext";

export default function PageLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`} style={{ fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' }}>
      <style>{`
        * { font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; }
        h1, h2, h3, h4, h5, h6, [class*="font-bold"], [class*="font-semibold"], [class*="font-extrabold"] { font-family: Impact, "Arial Narrow", sans-serif; font-weight: 400 !important; }
      `}</style>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}