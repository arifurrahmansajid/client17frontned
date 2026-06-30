"use client";

import { ArrowLeft, MessageCircle, Send, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "How do I start earning?", a: "Purchase a VIP plan and income starts 24 hours after your purchase. Income is automatically credited to your wallet daily." },
  { q: "When can I withdraw?", a: "You can withdraw anytime. Minimum withdrawal is GHS 30. You can withdraw up to 3 times per day. A 15% tax is deducted." },
  { q: "How does the referral system work?", a: "Share your referral code. When someone registers and invests using your code, you earn 20% of their investment as commission (Level 1). Level 2 earns 3%, Level 3 earns 2%." },
  { q: "Is my investment safe?", a: "Yes. Your investment is secured by the platform. VIP plans are backed by physical massage chair assets generating real revenue." },
  { q: "How do I deposit funds?", a: "Go to the Deposit page, select your payment method (Bank Transfer, Mobile Money, or Crypto), send the funds, upload the payment screenshot, and submit." },
];

export default function SupportPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticket, setTicket] = useState({ subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setTicket({ subject: "", message: "" }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Customer Support</h1>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Contact Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: MessageCircle, label: "Live Chat", color: "bg-primary text-white", href: "#" },
            { icon: Send, label: "Telegram", color: "bg-sky-500 text-white", href: "https://t.me/vipinvest" },
            { icon: Phone, label: "WhatsApp", color: "bg-emerald-500 text-white", href: "https://wa.me/233551234567" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
              <div className={`${c.color} rounded-2xl p-4 flex flex-col items-center gap-2.5 shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform`}>
                <c.icon size={22} />
                <span className="text-xs font-bold">{c.label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Support Ticket Form */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Submit a Ticket</h3>
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <p className="text-emerald-700 font-semibold">✅ Ticket submitted! We'll respond within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input value={ticket.subject} onChange={(e) => setTicket({ ...ticket, subject: e.target.value })} placeholder="Subject" required
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea value={ticket.message} onChange={(e) => setTicket({ ...ticket, message: e.target.value })} placeholder="Describe your issue..." required rows={4}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <button type="submit" className="w-full h-12 bg-primary text-white font-bold rounded-2xl shadow-md shadow-primary/20 hover:bg-blue-700 transition-colors">
                Send Ticket
              </button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">FAQ</h3>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-semibold text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="text-sm text-slate-600 px-4 pb-4 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
