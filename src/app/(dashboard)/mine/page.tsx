"use client";

import { Wallet, ArrowUpFromLine, ChevronRight, Monitor, CreditCard, HeadphonesIcon, Info, BookOpen } from "lucide-react";
import Link from "next/link";

export default function MinePage() {
  const phoneNumber = "+233 542114696";

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full">
      {/* Top Section */}
      <div className="bg-[#0047B3] px-4 pt-2 pb-4">
        
        {/* User Card */}
        <div className="bg-gradient-to-b from-black to-[#001a4d] rounded-2xl p-4 shadow-lg flex flex-col items-center">
          <p className="text-white font-bold text-sm leading-none">{phoneNumber}</p>
          <p className="text-white/60 text-[10px] mt-1 mb-6">Phone number</p>

          <div className="flex w-full justify-around">
            <Link href="/mine" className="flex flex-col items-center gap-2 text-white">
              <Wallet size={24} />
              <span className="text-xs font-medium">Payment</span>
            </Link>
            <Link href="/mine" className="flex flex-col items-center gap-2 text-white">
              <ArrowUpFromLine size={24} />
              <span className="text-xs font-medium">Withdrawal</span>
            </Link>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="flex gap-2 mt-2">
          <div className="flex-1 bg-gradient-to-b from-black to-[#001a4d] rounded-md p-3 shadow-sm border-t border-[#003b99]">
            <p className="text-white font-bold text-sm leading-none">GHS 30</p>
            <p className="text-white/70 text-[10px] mt-1.5">Account Balance</p>
          </div>
          <div className="flex-1 bg-gradient-to-b from-black to-[#001a4d] rounded-md p-3 shadow-sm border-t border-[#003b99]">
            <p className="text-white font-bold text-sm leading-none">GHS 0</p>
            <p className="text-white/70 text-[10px] mt-1.5">Total income</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="bg-[#f5f5f5] p-3">
        <div className="bg-[#f0f0f0] rounded-xl overflow-hidden divide-y divide-slate-200/60 shadow-sm border border-slate-200/50">
          
          <Link href="/products" className="flex items-center px-4 py-4 hover:bg-white transition-colors">
            <Monitor size={18} className="text-amber-500 mr-4 shrink-0" />
            <span className="text-xs font-medium text-slate-800 flex-1">My device</span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>

          <Link href="/wallet-accounts" className="flex items-center px-4 py-4 hover:bg-white transition-colors">
            <CreditCard size={18} className="text-[#0047B3] mr-4 shrink-0" />
            <span className="text-xs font-medium text-slate-800 flex-1">Wallet Account Management</span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>

          <Link href="/support" className="flex items-center px-4 py-4 hover:bg-white transition-colors">
            <HeadphonesIcon size={18} className="text-[#0047B3] mr-4 shrink-0" />
            <span className="text-xs font-medium text-slate-800 flex-1">Customer Service</span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>

          <Link href="/about" className="flex items-center px-4 py-4 hover:bg-white transition-colors">
            <Info size={18} className="text-[#0047B3] mr-4 shrink-0" />
            <span className="text-xs font-medium text-slate-800 flex-1">About Us</span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>

          <Link href="/rules" className="flex items-center px-4 py-4 hover:bg-white transition-colors">
            <BookOpen size={18} className="text-[#0047B3] mr-4 shrink-0" />
            <span className="text-xs font-medium text-slate-800 flex-1">Platform rules</span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>

        </div>
      </div>
    </div>
  );
}
