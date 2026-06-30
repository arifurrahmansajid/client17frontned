"use client";

import { useState } from "react";
import { Search, Users, GitBranch, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const REFERRALS = [
  { id: 1, inviter: "+233 55 123 4567", invitee: "+233 50 987 6543", date: "2026-06-30", reward: 50, status: "completed" },
  { id: 2, inviter: "+233 24 456 7890", invitee: "+233 27 321 9876", date: "2026-06-29", reward: 0, status: "pending" },
  { id: 3, inviter: "+233 55 123 4567", invitee: "+233 20 654 3210", date: "2026-06-28", reward: 25, status: "completed" },
];

export default function AdminReferralsPage() {
  const [search, setSearch] = useState("");
  const filtered = REFERRALS.filter(r => r.inviter.includes(search) || r.invitee.includes(search));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Referral System</h1>
          <p className="text-sm text-slate-500 mt-0.5">Track user invitations and commission rewards</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
            <GitBranch size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Total Referrals</p>
            <p className="text-2xl font-black text-slate-900">1,284</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Total Rewards Paid</p>
            <p className="text-2xl font-black text-slate-900">GHS 45,200</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Pending Invites</p>
            <p className="text-2xl font-black text-slate-900">89</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by Inviter or Invitee phone..."
          className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Inviter</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Invitee</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Reward (GHS)</th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((ref, idx) => (
                <motion.tr key={ref.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}
                  className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">{ref.inviter}</td>
                  <td className="px-4 py-3.5 font-medium text-slate-700">{ref.invitee}</td>
                  <td className="px-4 py-3.5 text-slate-500 text-xs font-medium">{ref.date}</td>
                  <td className="px-4 py-3.5 font-black text-slate-900">
                    {ref.reward > 0 ? `+${ref.reward}` : "-"}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                      ref.status === "completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      <span className="capitalize">{ref.status}</span>
                    </span>
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
