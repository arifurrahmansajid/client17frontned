"use client";

import { useState, useEffect } from "react";
import { ChevronRight, TrendingUp, Zap, Users, ArrowDownToLine, ArrowUpFromLine, HeadphonesIcon, Megaphone, Package, Activity, DollarSign, BarChart2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { VIP_PRODUCTS } from "@/lib/data";

const SLIDES = [
  {
    id: 1,
    title: "Start Earning Today",
    subtitle: "Purchase a VIP plan and earn daily passive income",
    cta: "Explore Plans",
    href: "/products",
    bg: "from-[#0057D9] to-[#2563EB]",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Invite & Earn More",
    subtitle: "Earn up to 20% commission from your referrals",
    cta: "Invite Friends",
    href: "/team",
    bg: "from-[#7C3AED] to-[#5B21B6]",
    icon: Users,
  },
  {
    id: 3,
    title: "Fast Withdrawals",
    subtitle: "Withdraw your earnings instantly, 3 times per day",
    cta: "Withdraw Now",
    href: "/withdraw",
    bg: "from-[#059669] to-[#047857]",
    icon: Zap,
  },
];

const ANNOUNCEMENTS = [
  { id: 1, text: "🎉 New VIP 6 plan launched! Earn GHS 704 daily" },
  { id: 2, text: "📢 Platform maintenance scheduled for July 5th, 2026" },
  { id: 3, text: "🔥 Referral bonus increased to 20% for July!" },
];

const STATS = [
  { label: "Wallet Balance",  value: "GHS 4,520.00", sub: "+GHS 82 today",   icon: DollarSign,  color: "bg-blue-500",    ring: "ring-blue-100"  },
  { label: "Today's Income",  value: "GHS 82.00",    sub: "From 2 plans",    icon: Activity,    color: "bg-emerald-500", ring: "ring-emerald-100" },
  { label: "Total Income",    value: "GHS 2,140",    sub: "All time earned", icon: TrendingUp,  color: "bg-violet-500",  ring: "ring-violet-100" },
  { label: "Active Plans",    value: "2",            sub: "Running now",     icon: BarChart2,   color: "bg-amber-500",   ring: "ring-amber-100"  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [announceIdx, setAnnounceIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setAnnounceIdx((p) => (p + 1) % ANNOUNCEMENTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-6">

      {/* ── Hero Slider ── */}
      <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/70">
        <AnimatePresence mode="wait">
          {SLIDES.map((slide, i) =>
            i === currentSlide ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${slide.bg} p-6 flex flex-col justify-between`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{slide.title}</h2>
                    <p className="text-white/75 text-sm md:text-base mt-1.5 font-medium max-w-md">{slide.subtitle}</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 ml-4">
                    <slide.icon size={32} className="text-white" />
                  </div>
                </div>
                <Link href={slide.href}>
                  <div className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-2xl px-5 py-2.5 w-fit">
                    <span className="text-white font-semibold text-sm">{slide.cta}</span>
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </Link>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        {/* Dots */}
        <div className="absolute bottom-4 right-5 flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 p-5"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.color} ring-4 ${stat.ring} flex items-center justify-center mb-3`}>
              <stat.icon size={18} className="text-white" />
            </div>
            <p className="text-xs font-medium text-slate-500 mb-0.5">{stat.label}</p>
            <p className="text-xl font-bold text-slate-900 leading-tight">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Quick Actions + Announcement ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {[
              { icon: ArrowDownToLine, label: "Deposit",    href: "/deposit",         color: "bg-blue-50 text-primary",    ring: "ring-blue-100"   },
              { icon: ArrowUpFromLine, label: "Withdraw",   href: "/withdraw",        color: "bg-emerald-50 text-emerald-600", ring: "ring-emerald-100" },
              { icon: Users,          label: "My Team",    href: "/team",            color: "bg-violet-50 text-violet-600",   ring: "ring-violet-100" },
              { icon: HeadphonesIcon, label: "Support",    href: "/support",         color: "bg-rose-50 text-rose-600",       ring: "ring-rose-100"   },
            ].map((a) => (
              <Link key={a.label} href={a.href}>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 flex flex-col items-center gap-2.5 hover:shadow-md hover:border-slate-200 transition-all group">
                  <div className={`w-12 h-12 rounded-2xl ${a.color} ring-2 ${a.ring} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <a.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{a.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Announcement */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
              <Megaphone size={15} className="text-white" />
            </div>
            <span className="text-sm font-bold text-amber-900">Announcements</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={announceIdx}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-amber-800 leading-relaxed"
              >
                {ANNOUNCEMENTS[announceIdx].text}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex gap-1.5 mt-4">
            {ANNOUNCEMENTS.map((_, i) => (
              <button key={i} onClick={() => setAnnounceIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === announceIdx ? "w-5 bg-amber-500" : "w-1.5 bg-amber-300"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Latest Plans ── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-slate-900">Latest Investment Plans</h2>
          <Link href="/products" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {VIP_PRODUCTS.slice(0, 6).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 p-4 flex items-center gap-4 hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                <Package size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-slate-900 text-sm">{product.name}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${product.badgeColor}`}>{product.badge}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>GHS <strong className="text-slate-700">{product.price}</strong></span>
                  <span className="text-emerald-600 font-semibold">+GHS {product.dailyIncome}/day</span>
                </div>
              </div>
              <Link href={`/products/${product.id}`}>
                <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-primary/20 shrink-0">
                  Buy
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
