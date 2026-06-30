"use client";
import { Users, Link as LinkIcon, Gift, Copy, ChevronRight } from "lucide-react";

export default function TeamPage() {
  const invitationCode = "HSB3X8";
  const invitationLink = `https://pasonc.com/reg.html?v=${invitationCode}`;

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full pb-6">
      {/* Top Banner with Avatars */}
      <div className="relative bg-slate-900 pt-8 pb-12 flex flex-col items-center shadow-lg rounded-b-[40px] overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0047B3]/90 to-[#002a6b] z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

        <div className="absolute top-5 left-5 z-10 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-inner">
          <p className="text-[9px] text-white/70 font-bold tracking-widest uppercase">Invitation Code</p>
          <p className="text-white font-black text-lg tracking-wider drop-shadow-sm">{invitationCode}</p>
        </div>
        
        {/* Avatars */}
        <div className="relative w-40 h-40 mt-10 mb-2 z-10">
          {/* Main User */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full border-4 border-[#002a6b] shadow-xl flex items-center justify-center overflow-hidden">
             <div className="w-8 h-8 rounded-full bg-white relative top-2" />
          </div>
          {/* Left Sub-User */}
          <div className="absolute bottom-4 left-0 w-14 h-14 bg-emerald-500 rounded-full border-4 border-[#002a6b] shadow-xl flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-white relative top-1.5" />
          </div>
          {/* Right Sub-User */}
          <div className="absolute bottom-4 right-0 w-14 h-14 bg-amber-500 rounded-full border-4 border-[#002a6b] shadow-xl flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-white relative top-1.5" />
          </div>
        </div>

        {/* Link Area */}
        <div className="w-11/12 max-w-sm bg-black/30 backdrop-blur-md mt-6 p-5 rounded-3xl border border-white/10 text-center z-10 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <LinkIcon size={14} className="text-white/60" />
            <p className="text-white/70 text-[11px] uppercase tracking-wider font-bold">Your Invitation Link</p>
          </div>
          <p className="text-blue-300 text-[11px] font-medium break-all px-3 bg-black/20 py-2.5 rounded-xl border border-white/5">{invitationLink}</p>
          
          <button className="w-full bg-gradient-to-r from-[#f97316] to-orange-500 text-white font-black py-3.5 rounded-2xl text-sm mt-4 shadow-lg shadow-orange-500/30 transition-transform active:scale-95 flex items-center justify-center gap-2">
            <Copy size={16} /> Copy Link
          </button>
        </div>
      </div>

      {/* Commission Rates */}
      <div className="px-3 mt-6">
        <h3 className="font-black text-slate-800 text-sm tracking-wide px-2 mb-3">Commission Rates</h3>
        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 divide-y divide-slate-100 overflow-hidden">
          {[
            { level: 1, rate: 20, color: "text-blue-600", bg: "bg-blue-50" },
            { level: 2, rate: 3, color: "text-emerald-600", bg: "bg-emerald-50" },
            { level: 3, rate: 2, color: "text-amber-600", bg: "bg-amber-50" }
          ].map((tier) => (
            <div key={tier.level} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className={`w-14 h-14 ${tier.bg} shrink-0 flex flex-col items-center justify-center rounded-2xl`}>
                <span className="text-[9px] text-slate-500 font-bold uppercase leading-none tracking-wider">LVL</span>
                <span className={`text-xl font-black ${tier.color} leading-none mt-1`}>{tier.level}</span>
              </div>
              <div className="flex-1 flex justify-between items-center text-center px-1">
                <div>
                  <p className="text-lg font-black text-slate-800 leading-none">{tier.rate}%</p>
                  <p className="text-[10px] text-slate-500 mt-2 font-medium">Rate</p>
                </div>
                <div className="w-px h-8 bg-slate-100"></div>
                <div>
                  <p className="text-lg font-black text-slate-800 leading-none">0</p>
                  <p className="text-[10px] text-slate-500 mt-2 font-medium">Users</p>
                </div>
                <div className="w-px h-8 bg-slate-100"></div>
                <div>
                  <p className="text-lg font-black text-emerald-600 leading-none">0</p>
                  <p className="text-[10px] text-slate-500 mt-2 font-medium">Income</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="px-3 mt-6">
        <div className="bg-gradient-to-br from-[#0047B3] to-blue-700 rounded-[24px] p-5 shadow-lg shadow-blue-600/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="font-bold text-sm tracking-wide drop-shadow-sm">Team Details</h3>
            <ChevronRight size={18} className="text-white/60" />
          </div>
          
          <div className="flex justify-around bg-black/20 rounded-2xl py-4 relative z-10 backdrop-blur-sm border border-white/10 shadow-inner">
            <div className="text-center">
              <p className="text-white font-black text-2xl leading-none drop-shadow-sm">0</p>
              <p className="text-white/70 text-[10px] mt-2 font-bold uppercase tracking-widest">Valid Users</p>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center">
              <p className="text-emerald-400 font-black text-2xl leading-none drop-shadow-sm">GHS 0</p>
              <p className="text-white/70 text-[10px] mt-2 font-bold uppercase tracking-widest">Total Income</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <div className="mx-3 mt-6 mb-2 p-5 bg-white rounded-[24px] shadow-sm border border-slate-100 flex flex-col gap-4">
        <div className="flex gap-3 items-start">
          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><Gift size={12} className="text-blue-600"/></div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">When friends you invite sign up and invest, you instantly receive <span className="font-bold text-[#0047B3]">20% cashback</span>.</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><Gift size={12} className="text-emerald-600"/></div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">You receive <span className="font-bold text-emerald-600">3% cashback</span> when members of your Level 2 team invest.</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5"><Gift size={12} className="text-amber-600"/></div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">You receive <span className="font-bold text-amber-600">2% cashback</span> when members of your Level 3 team invest.</p>
        </div>
      </div>
    </div>
  );
}
