"use client";

import { Home, ShoppingBag, Users, User, Bell, TrendingUp, Menu, X, ArrowDownToLine, ArrowUpFromLine, HeadphonesIcon, ChevronDown, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home",       href: "/",           icon: Home },
  { name: "Products",   href: "/products",   icon: ShoppingBag },
  { name: "Team",       href: "/team",       icon: Users },
  { name: "Deposit",    href: "/deposit",    icon: ArrowDownToLine },
  { name: "Withdraw",   href: "/withdraw",   icon: ArrowUpFromLine },
  { name: "My Account", href: "/mine",       icon: User },
  { name: "Support",    href: "/support",    icon: HeadphonesIcon },
];

// Bottom nav items (mobile only — kept short)
const BOTTOM_NAV = [
  { name: "Home",     href: "/",         icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Team",     href: "/team",     icon: Users },
  { name: "Account",  href: "/mine",     icon: User },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Auth guard — redirect to login if not authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── TOP NAVBAR (desktop & tablet) ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/30">
                <TrendingUp size={18} className="text-white" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">VIP <span className="text-primary">Invest</span></span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 flex-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all",
                      isActive
                        ? "bg-primary text-white shadow-sm shadow-primary/30"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Bell + User */}
            <div className="ml-auto flex items-center gap-3">
              {/* Notification Bell */}
              <Link
                href="/notifications"
                className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Bell size={18} className="text-slate-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
              </Link>

              {/* User Menu */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2.5 h-9 px-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                    <User size={13} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">My Account</span>
                  <ChevronDown size={14} className={cn("text-slate-500 transition-transform", userMenuOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden z-50"
                    >
                      <Link href="/mine" onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        <User size={15} className="text-slate-400" /> Profile
                      </Link>
                      <Link href="/wallet-accounts" onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        <Settings size={15} className="text-slate-400" /> Settings
                      </Link>
                      <div className="h-px bg-slate-100 mx-2" />
                      <button onClick={() => { localStorage.removeItem("vip_token"); localStorage.removeItem("token"); localStorage.removeItem("authToken"); setUserMenuOpen(false); router.replace("/login"); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={15} className="text-red-400" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                {mobileMenuOpen ? <X size={18} className="text-slate-700" /> : <Menu size={18} className="text-slate-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                        isActive
                          ? "bg-primary text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      )}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="h-px bg-slate-100 my-2" />
                <button onClick={() => { localStorage.removeItem("vip_token"); localStorage.removeItem("token"); localStorage.removeItem("authToken"); setMobileMenuOpen(false); router.replace("/login"); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all">
                  <LogOut size={18} /> Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-6">
        {children}
      </main>

      {/* ── BOTTOM NAV (mobile only) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-8px_30px_-10px_rgba(0,87,217,0.08)]">
        <div className="flex justify-around items-center h-[60px] px-2">
          {BOTTOM_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 h-full gap-1 relative group"
              >
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-200",
                  isActive ? "bg-primary/10 scale-105" : "group-hover:bg-slate-100"
                )}>
                  <Icon className={cn(
                    "w-5 h-5 transition-all duration-200",
                    isActive ? "text-primary stroke-[2.5]" : "text-slate-400 group-hover:text-slate-600"
                  )} />
                </div>
                <span className={cn(
                  "text-[10px] font-semibold tracking-wide transition-colors duration-200 leading-none",
                  isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                )}>
                  {item.name}
                </span>
                {isActive && (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

    </div>
  );
}
