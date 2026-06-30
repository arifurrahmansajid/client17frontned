"use client";
import { UserPlus } from "lucide-react";

export default function TeamPage() {
  const invitationCode = "HSB3X8";
  const invitationLink = `https://pasonc.com/reg.html?v=${invitationCode}`;

  return (
    <div className="flex flex-col bg-white min-h-full">
      {/* Top Banner with Avatars */}
      <div className="relative bg-gradient-to-b from-[#0047B3] to-black py-8 flex flex-col items-center">
        <div className="absolute top-4 left-4">
          <p className="text-[10px] text-white/70 leading-tight">Invitation code</p>
          <p className="text-white font-bold text-lg leading-tight">{invitationCode}</p>
        </div>
        
        {/* Avatars */}
        <div className="relative w-40 h-40 mt-4 mb-2">
          {/* Main User */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0088ff] rounded-full border-[3px] border-white z-20 flex items-center justify-center overflow-hidden">
             <div className="w-8 h-8 rounded-full bg-white relative top-2" />
          </div>
          {/* Left Sub-User */}
          <div className="absolute bottom-4 left-0 w-14 h-14 bg-red-500 rounded-full border-[3px] border-white z-10 flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-white relative top-1.5" />
          </div>
          {/* Right Sub-User */}
          <div className="absolute bottom-4 right-0 w-14 h-14 bg-lime-500 rounded-full border-[3px] border-white z-10 flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-white relative top-1.5" />
          </div>
        </div>

        {/* Link Area */}
        <div className="w-full bg-black/40 mt-4 py-2 border-y border-white/10 text-center">
          <p className="text-white/70 text-[10px]">Invitation link</p>
          <p className="text-[#3b82f6] text-xs font-medium mt-0.5 break-all px-4">{invitationLink}</p>
        </div>
        
        <button className="w-full bg-[#f97316] text-white font-bold py-3 text-sm mt-0 shadow-inner hover:bg-[#ea580c]">
          Copy Link
        </button>
      </div>

      {/* Commission Rates */}
      <div className="bg-white px-4 py-2 divide-y divide-slate-100">
        {[
          { level: 1, rate: 20 },
          { level: 2, rate: 3 },
          { level: 3, rate: 2 }
        ].map((tier) => (
          <div key={tier.level} className="py-4 flex items-center">
            <div className="w-12 h-12 bg-slate-50 shrink-0 flex items-center justify-center rounded">
              <img 
                src="https://images.unsplash.com/photo-1596766487920-56d11a2fdfcf?q=80&w=100&auto=format&fit=crop" 
                alt="Chair" 
                className="w-10 h-10 object-contain mix-blend-multiply opacity-70"
              />
            </div>
            <div className="flex-1 flex justify-around text-center">
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">{tier.rate}%</p>
                <p className="text-[10px] text-slate-500 mt-1">Commission rate</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">0</p>
                <p className="text-[10px] text-slate-500 mt-1">Valid users</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">0</p>
                <p className="text-[10px] text-slate-500 mt-1">Income</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Details Header */}
      <div className="bg-gradient-to-b from-[#000] to-[#0047B3] text-center py-2 border-y border-[#003b99]">
        <p className="text-white text-xs font-medium">Team details &gt;&gt;</p>
      </div>

      {/* Team Stats */}
      <div className="bg-[#0047B3] flex justify-around py-4">
        <div className="text-center">
          <p className="text-white font-bold text-sm leading-none">0</p>
          <p className="text-white/80 text-[10px] mt-1">Valid users</p>
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm leading-none">GHS 0</p>
          <p className="text-white/80 text-[10px] mt-1">Total income</p>
        </div>
      </div>

      {/* Info Text */}
      <div className="p-5 space-y-3 bg-white">
        <p className="text-[10px] text-slate-600 leading-relaxed">
          When friends you invite sign up and invest, you instantly receive 20% cashback.
        </p>
        <p className="text-[10px] text-slate-600 leading-relaxed">
          You receive 3% cashback when members of your Level 2 team invest.
        </p>
        <p className="text-[10px] text-slate-600 leading-relaxed">
          You receive 2% cashback when members of your Level 3 team invest.
        </p>
      </div>
    </div>
  );
}
