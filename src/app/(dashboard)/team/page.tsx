"use client";

import { useState } from "react";
import { Copy, Check, QrCode, Users, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { REFERRAL_LEVELS } from "@/lib/data";

const TEAM_MEMBERS = [
  { id: 1, phone: "+233 55 *** 1234", level: 1, joinDate: "2026-06-10", income: 320 },
  { id: 2, phone: "+233 50 *** 5678", level: 1, joinDate: "2026-06-15", income: 160 },
  { id: 3, phone: "+233 24 *** 9012", level: 2, joinDate: "2026-06-20", income: 24 },
  { id: 4, phone: "+233 27 *** 3456", level: 3, joinDate: "2026-06-25", income: 9 },
];

export default function TeamPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "UJGIDZ";
  const referralLink = `https://vipinvest.app/register?ref=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="px-4 h-14 flex items-center">
          <h1 className="text-lg font-bold text-slate-900">My Team</h1>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Referral Card */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-5 shadow-lg shadow-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Users size={18} className="text-white/80" />
            <p className="text-white/80 text-sm font-medium">Your Referral Link</p>
          </div>
          <div className="bg-white/15 rounded-2xl p-3 mb-4 backdrop-blur-sm">
            <p className="text-white text-xs break-all leading-relaxed font-mono">{referralLink}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 h-11 bg-white text-primary font-bold rounded-2xl text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <button className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-colors">
              <QrCode size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Referral Code */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-slate-500 mb-0.5">Your Referral Code</p>
            <p className="text-xl font-black text-slate-900 tracking-widest">{referralCode}</p>
          </div>
          <button onClick={handleCopy} className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors">
            {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} className="text-slate-600" />}
          </button>
        </div>

        {/* Commission Levels */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3">Referral Commissions</h3>
          <div className="space-y-3">
            {REFERRAL_LEVELS.map((level) => (
              <div key={level.level} className={`flex items-center justify-between p-3 rounded-2xl border ${level.border} ${level.color}`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <span className="text-sm font-black">{level.level}</span>
                  </div>
                  <span className="font-semibold text-sm">Level {level.level} Referrals</span>
                </div>
                <span className="text-xl font-black">{level.commission}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Total Team", value: TEAM_MEMBERS.length, icon: Users, color: "text-primary bg-blue-50" },
            { label: "Valid Members", value: 3, icon: Check, color: "text-emerald-600 bg-emerald-50" },
            { label: "Today's Income", value: "GHS 16", icon: TrendingUp, color: "text-amber-600 bg-amber-50" },
            { label: "Total Income", value: "GHS 513", icon: TrendingUp, color: "text-violet-600 bg-violet-50" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <p className="text-[11px] text-slate-500">{stat.label}</p>
              <p className="text-lg font-black text-slate-900 mt-0.5">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Referral History */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Team Members</h3>
            <span className="text-xs text-slate-500">{TEAM_MEMBERS.length} total</span>
          </div>
          <div className="space-y-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{member.phone[7]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">{member.phone}</p>
                  <p className="text-[11px] text-slate-500">Level {member.level} • Joined {member.joinDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-600">+GHS {member.income}</p>
                  <p className="text-[11px] text-slate-400">earned</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
