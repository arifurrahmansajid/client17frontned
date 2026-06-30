"use client";

import { useState } from "react";
import { Check, X, Clock, Eye } from "lucide-react";
import { motion } from "framer-motion";

const DEPOSITS = [
  { id: 1, user: "+233 55 *** 1234", amount: 500, method: "Mobile Money", date: "2026-06-30", status: "pending" },
  { id: 2, user: "+233 50 *** 5678", amount: 1280, method: "Bank Transfer", date: "2026-06-30", status: "pending" },
  { id: 3, user: "+233 24 *** 9012", amount: 160, method: "Mobile Money", date: "2026-06-29", status: "approved" },
  { id: 4, user: "+233 27 *** 3456", amount: 320, method: "Crypto", date: "2026-06-28", status: "approved" },
  { id: 5, user: "+233 20 *** 7890", amount: 80, method: "Mobile Money", date: "2026-06-27", status: "rejected" },
];

export default function AdminDepositsPage() {
  const [deposits, setDeposits] = useState(DEPOSITS);

  const updateStatus = (id: number, status: string) => {
    setDeposits(deposits.map(d => d.id === id ? { ...d, status } : d));
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Deposits</h1>
        <p className="text-sm text-slate-500 mt-0.5">Review and approve deposit requests</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Pending", count: deposits.filter(d=>d.status==="pending").length, color: "bg-amber-50 text-amber-700 border-amber-200" },
          { label: "Approved", count: deposits.filter(d=>d.status==="approved").length, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
          { label: "Rejected", count: deposits.filter(d=>d.status==="rejected").length, color: "bg-red-50 text-red-700 border-red-200" },
        ].map((s) => (
          <div key={s.label} className={`border rounded-2xl p-4 text-center ${s.color}`}>
            <p className="text-2xl font-black">{s.count}</p>
            <p className="text-xs font-semibold mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {["User", "Amount", "Method", "Date", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {deposits.map((d, idx) => (
                <motion.tr key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                  className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-semibold text-slate-900">{d.user}</td>
                  <td className="px-4 py-3.5 font-black text-emerald-600">GHS {d.amount}</td>
                  <td className="px-4 py-3.5 text-slate-700">{d.method}</td>
                  <td className="px-4 py-3.5 text-slate-500">{d.date}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${
                      d.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                      d.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"
                    }`}>
                      {d.status === "pending" ? <Clock size={11} /> : d.status === "approved" ? <Check size={11} /> : <X size={11} />}
                      {d.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    {d.status === "pending" && (
                      <div className="flex gap-2">
                        <button onClick={() => updateStatus(d.id, "approved")} className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-200 transition-colors">
                          <Check size={14} />
                        </button>
                        <button onClick={() => updateStatus(d.id, "rejected")} className="w-8 h-8 bg-red-100 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-200 transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                    {d.status !== "pending" && (
                      <button className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center">
                        <Eye size={14} className="text-slate-500" />
                      </button>
                    )}
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
