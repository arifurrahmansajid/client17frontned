"use client";

import { useState } from "react";
import { ArrowLeft, Search, Filter, ArrowDownToLine, ArrowUpFromLine, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TRANSACTION_HISTORY } from "@/lib/data";

const FILTERS = ["All", "Deposit", "Withdraw", "Purchase", "Income", "Referral"];

const TYPE_CONFIG: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  deposit: { icon: ArrowDownToLine, color: "text-emerald-600", bg: "bg-emerald-50", label: "Deposit" },
  withdraw: { icon: ArrowUpFromLine, color: "text-red-500", bg: "bg-red-50", label: "Withdrawal" },
  purchase: { icon: ShoppingBag, color: "text-primary", bg: "bg-blue-50", label: "Purchase" },
  income: { icon: TrendingUp, color: "text-violet-600", bg: "bg-violet-50", label: "Income" },
  referral: { icon: Users, color: "text-amber-600", bg: "bg-amber-50", label: "Referral" },
};

export default function TransactionsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = TRANSACTION_HISTORY.filter((t) => {
    if (filter !== "All" && !t.type.includes(filter.toLowerCase())) return false;
    if (search && !t.label.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Transactions</h1>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search transactions..."
            className="w-full h-12 pl-12 pr-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${filter === f ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="space-y-2.5">
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 font-medium">No transactions found</p>
            </div>
          )}
          {filtered.map((t, idx) => {
            const config = TYPE_CONFIG[t.type];
            const Icon = config.icon;
            const isCredit = t.amount > 0;
            return (
              <motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${config.bg}`}>
                  <Icon size={22} className={config.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">{t.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-black text-base ${isCredit ? "text-emerald-600" : "text-red-500"}`}>
                    {isCredit ? "+" : ""}GHS {Math.abs(t.amount)}
                  </p>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-semibold">Done</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
