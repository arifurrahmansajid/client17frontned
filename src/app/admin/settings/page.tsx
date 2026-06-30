"use client";
import { Settings, Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">General Settings</h1>
          <p className="text-sm text-slate-500 mt-0.5">Platform configuration and branding</p>
        </div>
        <button className="h-10 bg-primary text-white font-bold px-4 rounded-xl shadow-sm hover:bg-blue-700 transition-all flex items-center gap-2">
          <Save size={16} /> Save Config
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 max-w-2xl">
        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Platform Name</label>
            <input type="text" defaultValue="VIP Invest" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Customer Support Number</label>
            <input type="text" defaultValue="+233 55 123 4567" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Platform Currency</label>
            <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="GHS">GHS - Ghanaian Cedi</option>
              <option value="USD">USD - US Dollar</option>
              <option value="NGN">NGN - Nigerian Naira</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
