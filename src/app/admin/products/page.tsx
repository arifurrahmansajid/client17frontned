"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { VIP_PRODUCTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(VIP_PRODUCTS);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">VIP Products</h1>
          <p className="text-sm text-slate-500 mt-0.5">{products.length} investment plans</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-primary/20">
          <Plus size={16} /> Add Plan
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((p, idx) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className={`bg-gradient-to-r ${p.color} p-4 flex items-center justify-between`}>
              <div>
                <span className="text-[10px] font-bold text-white/80 bg-white/20 px-2 py-0.5 rounded-full">{p.badge}</span>
                <h3 className="text-xl font-black text-white mt-1">{p.name}</h3>
              </div>
              <div className="flex gap-1.5">
                <button className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 text-white transition-colors">
                  <Edit2 size={14} />
                </button>
                <button className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center hover:bg-red-500/50 text-white transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-slate-50 rounded-xl p-2.5"><p className="text-[10px] text-slate-500">Price</p><p className="font-black text-primary">GHS {p.price}</p></div>
              <div className="bg-slate-50 rounded-xl p-2.5"><p className="text-[10px] text-slate-500">Days</p><p className="font-black text-slate-900">{p.days}</p></div>
              <div className="bg-emerald-50 rounded-xl p-2.5"><p className="text-[10px] text-emerald-700">Daily</p><p className="font-black text-emerald-600">GHS {p.dailyIncome}</p></div>
              <div className="bg-blue-50 rounded-xl p-2.5"><p className="text-[10px] text-blue-700">Total</p><p className="font-black text-primary">GHS {p.totalIncome.toLocaleString()}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
