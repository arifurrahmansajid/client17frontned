"use client";
import { HeadphonesIcon } from "lucide-react";

export default function AdminTicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Support Tickets</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage and respond to user inquiries</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <HeadphonesIcon size={32} className="text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Inbox Zero!</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">You have no pending support tickets to review at this time.</p>
      </div>
    </div>
  );
}
