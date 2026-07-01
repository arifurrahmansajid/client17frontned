"use client";
import { Users, Copy, Share2, Award } from "lucide-react";
import Link from "next/link";
export default function TeamPage() {
  const invitationCode = "HSB3X8";
  const invitationLink = `https://pasonc.com/reg.html?v=${invitationCode}`;

  return (
    <div className="flex flex-col bg-[#F5F3FF] min-h-full pb-6">
      
      {/* Top Header */}
      <div className="bg-gradient-to-br from-indigo-700 via-violet-600 to-purple-700 pt-6 pb-24 px-5 rounded-b-[40px] relative shrink-0 shadow-lg shadow-violet-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),transparent_60%)] rounded-b-[40px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h1 className="text-white font-black text-2xl relative z-10 tracking-tight drop-shadow-sm">Invite Friends</h1>
        <p className="text-violet-200 text-xs mt-2 relative z-10 max-w-[250px] leading-relaxed font-medium">Build your team and earn up to 20% passive commission on every successful referral.</p>
        
        {/* Background Graphic */}
        <div className="absolute right-2 top-8 opacity-20 pointer-events-none">
           <Users size={100} className="text-white" />
        </div>
      </div>

      <div className="-mt-16 px-4 space-y-4 relative z-20">
        
        {/* Invitation Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-violet-200/30 border border-violet-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner border border-violet-200">
            <Share2 size={24} />
          </div>
          <h2 className="text-slate-800 font-black text-lg tracking-tight">Your Invitation Code</h2>
          
          <div className="mt-4 bg-violet-50 border-2 border-dashed border-violet-300 w-full rounded-2xl py-3 px-4 flex items-center justify-between">
            <span className="text-2xl font-black text-indigo-700 tracking-[0.2em]">{invitationCode}</span>
            <button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-violet-500/20 active:scale-95 transition-transform">
              COPY
            </button>
          </div>

          <div className="mt-5 w-full">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 text-left px-1">Invitation Link</p>
            <div className="flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-2xl p-2 pl-4">
              <div className="truncate text-xs text-slate-700 font-medium flex-1 text-left">
                {invitationLink}
              </div>
              <button className="w-10 h-10 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-700 flex items-center justify-center shrink-0 active:scale-95 transition-colors">
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-[#8B5CF6] rounded-2xl p-4 shadow-sm text-white">
            <p className="text-white font-bold text-[11px] uppercase tracking-wide mb-1">Valid Team</p>
            <p className="text-white font-black text-2xl leading-none">0 <span className="text-xs font-bold text-white/90 tracking-normal ml-0.5">users</span></p>
          </div>
          <div className="flex-1 bg-[#10B981] rounded-2xl p-4 shadow-sm text-white">
            <p className="text-white font-bold text-[11px] uppercase tracking-wide mb-1">Team Income</p>
            <p className="text-white font-black text-2xl leading-none"><span className="text-sm font-bold text-white/90 tracking-normal mr-1">GHS</span>0</p>
          </div>
        </div>

        {/* Commission Rates & Team Details */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden mt-6 mb-8">
          <div className="divide-y divide-slate-200">
            {[
              { level: 1, rate: 20, img: "https://i.ibb.co.com/CqbjZKz/1-2.png" },
              { level: 2, rate: 3, img: "https://i.ibb.co.com/4ZgZf5gW/2.png" },
              { level: 3, rate: 2, img: "https://i.ibb.co.com/4ZgZf5gW/2.png" }
            ].map((tier, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 gap-2 bg-white">
                <div className="w-[60px] h-[60px] shrink-0 rounded overflow-hidden">
                  <img src={tier.img} alt={`Product`} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex justify-between items-center text-center px-1">
                  <div className="flex flex-col items-center flex-1">
                    <span className="font-medium text-slate-700 text-sm mb-0.5">{tier.rate}%</span>
                    <span className="text-[11px] text-slate-500">Commission rate</span>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1">
                    <span className="font-medium text-slate-700 text-sm mb-0.5">0</span>
                    <span className="text-[11px] text-slate-500">Valid users</span>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1">
                    <span className="font-medium text-slate-700 text-sm mb-0.5">0</span>
                    <span className="text-[11px] text-slate-500">Income</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/team-details" className="block w-full">
            <div className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold tracking-wide hover:opacity-95 transition-opacity">
              Team details &gt;&gt;
            </div>
          </Link>
        </div>

        {/* Rules Text */}
        <div className="bg-white rounded-xl shadow-md border border-violet-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex justify-between px-6 py-2.5 text-[13px] font-semibold">
            <span>Valid users</span>
            <span>Total income</span>
          </div>
          <div className="p-4 text-[13px] text-slate-600 space-y-3.5 leading-relaxed bg-white">
            <p>When friends you invite sign up and invest, you instantly receive 20% cashback.</p>
            <p>You receive 3% cashback when members of your Level 2 team invest.</p>
            <p>You receive 2% cashback when members of your Level 3 team invest.</p>
            <p>Cash rewards will be deposited into your account once your team members have invested. You can withdraw them immediately.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
