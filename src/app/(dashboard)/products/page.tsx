"use client";

import { useState } from "react";
import { Package, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VIP_PRODUCTS } from "@/lib/data";

export default function ProductsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-lg font-bold text-slate-900">VIP Plans</h1>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">{VIP_PRODUCTS.length} Plans</span>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mx-4 mt-4 bg-primary rounded-2xl p-4 flex items-center justify-between text-white shadow-lg shadow-primary/20">
        <div className="text-center">
          <p className="text-xs text-white/70">My Devices</p>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="w-px h-10 bg-white/20" />
        <div className="text-center">
          <p className="text-xs text-white/70">My Income</p>
          <p className="text-xl font-bold">GHS 0</p>
        </div>
        <div className="w-px h-10 bg-white/20" />
        <div className="text-center">
          <p className="text-xs text-white/70">Total Days</p>
          <p className="text-xl font-bold">720</p>
        </div>
      </div>

      <div className="px-4 mt-5 space-y-4">
        {VIP_PRODUCTS.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.35 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${product.color} px-5 py-4 flex items-center justify-between`}>
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white`}>{product.badge}</span>
                <h3 className="text-xl font-black text-white mt-1.5">{product.name}</h3>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                <Package size={32} className="text-white" />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-50 rounded-2xl p-3">
                  <p className="text-[11px] text-slate-500 mb-1">Purchase Price</p>
                  <p className="text-base font-black text-primary">GHS {product.price.toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3">
                  <p className="text-[11px] text-slate-500 mb-1">Ownership Period</p>
                  <p className="text-base font-black text-slate-900">{product.days} Days</p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-3">
                  <p className="text-[11px] text-emerald-700 mb-1">Daily Income</p>
                  <p className="text-base font-black text-emerald-600">GHS {product.dailyIncome}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-3">
                  <p className="text-[11px] text-blue-700 mb-1">Total Income</p>
                  <p className="text-base font-black text-primary">GHS {product.totalIncome.toLocaleString()}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">Income starts generating 24 hours after purchase. Daily income is credited automatically to your wallet.</p>
              <Link href={`/products/${product.id}`}>
                <button className="w-full h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                  Invest Now — GHS {product.price}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
