"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Store auth token so dashboard auth guard passes
      localStorage.setItem("vip_token", "demo_token_user");
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/25">
            <TrendingUp size={30} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">VIP Invest</h1>
          <p className="text-sm text-slate-500 mt-1">Your premium investment platform</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back</h2>
          <p className="text-sm text-slate-500 mb-6">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Phone Number</label>
              <div className="flex">
                <div className="flex items-center bg-slate-100 border border-r-0 border-slate-200 rounded-l-2xl px-3 shrink-0">
                  <span className="text-sm font-bold text-slate-600">+233</span>
                </div>
                <input type="tel" placeholder="55 123 4567" required
                  className="flex-1 h-12 px-4 bg-slate-50 border border-slate-200 rounded-r-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:z-10" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link href="/forgot-password" className="text-xs font-semibold text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <input type={showPw ? "text" : "password"} placeholder="Enter your password" required
                  className="w-full h-12 pl-4 pr-12 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full h-12 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/25 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link href="/register" className="font-bold text-primary hover:underline">Register now</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
