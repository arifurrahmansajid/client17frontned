"use client";

import { useState } from "react";
import { Search, Eye, CheckCircle, XCircle, Clock, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";

const TRANSACTIONS = [
  { id: "TRX-9382", user: "+233 55 123 4567", type: "deposit", amount: 1500, date: "2026-06-30 14:30", status: "completed" },
  { id: "TRX-7412", user: "+233 24 456 7890", type: "withdrawal", amount: 450, date: "2026-06-30 11:15", status: "pending" },
  { id: "TRX-1029", user: "+233 50 987 6543", type: "investment", amount: 5000, date: "2026-06-29 09:40", status: "completed" },
  { id: "TRX-4431", user: "+233 27 321 9876", type: "deposit", amount: 200, date: "2026-06-28 16:20", status: "failed" },
  { id: "TRX-9982", user: "+233 20 654 3210", type: "withdrawal", amount: 1200, date: "2026-06-27 10:05", status: "completed" },
];

export default function AdminTransactionsPage() {
  const [search, setSearch] = useState("");
  const filtered = TRANSACTIONS.filter(t => t.id.includes(search) || t.user.includes(search));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Transactions</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage all user deposits, withdrawals, and investments</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by Transaction ID or Phone..."
          className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Trx ID</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((trx, idx) => (
                <motion.tr key={trx.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                  className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">{trx.id}</td>
                  <td className="px-4 py-3.5 font-medium text-slate-700">{trx.user}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5">
                      {trx.type === "deposit" && <ArrowDownLeft size={14} className="text-emerald-500" />}
                      {trx.type === "withdrawal" && <ArrowUpRight size={14} className="text-red-500" />}
                      {trx.type === "investment" && <CheckCircle size={14} className="text-primary" />}
                      <span className="capitalize font-semibold text-slate-700">{trx.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-black text-slate-900">GHS {trx.amount.toLocaleString()}</td>
                  <td className="px-4 py-3.5 text-slate-500 text-xs font-medium">{trx.date}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${
                      trx.status === "completed" ? "bg-emerald-100 text-emerald-700" :
                      trx.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"
                    }`}>
                      {trx.status === "completed" ? <CheckCircle size={11} /> : trx.status === "pending" ? <Clock size={11} /> : <XCircle size={11} />}
                      <span className="capitalize">{trx.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <button className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Eye size={14} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
