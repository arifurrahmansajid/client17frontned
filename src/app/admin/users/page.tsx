"use client";

import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, XCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const USERS = [
  { id: 1, phone: "+233 55 123 4567", joined: "2026-06-30", plan: "VIP 2", balance: 4520, referrals: 3, status: "active" },
  { id: 2, phone: "+233 50 987 6543", joined: "2026-06-29", plan: "VIP 4", balance: 12840, referrals: 8, status: "active" },
  { id: 3, phone: "+233 24 456 7890", joined: "2026-06-29", plan: "VIP 1", balance: 640, referrals: 0, status: "pending" },
  { id: 4, phone: "+233 27 321 9876", joined: "2026-06-28", plan: "VIP 3", balance: 7200, referrals: 5, status: "active" },
  { id: 5, phone: "+233 20 654 3210", joined: "2026-06-27", plan: "VIP 2", balance: 2860, referrals: 2, status: "suspended" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const filtered = USERS.filter(u => u.phone.includes(search) || u.plan.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Users</h1>
          <p className="text-sm text-slate-500 mt-0.5">{USERS.length} total members</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by phone or plan..."
          className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Balance</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Referrals</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((user, idx) => (
                <motion.tr key={user.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                  className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5">
                    <p className="font-semibold text-slate-900">{user.phone}</p>
                    <p className="text-xs text-slate-500">Joined {user.joined}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-lg">{user.plan}</span>
                  </td>
                  <td className="px-4 py-3.5 font-bold text-slate-900">GHS {user.balance.toLocaleString()}</td>
                  <td className="px-4 py-3.5 text-slate-700 font-medium">{user.referrals}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${
                      user.status === "active" ? "bg-emerald-100 text-emerald-700" :
                      user.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"
                    }`}>
                      {user.status === "active" ? <CheckCircle size={11} /> : user.status === "pending" ? <Clock size={11} /> : <XCircle size={11} />}
                      {user.status}
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
