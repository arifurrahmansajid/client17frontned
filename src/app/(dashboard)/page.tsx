"use client";

import { useState, useEffect } from "react";
import { Bell, ChevronRight, TrendingUp, Zap, Users, ArrowDownToLine, ArrowUpFromLine, HeadphonesIcon, Megaphone, Package } from "lucide-react";
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
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-14">
          <div>
            <p className="text-xs text-slate-500 leading-none">Welcome back 👋</p>
            <h1 className="text-base font-bold text-slate-900 mt-0.5">VIP Invest</h1>
          </div>
          <Link href="/notifications" className="relative w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </Link>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-5 pb-6">
        {/* Hero Slider */}
        <div className="relative h-44 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/70">
          <AnimatePresence mode="wait">
            {SLIDES.map((slide, i) =>
              i === currentSlide ? (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${slide.bg} p-5 flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white leading-tight">{slide.title}</h2>
                      <p className="text-white/75 text-sm mt-1 font-medium">{slide.subtitle}</p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 ml-4">
                      <slide.icon size={28} className="text-white" />
                    </div>
                  </div>
                  <Link href={slide.href}>
                    <div className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-2xl px-4 py-2 w-fit">
                      <span className="text-white font-semibold text-sm">{slide.cta}</span>
                      <ChevronRight size={16} className="text-white" />
                    </div>
                  </Link>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-3xl shadow-sm shadow-slate-200/50 border border-slate-100 p-5">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Wallet Balance</p>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-3xl font-bold text-slate-900">GHS 4,520.00</span>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
            <div className="flex-1 text-center">
              <p className="text-xs text-slate-500">Today's Income</p>
              <p className="text-base font-bold text-emerald-600 mt-0.5">+GHS 82.00</p>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div className="flex-1 text-center">
              <p className="text-xs text-slate-500">Total Income</p>
              <p className="text-base font-bold text-primary mt-0.5">GHS 2,140</p>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div className="flex-1 text-center">
              <p className="text-xs text-slate-500">Active Plans</p>
              <p className="text-base font-bold text-slate-900 mt-0.5">2</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: ArrowDownToLine, label: "Deposit", href: "/deposit", color: "bg-blue-50 text-primary", ring: "ring-blue-100" },
            { icon: ArrowUpFromLine, label: "Withdraw", href: "/withdraw", color: "bg-emerald-50 text-emerald-600", ring: "ring-emerald-100" },
            { icon: HeadphonesIcon, label: "Support", href: "/support", color: "bg-violet-50 text-violet-600", ring: "ring-violet-100" },
          ].map((a) => (
            <Link key={a.label} href={a.href}>
              <div className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-100 p-4 flex flex-col items-center gap-2.5 hover:shadow-md transition-all group">
                <div className={`w-12 h-12 rounded-2xl ${a.color} ring-2 ${a.ring} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <a.icon size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-700">{a.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Announcement Ticker */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
            <Megaphone size={14} className="text-white" />
          </div>
          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={announceIdx}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-medium text-amber-800 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {ANNOUNCEMENTS[announceIdx].text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Latest Products */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-slate-900">Latest Plans</h2>
            <Link href="/products" className="text-xs font-semibold text-primary flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {VIP_PRODUCTS.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 p-4 flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0`}>
                  <Package size={24} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{product.name}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${product.badgeColor}`}>{product.badge}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>GHS <strong className="text-slate-700">{product.price}</strong></span>
                    <span className="text-emerald-600 font-semibold">+GHS {product.dailyIncome}/day</span>
                  </div>
                </div>
                <Link href={`/products/${product.id}`}>
                  <button className="px-3.5 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-primary/20">
                    Buy
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
