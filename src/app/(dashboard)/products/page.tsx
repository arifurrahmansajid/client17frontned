"use client";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProducts(data.products);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full pb-6">
      {/* Top Banner */}
      <div className="w-full relative aspect-[21/9] bg-slate-900 shrink-0 shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop" 
          alt="Devices" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="text-center backdrop-blur-sm bg-black/20 px-6 py-2 rounded-2xl border border-white/10">
            <p className="text-white font-black text-xl leading-none drop-shadow-md">0</p>
            <p className="text-white/90 text-[11px] mt-1.5 font-medium tracking-wide">My device</p>
          </div>
          <div className="text-center backdrop-blur-sm bg-black/20 px-6 py-2 rounded-2xl border border-white/10">
            <p className="text-white font-black text-xl leading-none drop-shadow-md">GHS 0</p>
            <p className="text-white/90 text-[11px] mt-1.5 font-medium tracking-wide">My income</p>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="px-4 pt-5 space-y-4">
        {loading ? (
          <div className="text-center text-slate-500 py-10 text-sm animate-pulse">Loading premium products...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-slate-500 py-10 text-sm">No products found</div>
        ) : (
          products.map((prod) => (
            <div key={prod._id || prod.id} className="bg-white rounded-3xl p-4 flex gap-4 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
              
              {/* Image */}
              <div className="w-28 shrink-0 flex items-center justify-center relative z-10 bg-slate-50/50 rounded-2xl p-2 border border-slate-100">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full object-contain mix-blend-multiply drop-shadow-sm transition-transform group-hover:scale-105"
                />
              </div>
              
              {/* Details */}
              <div className="flex-1 flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-slate-900 text-lg tracking-tight">{prod.name}</h3>
                  {prod.active ? (
                    <button className="bg-gradient-to-r from-[#0047b3] to-blue-600 shadow-md shadow-blue-500/20 text-white text-xs font-bold px-5 py-2 rounded-full transition-transform active:scale-95">
                      Buy Now
                    </button>
                  ) : (
                    <button className="bg-slate-200 text-slate-500 text-xs font-bold px-5 py-2 rounded-full whitespace-nowrap">
                      Coming soon
                    </button>
                  )}
                </div>
                
                <div className="space-y-1 mb-3 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                  <p className="text-[11px] text-slate-600 font-medium flex justify-between">Price: <span className="text-[#0047b3] font-black">GHS {prod.price.toLocaleString()}</span></p>
                  <p className="text-[11px] text-slate-600 font-medium flex justify-between">Ownership: <span className="text-[#0047b3] font-black">{prod.days} days</span></p>
                  <p className="text-[11px] text-slate-600 font-medium flex justify-between">Daily income: <span className="text-emerald-600 font-black">GHS {prod.daily.toLocaleString()}</span></p>
                  <p className="text-[11px] text-slate-600 font-medium flex justify-between">Total income: <span className="text-emerald-600 font-black">GHS {prod.total.toLocaleString()}</span></p>
                </div>

                <p className="text-[10px] text-[#0047b3] leading-relaxed pr-2 font-medium bg-blue-50 px-2.5 py-1.5 rounded-lg inline-block w-fit">
                  Income generates after 24h
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
