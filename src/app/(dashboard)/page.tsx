"use client";

import { Wallet, ArrowDownToLine, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white h-full min-h-[calc(100vh-108px)]">
      {/* Top Banner */}
      <div className="w-full relative aspect-[16/9] bg-slate-200 shrink-0">
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
          <h2 className="text-white font-bold text-lg">Panasonic massage chair</h2>
          <p className="text-white/80 text-xs mt-1">The most highly developed deep-tissue massage chair in the world.</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1596766487920-56d11a2fdfcf?q=80&w=800&auto=format&fit=crop" 
          alt="Massage Chair" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around bg-[#0047B3] py-4 shrink-0">
        <Link href="/mine" className="flex flex-col items-center gap-1.5 flex-1">
          <Wallet size={24} className="text-white" />
          <span className="text-white text-xs font-medium">Payment</span>
        </Link>
        <Link href="/mine" className="flex flex-col items-center gap-1.5 flex-1">
          <ArrowDownToLine size={24} className="text-white" />
          <span className="text-white text-xs font-medium">Withdraw money</span>
        </Link>
        <Link href="/mine" className="flex flex-col items-center gap-1.5 flex-1">
          <HeadphonesIcon size={24} className="text-white" />
          <span className="text-white text-xs font-medium">Customer service</span>
        </Link>
      </div>

      {/* Promotional Graphic */}
      <div className="w-full relative flex-1 bg-slate-200 mt-0 min-h-[150px]">
        <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
          <div className="bg-white/95 px-6 py-3 shadow-lg flex items-center justify-center text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-wider">
              Panasonic GREEN IMP<span className="text-emerald-600">ACT</span>
            </h2>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop" 
          alt="Green Impact" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
