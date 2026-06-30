"use client";

import {
  Wallet, ArrowUpFromLine, ArrowDownToLine, Package, HeadphonesIcon, Info, Settings, LogOut,
  ChevronRight, User, Shield, Bell, CreditCard, History
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MENU_ITEMS = [
  { icon: CreditCard, label: "Wallet Accounts", href: "/wallet-accounts", color: "bg-blue-50 text-primary" },
  { icon: Package, label: "My Products", href: "/my-products", color: "bg-indigo-50 text-indigo-600" },
  { icon: History, label: "Transaction History", href: "/transactions", color: "bg-violet-50 text-violet-600" },
  { icon: Bell, label: "Notifications", href: "/notifications", color: "bg-amber-50 text-amber-600" },
  { icon: HeadphonesIcon, label: "Customer Service", href: "/support", color: "bg-emerald-50 text-emerald-600" },
  { icon: Info, label: "About Platform", href: "/about", color: "bg-slate-100 text-slate-600" },
  { icon: Shield, label: "Platform Rules", href: "/rules", color: "bg-rose-50 text-rose-600" },
  { icon: Settings, label: "Settings", href: "/settings", color: "bg-slate-100 text-slate-600" },
];

export default function MinePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#0057D9] to-[#1D4ED8] px-4 pt-12 pb-20 relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-18 h-18 relative">
            <div className="w-[72px] h-[72px] rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white">+233 55 *** 1234</h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-[11px] font-bold text-white/90 bg-white/20 px-2.5 py-1 rounded-full">VIP 2 Member</span>
              <span className="text-[11px] text-white/60">ID: 58291</span>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Balance</p>
            <p className="text-4xl font-black text-slate-900 mt-1">GHS 4,520.00</p>

            <div className="flex items-center justify-around mt-5 pt-4 border-t border-slate-100">
              <div className="text-center">
                <p className="text-[11px] text-slate-500 mb-0.5">Today</p>
                <p className="text-base font-bold text-emerald-600">+GHS 82</p>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="text-center">
                <p className="text-[11px] text-slate-500 mb-0.5">Total</p>
                <p className="text-base font-bold text-primary">GHS 2,140</p>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="text-center">
                <p className="text-[11px] text-slate-500 mb-0.5">Active</p>
                <p className="text-base font-bold text-slate-900">2 Plans</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-slate-100">
            <Link href="/deposit" className="flex items-center justify-center gap-2 py-4 hover:bg-blue-50 transition-colors border-r border-slate-100 group">
              <ArrowDownToLine size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="font-bold text-primary text-sm">Deposit</span>
            </Link>
            <Link href="/withdraw" className="flex items-center justify-center gap-2 py-4 hover:bg-emerald-50 transition-colors group">
              <ArrowUpFromLine size={18} className="text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-emerald-600 text-sm">Withdraw</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 mt-5 space-y-2">
        {MENU_ITEMS.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04 }}
          >
            <Link href={item.href}>
              <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-all group active:scale-[0.99]">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform`}>
                  <item.icon size={20} />
                </div>
                <span className="flex-1 font-semibold text-slate-700 text-sm">{item.label}</span>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:bg-red-50 hover:border-red-100 transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-105 transition-transform">
              <LogOut size={20} />
            </div>
            <span className="flex-1 font-semibold text-red-500 text-sm text-left">Sign Out</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
