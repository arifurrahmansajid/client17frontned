"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Check, Landmark, Smartphone, Bitcoin } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const WALLET_TYPES = [
  { id: "bank", icon: Landmark, label: "Bank Account", color: "text-primary bg-blue-50" },
  { id: "momo", icon: Smartphone, label: "Mobile Money", color: "text-emerald-600 bg-emerald-50" },
  { id: "crypto", icon: Bitcoin, label: "Crypto Wallet", color: "text-amber-600 bg-amber-50" },
];

const INITIAL_WALLETS = [
  { id: 1, type: "momo", label: "MTN Mobile Money", number: "+233 55 *** 1234", default: true },
  { id: 2, type: "bank", label: "GCB Bank", number: "1234 *** 7890", default: false },
];

export default function WalletAccountsPage() {
  const router = useRouter();
  const [wallets, setWallets] = useState(INITIAL_WALLETS);
  const [showAdd, setShowAdd] = useState(false);
  const [walletType, setWalletType] = useState("");
  const [walletNumber, setWalletNumber] = useState("");
  const [walletLabel, setWalletLabel] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setWallets([...wallets, { id: Date.now(), type: walletType, label: walletLabel, number: walletNumber, default: false }]);
    setWalletNumber("");
    setWalletLabel("");
    setShowAdd(false);
  };

  const handleDelete = (id: number) => {
    setWallets(wallets.filter((w) => w.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setWallets(wallets.map((w) => ({ ...w, default: w.id === id })));
  };

  const getWalletIcon = (type: string) => {
    const t = WALLET_TYPES.find((t) => t.id === type);
    return t ? { Icon: t.icon, color: t.color } : { Icon: Landmark, color: "text-slate-600 bg-slate-100" };
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
              <ArrowLeft size={20} className="text-slate-700" />
            </button>
            <h1 className="text-lg font-bold text-slate-900">Wallet Accounts</h1>
          </div>
          <button onClick={() => setShowAdd(true)} className="flex items-center gap-1.5 bg-primary text-white text-sm font-bold px-3.5 py-2 rounded-xl hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            Add
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-3">
        {wallets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Landmark size={28} className="text-slate-400" />
            </div>
            <p className="font-semibold text-slate-600">No wallets added</p>
            <p className="text-sm text-slate-400 mt-1">Add a wallet to start withdrawing</p>
          </div>
        )}

        {wallets.map((wallet, idx) => {
          const { Icon, color } = getWalletIcon(wallet.type);
          return (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-slate-900 text-sm">{wallet.label}</p>
                    {wallet.default && <span className="text-[10px] font-bold bg-primary text-white px-1.5 py-0.5 rounded-md">Default</span>}
                  </div>
                  <p className="text-xs text-slate-500">{wallet.number}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                {!wallet.default && (
                  <button onClick={() => handleSetDefault(wallet.id)} className="flex-1 py-2 border border-primary text-primary text-xs font-bold rounded-xl flex items-center justify-center gap-1 hover:bg-blue-50 transition-colors">
                    <Check size={13} /> Set Default
                  </button>
                )}
                <button onClick={() => handleDelete(wallet.id)} className="flex-1 py-2 border border-red-200 text-red-500 text-xs font-bold rounded-xl flex items-center justify-center gap-1 hover:bg-red-50 transition-colors">
                  <Trash2 size={13} /> Remove
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add Wallet Modal */}
      <AnimatePresence>
        {showAdd && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setShowAdd(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[400px] bg-white rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-5">Add Wallet</h3>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="text-[13px] font-medium text-black mb-1.5 block">*Select the operator channel</label>
                  <div className="relative">
                    <select
                      value={walletType}
                      onChange={(e) => setWalletType(e.target.value)}
                      required
                      className="w-full h-10 px-3 bg-[#D9D9D9] border-none rounded text-[13px] text-slate-600 focus:outline-none appearance-none"
                    >
                      <option value="" disabled>Please select</option>
                      {WALLET_TYPES.map(t => (
                        <option key={t.id} value={t.id}>{t.label}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-medium text-black mb-1.5 block">*Name</label>
                  <input 
                    value={walletLabel} 
                    onChange={(e) => setWalletLabel(e.target.value)} 
                    placeholder="Moses Muomaalah" 
                    required
                    className="w-full h-10 px-3 bg-[#D9D9D9] border-none rounded text-[13px] text-slate-800 placeholder:text-slate-500 focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="text-[13px] font-medium text-black mb-1.5 block">*Wallet account</label>
                  <input 
                    value={walletNumber} 
                    onChange={(e) => setWalletNumber(e.target.value)} 
                    placeholder="Please enter the wallet account" 
                    required
                    className="w-full h-10 px-3 bg-[#D9D9D9] border-none rounded text-[13px] text-slate-800 placeholder:text-slate-500 focus:outline-none" 
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowAdd(false)} className="flex-1 h-11 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl text-sm">Cancel</button>
                  <button type="submit" className="flex-1 h-11 bg-primary text-white font-bold rounded-xl shadow-md shadow-primary/20 text-sm">Submit</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
