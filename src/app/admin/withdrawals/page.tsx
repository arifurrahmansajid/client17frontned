"use client";

import { useState } from "react";
import { Check, X, Clock } from "lucide-react";

const WITHDRAWALS = [
  { id: 1, user: "+233 55 *** 1234", amount: 200, tax: 30, received: 170, wallet: "MTN MoMo", date: "2026-06-30", status: "pending" },
  { id: 2, user: "+233 50 *** 5678", amount: 500, tax: 75, received: 425, wallet: "GCB Bank", date: "2026-06-30", status: "pending" },
  { id: 3, user: "+233 24 *** 9012", amount: 100, tax: 15, received: 85, wallet: "MTN MoMo", date: "2026-06-29", status: "approved" },
  { id: 4, user: "+233 27 *** 3456", amount: 80, tax: 12, received: 68, wallet: "Vodafone Cash", date: "2026-06-28", status: "approved" },
];

export default function AdminWithdrawalsPage() {
  const [items, setItems] = useState(WITHDRAWALS);
  const update = (id: number, status: string) => setItems(items.map(w => w.id === id ? { ...w, status } : w));

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Withdrawals</h1>
        <p className="text-sm text-slate-500 mt-0.5">Review and process withdrawal requests</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Pending", count: items.filter(d=>d.status==="pending").length, color: "bg-amber-50 text-amber-700 border-amber-200" },
          { label: "Approved", count: items.filter(d=>d.status==="approved").length, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
          { label: "Rejected", count: items.filter(d=>d.status==="rejected").length, color: "bg-red-50 text-red-700 border-red-200" },
        ].map(s => (
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
                {["User","Amount","Tax","Received","Wallet","Date","Status","Actions"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((w, idx) => (
                <tr key={w.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-semibold text-slate-900">{w.user}</td>
                  <td className="px-4 py-3.5 font-bold text-rose-500">GHS {w.amount}</td>
                  <td className="px-4 py-3.5 text-slate-500">GHS {w.tax}</td>
                  <td className="px-4 py-3.5 font-bold text-emerald-600">GHS {w.received}</td>
                  <td className="px-4 py-3.5 text-slate-600">{w.wallet}</td>
                  <td className="px-4 py-3.5 text-slate-500">{w.date}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${w.status === "approved" ? "bg-emerald-100 text-emerald-700" : w.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"}`}>
                      {w.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    {w.status === "pending" && (
                      <div className="flex gap-2">
                        <button onClick={() => update(w.id, "approved")} className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-200"><Check size={14}/></button>
                        <button onClick={() => update(w.id, "rejected")} className="w-8 h-8 bg-red-100 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-200"><X size={14}/></button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
