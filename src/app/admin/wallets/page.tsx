"use client";
import { Wallet, Settings2 } from "lucide-react";

export default function AdminWalletsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Wallet Settings</h1>
          <p className="text-sm text-slate-500 mt-0.5">Configure platform deposit and withdrawal parameters</p>
        </div>
        <button className="h-10 bg-slate-900 text-white font-bold px-4 rounded-xl shadow-sm hover:bg-slate-800 transition-all flex items-center gap-2">
          <Settings2 size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Wallet size={20} className="text-emerald-600" />
            </div>
            <h2 className="font-bold text-slate-900">Deposit Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Minimum Deposit (GHS)</label>
              <input type="number" defaultValue="50" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Deposit Instructions</label>
              <textarea defaultValue="Please transfer exact amount to our MOMO number." className="w-full h-24 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <Wallet size={20} className="text-amber-600" />
            </div>
            <h2 className="font-bold text-slate-900">Withdrawal Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Minimum Withdrawal (GHS)</label>
              <input type="number" defaultValue="100" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Withdrawal Fee (%)</label>
              <input type="number" defaultValue="5" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
