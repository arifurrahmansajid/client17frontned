"use client";

import { Users, ArrowDownToLine, ArrowUpFromLine, TrendingUp, Package, DollarSign, Activity, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const STATS = [
  { label: "Total Users", value: "1,284", change: "+12%", icon: Users, color: "bg-blue-50 text-primary", trend: "up" },
  { label: "Total Deposits", value: "GHS 284,500", change: "+8%", icon: ArrowDownToLine, color: "bg-emerald-50 text-emerald-600", trend: "up" },
  { label: "Withdrawals", value: "GHS 142,300", change: "+5%", icon: ArrowUpFromLine, color: "bg-rose-50 text-rose-500", trend: "up" },
  { label: "Daily Income", value: "GHS 18,920", change: "+22%", icon: TrendingUp, color: "bg-violet-50 text-violet-600", trend: "up" },
  { label: "Active Plans", value: "2,840", change: "+18%", icon: Package, color: "bg-amber-50 text-amber-600", trend: "up" },
  { label: "Net Revenue", value: "GHS 47,200", change: "+15%", icon: DollarSign, color: "bg-indigo-50 text-indigo-600", trend: "up" },
];

const RECENT_USERS = [
  { id: 1, phone: "+233 55 *** 1234", joined: "2026-06-30", plan: "VIP 2", status: "active" },
  { id: 2, phone: "+233 50 *** 5678", joined: "2026-06-29", plan: "VIP 4", status: "active" },
  { id: 3, phone: "+233 24 *** 9012", joined: "2026-06-29", plan: "VIP 1", status: "pending" },
  { id: 4, phone: "+233 27 *** 3456", joined: "2026-06-28", plan: "VIP 3", status: "active" },
];

const RECENT_TRANSACTIONS = [
  { id: 1, user: "+233 55 *** 1234", type: "deposit", amount: 500, date: "2026-06-30", status: "approved" },
  { id: 2, user: "+233 50 *** 5678", type: "withdraw", amount: 200, date: "2026-06-30", status: "pending" },
  { id: 3, user: "+233 24 *** 9012", type: "deposit", amount: 160, date: "2026-06-29", status: "approved" },
  { id: 4, user: "+233 27 *** 3456", type: "withdraw", amount: 80, date: "2026-06-29", status: "rejected" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Platform analytics and quick stats</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {STATS.map((stat, idx) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}
            className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              <p className="text-xl font-black text-slate-900 mt-0.5">{stat.value}</p>
              <p className="text-xs font-semibold text-emerald-600 mt-0.5">{stat.change} this month</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Users */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Recent Users</h3>
            <Link href="/admin/users" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {RECENT_USERS.map((u) => (
              <div key={u.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{u.phone}</p>
                  <p className="text-xs text-slate-500">{u.plan} · {u.joined}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${u.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                  {u.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Recent Transactions</h3>
            <Link href="/admin/transactions" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {RECENT_TRANSACTIONS.map((t) => (
              <div key={t.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${t.type === "deposit" ? "bg-emerald-100" : "bg-rose-100"}`}>
                  {t.type === "deposit"
                    ? <ArrowDownToLine size={16} className="text-emerald-600" />
                    : <ArrowUpFromLine size={16} className="text-rose-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{t.user}</p>
                  <p className="text-xs text-slate-500 capitalize">{t.type} · {t.date}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-black ${t.type === "deposit" ? "text-emerald-600" : "text-rose-500"}`}>
                    {t.type === "deposit" ? "+" : "-"}GHS {t.amount}
                  </p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${
                    t.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                    t.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                  }`}>{t.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Add Product", href: "/admin/products", color: "bg-blue-50 text-primary border-blue-100" },
            { label: "New Announcement", href: "/admin/announcements", color: "bg-amber-50 text-amber-600 border-amber-100" },
            { label: "Review Deposits", href: "/admin/deposits", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
            { label: "Review Withdrawals", href: "/admin/withdrawals", color: "bg-rose-50 text-rose-500 border-rose-100" },
          ].map((a) => (
            <Link key={a.label} href={a.href}>
              <div className={`border rounded-2xl px-4 py-3.5 text-center font-semibold text-sm hover:shadow-md transition-all ${a.color}`}>
                {a.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
