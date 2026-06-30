"use client";

import { useState } from "react";
import { ArrowLeft, Upload, Landmark, Smartphone, Bitcoin, Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const METHODS = [
  { id: "bank", icon: Landmark, label: "Bank Transfer", sub: "Standard bank wire" },
  { id: "momo", icon: Smartphone, label: "Mobile Money", sub: "MTN, Vodafone, AirtelTigo" },
  { id: "crypto", icon: Bitcoin, label: "Crypto (USDT)", sub: "TRC20 / ERC20" },
];

const HISTORY = [
  { id: 1, amount: 500, method: "Mobile Money", date: "2026-06-29", status: "approved" },
  { id: 2, amount: 200, method: "Bank Transfer", date: "2026-06-22", status: "approved" },
  { id: 3, amount: 100, method: "Mobile Money", date: "2026-06-15", status: "pending" },
];

export default function DepositPage() {
  const router = useRouter();
  const [method, setMethod] = useState("momo");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Deposit</h1>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Payment Methods */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3">Payment Method</h3>
          <div className="space-y-2">
            {METHODS.map((m) => (
              <button key={m.id} onClick={() => setMethod(m.id)} className={`w-full flex items-center gap-4 p-3.5 rounded-2xl border-2 transition-all ${method === m.id ? "border-primary bg-blue-50" : "border-slate-100 hover:border-slate-200"}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method === m.id ? "bg-primary text-white" : "bg-slate-100 text-slate-600"}`}>
                  <m.icon size={20} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-sm text-slate-900">{m.label}</p>
                  <p className="text-xs text-slate-500">{m.sub}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === m.id ? "border-primary bg-primary" : "border-slate-300"}`}>
                  {method === m.id && <Check size={11} className="text-white" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Deposit Info */}
        <AnimatePresence mode="wait">
          {method === "momo" && (
            <motion.div key="momo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p className="font-bold text-emerald-800 text-sm mb-1">Mobile Money Details</p>
              <p className="text-sm text-emerald-700">Send to: <strong>055 *** 1234</strong></p>
              <p className="text-sm text-emerald-700">Name: <strong>VIP INVEST LTD</strong></p>
            </motion.div>
          )}
          {method === "bank" && (
            <motion.div key="bank" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-1">
              <p className="font-bold text-blue-800 text-sm mb-1">Bank Transfer Details</p>
              <p className="text-sm text-blue-700">Bank: <strong>GCB Bank</strong></p>
              <p className="text-sm text-blue-700">Account: <strong>1234567890</strong></p>
              <p className="text-sm text-blue-700">Name: <strong>VIP INVEST LTD</strong></p>
            </motion.div>
          )}
          {method === "crypto" && (
            <motion.div key="crypto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="font-bold text-amber-800 text-sm mb-1">USDT Wallet Address (TRC20)</p>
              <p className="text-xs font-mono text-amber-700 break-all">TXhJ8D2...k9P3qRs (example address)</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Deposit Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">GHS</span>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00" min="1" required
                className="w-full h-12 pl-14 pr-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Upload Payment Screenshot</label>
            <label className="w-full h-32 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-blue-50/50 transition-all">
              <input type="file" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              {file ? (
                <div className="text-center">
                  <Check size={24} className="text-emerald-500 mx-auto mb-1" />
                  <p className="text-sm font-medium text-emerald-600">{file.name}</p>
                </div>
              ) : (
                <div className="text-center">
                  <Upload size={24} className="text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Tap to upload screenshot</p>
                </div>
              )}
            </label>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex items-center gap-2">
                <Check size={16} className="text-emerald-600" />
                <p className="text-sm font-semibold text-emerald-700">Deposit submitted! Pending review.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button type="submit" className="w-full h-12 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-md shadow-primary/20">
            Submit Deposit
          </button>
        </form>

        {/* History */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Deposit History</h3>
          <div className="space-y-3">
            {HISTORY.map((h) => (
              <div key={h.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <ArrowLeft size={18} className="text-primary rotate-[-90deg]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-900">GHS {h.amount}</p>
                  <p className="text-xs text-slate-500">{h.method} · {h.date}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${h.status === "approved" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
