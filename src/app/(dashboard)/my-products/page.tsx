"use client";

import { ArrowLeft, Package, Clock, CheckCircle2, TrendingUp, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VIP_PRODUCTS } from "@/lib/data";

const MY_PRODUCTS = [
  { id: 1, productId: 2, purchaseDate: "2026-06-15", daysRemaining: 705, status: "running", earnedTotal: 656 },
  { id: 2, productId: 1, purchaseDate: "2026-05-01", daysRemaining: 330, status: "running", earnedTotal: 7800 },
];

export default function MyProductsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">My Products</h1>
          <span className="ml-auto text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{MY_PRODUCTS.length} Active</span>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {MY_PRODUCTS.map((item, idx) => {
          const product = VIP_PRODUCTS.find((p) => p.id === item.productId)!;
          const progress = Math.round(((720 - item.daysRemaining) / 720) * 100);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${product.color} p-4 flex items-center gap-3`}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Package size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-black text-white">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    {item.status === "running" ? (
                      <span className="text-[11px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Running
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">Completed</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-50 rounded-2xl p-2.5 text-center">
                    <TrendingUp size={16} className="text-emerald-600 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-500">Daily</p>
                    <p className="text-sm font-black text-emerald-600">GHS {product.dailyIncome}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-2.5 text-center">
                    <Clock size={16} className="text-primary mx-auto mb-1" />
                    <p className="text-[10px] text-slate-500">Remaining</p>
                    <p className="text-sm font-black text-primary">{item.daysRemaining}d</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-2.5 text-center">
                    <CheckCircle2 size={16} className="text-violet-600 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-500">Earned</p>
                    <p className="text-sm font-black text-violet-600">GHS {item.earnedTotal.toLocaleString()}</p>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 + 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r ${product.color}`}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={12} />
                  <span>Purchased: {item.purchaseDate}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
