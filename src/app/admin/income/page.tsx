"use client";

import { useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const INCOME = [
  { id: 1, user: "+233 55 123 4567", source: "VIP 2 Daily Yield", amount: 45, date: "2026-06-30 14:00" },
  { id: 2, user: "+233 24 456 7890", source: "VIP 4 Daily Yield", amount: 150, date: "2026-06-30 14:00" },
  { id: 3, user: "+233 50 987 6543", source: "VIP 1 Daily Yield", amount: 12, date: "2026-06-29 14:00" },
];

export default function AdminIncomePage() {
  const [search, setSearch] = useState("");
  const filtered = INCOME.filter(i => i.user.includes(search) || i.source.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Income Records</h1>
          <p className="text-sm text-slate-500 mt-0.5">Track daily yields and user income</p>
        </div>
      </div>

      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by phone or source..."
          className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount (GHS)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((inc, idx) => (
                <motion.tr key={inc.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                  className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">{inc.user}</td>
                  <td className="px-4 py-3.5 font-medium text-slate-700">{inc.source}</td>
                  <td className="px-4 py-3.5 text-slate-500 text-xs font-medium">{inc.date}</td>
                  <td className="px-4 py-3.5 font-black text-emerald-600">+{inc.amount}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
