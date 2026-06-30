"use client";

import { Wallet, ArrowUpFromLine, ChevronRight, Monitor, CreditCard, HeadphonesIcon, Info, BookOpen, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MinePage() {
  const phoneNumber = "+233 542114696";
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full pb-6">
      {/* Top Section */}
      <div className="bg-gradient-to-b from-[#0047B3] to-blue-700 px-4 pt-6 pb-24 rounded-b-[40px] relative shadow-md shrink-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h1 className="text-white font-black text-2xl mb-6 relative z-10 drop-shadow-sm tracking-tight">My Profile</h1>
      </div>

      <div className="-mt-20 px-4 space-y-4 relative z-20">
        {/* User Card */}
        <div className="bg-white rounded-[24px] p-5 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#0047B3] to-blue-400 rounded-2xl flex items-center justify-center shadow-inner text-white font-black text-2xl shadow-blue-500/30">
              U
            </div>
            <div>
              <p className="text-slate-900 font-black text-lg tracking-tight">{phoneNumber}</p>
              <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md mt-1 uppercase tracking-wider">VIP Member</span>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <Link href="/deposit" className="flex-1 bg-gradient-to-b from-[#0047B3] to-blue-700 rounded-2xl p-3 flex flex-col items-center justify-center text-white shadow-md shadow-blue-500/20 transition-transform active:scale-95">
              <Wallet size={20} className="mb-2 opacity-90" />
              <span className="text-[11px] font-bold tracking-wide">Deposit</span>
            </Link>
            <Link href="/withdraw" className="flex-1 bg-slate-50 border border-slate-200 hover:border-[#0047B3] hover:bg-blue-50 rounded-2xl p-3 flex flex-col items-center justify-center text-[#0047B3] shadow-sm transition-all active:scale-95">
              <ArrowUpFromLine size={20} className="mb-2" />
              <span className="text-[11px] font-bold tracking-wide">Withdraw</span>
            </Link>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Account Balance</p>
            <p className="text-slate-900 font-black text-2xl leading-none relative z-10 tracking-tight">GHS 30</p>
          </div>
          <div className="flex-1 bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Total Income</p>
            <p className="text-emerald-600 font-black text-2xl leading-none relative z-10 tracking-tight">GHS 0</p>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 mt-2">
          <Link href="/products" className="px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <Monitor size={18} className="text-[#0047B3]" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">My device</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </Link>

          <Link href="/wallet-accounts" className="px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <CreditCard size={18} className="text-[#0047B3]" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Wallet Accounts</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </Link>

          <Link href="/support" className="px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <HeadphonesIcon size={18} className="text-[#0047B3]" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Customer Service</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </Link>

          <div className="px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <Info size={18} className="text-[#0047B3]" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">About Us</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </div>

          <div className="px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <BookOpen size={18} className="text-[#0047B3]" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Platform rules</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </div>
        </div>

        <button onClick={handleLogout} className="w-full mt-5 mb-2 bg-white border-2 border-red-50 text-red-500 font-bold py-4 rounded-[20px] shadow-sm flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-100 transition-colors active:scale-95">
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </div>
  );
}
