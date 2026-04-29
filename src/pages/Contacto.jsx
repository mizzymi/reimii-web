import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../components/i18n/LanguageContext";
import { useTheme } from "../components/ThemeContext";

const CONTACT_EMAIL = "shop@reimii.com";

export default function Contacto() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const c = t.contactPage;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(c.errorMsg);
      return;
    }

    const subject = encodeURIComponent(`Contacto de ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    toast.success(c.successMsg);
  };
  
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-slate-400" : "text-slate-500";
  const subtitleColor = isDark ? "text-teal-400" : "text-teal-600";
  const card = isDark
    ? "bg-white/[0.03] border-white/[0.06]"
    : "bg-white border-slate-200 shadow-sm";
  const labelColor = isDark ? "text-slate-300" : "text-slate-700";
  const inputClass = isDark
    ? "bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500/50"
    : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-400";
  const ctaCardBg = isDark
    ? "bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border-teal-500/10"
    : "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200";
  const emailLinkColor = isDark
    ? "text-slate-400 hover:text-teal-300"
    : "text-slate-500 hover:text-teal-600";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-3 ${subtitleColor}`}
          >
            {c.subtitle}
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 ${titleColor}`}
          >
            {c.title}
          </h1>
          <p className={`text-lg max-w-xl ${descColor}`}>{c.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className={`rounded-3xl border p-12 text-center ${card}`}>
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${titleColor}`}>
                  {c.sent}
                </h3>
                <p className={descColor}>{c.sentDesc}</p>
                <Button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className={`mt-6 border-0 ${isDark ? "bg-white/10 hover:bg-white/15 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-800"}`}
                >
                  {c.sendAnother}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`rounded-3xl border p-8 lg:p-10 space-y-6 ${card}`}
              >
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${labelColor}`}
                  >
                    {c.name}
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.namePlaceholder}
                    className={`rounded-xl h-12 ${inputClass}`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${labelColor}`}
                  >
                    {c.email}
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="tu@email.com"
                    className={`rounded-xl h-12 ${inputClass}`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${labelColor}`}
                  >
                    {c.message}
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={c.messagePlaceholder}
                    rows={5}
                    className={`rounded-xl resize-none ${inputClass}`}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-teal-500/25"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {c.send}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`p-6 rounded-2xl border ${card}`}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 opacity-80">
                <Mail className="w-5 h-5 text-slate-900" />
              </div>
              <h3 className={`font-bold mb-1 ${titleColor}`}>{c.email}</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`text-sm transition-colors ${emailLinkColor}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className={`p-6 rounded-2xl border ${card}`}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4 opacity-80">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className={`font-bold mb-1 ${titleColor}`}>{c.location}</h3>
              <p className={`text-sm ${descColor}`}>{c.locationDesc}</p>
            </div>

            <div className={`p-6 rounded-2xl border ${ctaCardBg}`}>
              <h3 className={`font-bold mb-2 ${titleColor}`}>{c.fastReply}</h3>
              <p className={`text-sm leading-relaxed ${descColor}`}>
                {c.fastReplyDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
