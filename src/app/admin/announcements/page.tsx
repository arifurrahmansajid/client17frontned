"use client";

import { useState } from "react";
import { Plus, Trash2, Send } from "lucide-react";

const ANNOUNCEMENTS = [
  { id: 1, title: "New VIP 6 Plan Launched!", message: "Earn GHS 704 daily with our new premium plan.", date: "2026-06-30", published: true },
  { id: 2, title: "Referral Bonus Increased", message: "Level 1 commission raised to 20% for July 2026!", date: "2026-06-28", published: true },
  { id: 3, title: "Maintenance Scheduled", message: "Platform maintenance July 5th, 2–4AM UTC.", date: "2026-06-25", published: false },
];

export default function AdminAnnouncementsPage() {
  const [items, setItems] = useState(ANNOUNCEMENTS);
  const [form, setForm] = useState({ title: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    setItems([{ id: Date.now(), ...form, date: new Date().toISOString().slice(0, 10), published: false }, ...items]);
    setForm({ title: "", message: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Announcements</h1>
          <p className="text-sm text-slate-500 mt-0.5">{items.length} total</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-primary/20">
          <Plus size={16} /> New
        </button>
      </div>

      {showForm && (
        <form onSubmit={handlePost} className="bg-white rounded-2xl border border-slate-100 p-5 space-y-3 shadow-sm">
          <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Announcement title" required
            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Message content..." required rows={3}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          <div className="flex gap-2">
            <button type="button" onClick={() => setShowForm(false)} className="flex-1 h-10 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="flex-1 h-10 bg-primary text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2">
              <Send size={14} /> Post
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {items.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900 text-sm">{a.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.published ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                  {a.published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{a.message}</p>
              <p className="text-xs text-slate-400 mt-2">{a.date}</p>
            </div>
            <button onClick={() => setItems(items.filter(x => x.id !== a.id))} className="w-8 h-8 bg-red-50 text-red-400 rounded-xl flex items-center justify-center hover:bg-red-100 shrink-0">
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
