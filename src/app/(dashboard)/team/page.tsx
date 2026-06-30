"use client";
import { Users, Copy, Share2, Award } from "lucide-react";

export default function TeamPage() {
  const invitationCode = "HSB3X8";
  const invitationLink = `https://pasonc.com/reg.html?v=${invitationCode}`;

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full pb-6">
      
      {/* Top Header */}
      <div className="bg-gradient-to-b from-[#0047B3] to-blue-700 pt-6 pb-24 px-5 rounded-b-[40px] relative shrink-0 shadow-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h1 className="text-white font-black text-2xl relative z-10 tracking-tight drop-shadow-sm">Invite Friends</h1>
        <p className="text-blue-100 text-xs mt-2 relative z-10 max-w-[250px] leading-relaxed font-medium">Build your team and earn up to 20% passive commission on every successful referral.</p>
        
        {/* Background Graphic */}
        <div className="absolute right-2 top-8 opacity-20 pointer-events-none">
           <Users size={100} className="text-white" />
        </div>
      </div>

      <div className="-mt-16 px-4 space-y-4 relative z-20">
        
        {/* Invitation Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-blue-50 text-[#0047b3] rounded-2xl flex items-center justify-center mb-3 shadow-inner">
            <Share2 size={24} />
          </div>
          <h2 className="text-slate-800 font-black text-lg tracking-tight">Your Invitation Code</h2>
          
          <div className="mt-4 bg-slate-50 border-2 border-dashed border-blue-200 w-full rounded-2xl py-3 px-4 flex items-center justify-between">
            <span className="text-2xl font-black text-[#0047B3] tracking-[0.2em]">{invitationCode}</span>
            <button className="bg-[#0047B3] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-transform">
              COPY
            </button>
          </div>

          <div className="mt-5 w-full">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 text-left px-1">Invitation Link</p>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-2xl p-2 pl-4">
              <div className="truncate text-xs text-slate-700 font-medium flex-1 text-left">
                {invitationLink}
              </div>
              <button className="w-10 h-10 rounded-xl bg-blue-100 hover:bg-blue-200 text-[#0047B3] flex items-center justify-center shrink-0 active:scale-95 transition-colors">
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-gradient-to-br from-[#0047B3] to-blue-600 rounded-3xl p-5 shadow-lg shadow-blue-500/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Valid Team</p>
            <p className="text-white font-black text-3xl leading-none relative z-10 tracking-tight">0 <span className="text-xs font-bold text-white/70 tracking-normal">users</span></p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-5 shadow-lg shadow-emerald-500/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Team Income</p>
            <p className="text-white font-black text-3xl leading-none relative z-10 tracking-tight"><span className="text-base font-bold text-white/80 tracking-normal mr-1">GHS</span>0</p>
          </div>
        </div>

        {/* Commission Rates */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
              <Award size={16} className="text-amber-500" />
            </div>
            <h3 className="font-black text-slate-800 text-sm tracking-wide">Commission Rules</h3>
          </div>
          
          <div className="space-y-3">
            {[
              { level: 1, rate: 20, color: "text-[#0047B3]", bg: "bg-blue-50", text: "Direct referrals (Level 1)" },
              { level: 2, rate: 3, color: "text-emerald-600", bg: "bg-emerald-50", text: "Secondary referrals (Level 2)" },
              { level: 3, rate: 2, color: "text-amber-600", bg: "bg-amber-50", text: "Tertiary referrals (Level 3)" }
            ].map((tier) => (
              <div key={tier.level} className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100/50">
                <div className={`w-14 h-14 ${tier.bg} shrink-0 flex flex-col items-center justify-center rounded-xl shadow-inner`}>
                  <span className={`text-xl font-black ${tier.color} leading-none`}>L{tier.level}</span>
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-slate-600 font-bold mb-1">{tier.text}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-black text-slate-800 leading-none">{tier.rate}%</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Cashback</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
