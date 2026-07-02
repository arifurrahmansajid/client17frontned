"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight, Info, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { WITHDRAW_RULES } from "@/lib/data";
import { API_URL } from "@/lib/api";
import { toast } from "sonner";

export default function WithdrawPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [minWithdrawal, setMinWithdrawal] = useState(30);
  const [taxRate, setTaxRate] = useState(0.15);

  const fetchProfileAndSettings = async () => {
    try {
      const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
      if (!token) return;

      // 1. Fetch Profile Balance
      const res = await fetch(`${API_URL}/api/user/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        setBalance(data.balance || 0);
      }

      // 2. Fetch Platform Settings
      const settingsRes = await fetch(`${API_URL}/api/user/settings`);
      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        if (settingsData.success && settingsData.settings) {
          setMinWithdrawal(settingsData.settings.minWithdrawal || 30);
          setTaxRate((settingsData.settings.withdrawFee || 15) / 100);
        }
      }
    } catch (err) {
      console.error("Failed to fetch profile or settings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileAndSettings();
  }, []);

  const numericAmount = parseFloat(amount) || 0;
  const tax = numericAmount * taxRate;
  const received = numericAmount - tax;

  const handleWithdraw = async () => {
    if (numericAmount < minWithdrawal) {
      toast.error(`Minimum withdrawal is GHS ${minWithdrawal}`);
      return;
    }

    if (numericAmount > balance) {
      toast.error("Insufficient balance");
      return;
    }

    try {
      const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const res = await fetch(`${API_URL}/api/user/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ amount: numericAmount })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Withdrawal request submitted successfully!");
        setAmount("");
        fetchProfileAndSettings();
      } else {
        toast.error(data.message || "Failed to submit withdrawal");
      }
    } catch (err) {
      console.error("Withdrawal error:", err);
      toast.error("Network error while withdrawing");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Withdraw</h1>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Balance Banner */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-5 shadow-lg shadow-primary/20">
          <p className="text-white/70 text-xs font-medium mb-1">Available Balance</p>
          <p className="text-3xl font-black text-white">GHS {loading ? "..." : balance.toLocaleString()}</p>
          <div className="mt-3 flex items-center gap-2">
            <Info size={14} className="text-white/60" />
            <p className="text-white/70 text-xs">3 withdrawals remaining today</p>
          </div>
        </div>

        {/* Wallet Selection */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3">Withdrawal Wallet</h3>
          <button
            onClick={() => router.push("/wallet-accounts")}
            className="w-full flex items-center gap-4 p-3.5 border-2 border-dashed border-slate-200 rounded-2xl hover:border-primary hover:bg-blue-50/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <ChevronRight size={20} className="text-slate-500" />
            </div>
            <span className="text-sm font-medium text-slate-500 flex-1 text-left">
              {selectedWallet ? selectedWallet : "Select withdrawal wallet account"}
            </span>
            <ChevronRight size={18} className="text-slate-400" />
          </button>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3">Withdrawal Amount</h3>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">GHS</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min={minWithdrawal}
              max={balance}
              className="w-full h-14 pl-16 pr-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Quick amounts */}
          <div className="flex gap-2 mt-3">
            {[100, 200, 500, 1000].map((v) => (
              <button key={v} onClick={() => setAmount(String(v))}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all ${parseFloat(amount) === v ? "bg-primary text-white border-primary" : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        {numericAmount > 0 && (
          <div className="bg-slate-900 rounded-3xl p-5 shadow-lg space-y-3">
            <h3 className="font-bold text-white text-sm">Summary</h3>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Withdrawal Amount</span>
              <span className="text-white font-semibold">GHS {numericAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Tax ({(taxRate * 100).toFixed(0)}%)</span>
              <span className="text-red-400 font-semibold">- GHS {tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-slate-700 pt-3 flex justify-between">
              <span className="text-slate-300 font-medium">You Receive</span>
              <span className="text-emerald-400 font-black text-lg">GHS {received.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Warning */}
        {numericAmount > 0 && numericAmount < minWithdrawal && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-3 flex items-center gap-2">
            <AlertCircle size={16} className="text-red-500 shrink-0" />
            <p className="text-sm text-red-600 font-medium">Minimum withdrawal is GHS {minWithdrawal}</p>
          </div>
        )}

        <button
          onClick={handleWithdraw}
          disabled={numericAmount < minWithdrawal || !numericAmount || numericAmount > balance}
          className="w-full h-14 bg-primary text-white font-bold rounded-2xl text-base shadow-lg shadow-primary/25 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Withdraw Immediately
        </button>

        {/* Rules */}
        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info size={18} className="text-primary" />
            Withdrawal Rules
          </h3>
          <div className="space-y-3">
            {WITHDRAW_RULES.map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
