"use client";

import { ArrowLeft, UploadCloud, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function DepositProblemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    userWallet: "",
    platformWallet: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      alert("Deposit problem report submitted successfully.");
      router.back();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">

      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Payment Time */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                <span className="text-red-500">*</span> Payment time
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input 
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full h-12 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                    placeholder="Select date"
                  />
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                <div className="relative">
                  <input 
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full h-12 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                    placeholder="Select time"
                  />
                  <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Your wallet */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                <span className="text-red-500">*</span> Your wallet for transferring funds
              </label>
              <input 
                type="text"
                required
                value={formData.userWallet}
                onChange={(e) => setFormData({...formData, userWallet: e.target.value})}
                placeholder="Please enter your wallet account"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Platform's wallet */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                <span className="text-red-500">*</span> Platform's receiving wallet account
              </label>
              <input 
                type="text"
                required
                value={formData.platformWallet}
                onChange={(e) => setFormData({...formData, platformWallet: e.target.value})}
                placeholder="Please enter platform wallet account"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Deposit amount */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                <span className="text-red-500">*</span> Deposit amount
              </label>
              <input 
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="Please enter the deposit amount"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Screenshot Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                <span className="text-red-500">*</span> Transaction SMS screenshot
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden group">
                <input type="file" required accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UploadCloud size={28} className="text-slate-700" />
                </div>
                <p className="text-xs text-slate-500 font-medium">Tap to upload screenshot</p>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full h-12 mt-4 bg-[#0d47a1] text-white font-bold rounded-xl shadow-md hover:bg-blue-800 active:scale-[0.98] transition-all"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
