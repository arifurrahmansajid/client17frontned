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
      <div className="w-full relative aspect-[21/9] bg-slate-800 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1596766487920-56d11a2fdfcf?q=80&w=800&auto=format&fit=crop" 
          alt="Devices" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 py-3 bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-center">
            <p className="text-white font-bold text-lg leading-none">0</p>
            <p className="text-white/80 text-[10px] mt-1">My device</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg leading-none">GHS 0</p>
            <p className="text-white/80 text-[10px] mt-1">My income</p>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="p-4 space-y-4">
        {loading ? (
          <div className="text-center text-slate-500 py-10 text-sm">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-slate-500 py-10 text-sm">No products found</div>
        ) : (
          products.map((prod) => (
            <div key={prod._id || prod.id} className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
              {/* Image */}
              <div className="w-28 shrink-0 flex items-center justify-center">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Details */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-black text-lg">{prod.name}</h3>
                  {prod.active ? (
                    <button className="bg-[#0047b3] text-white text-sm font-medium px-5 py-1 rounded-full">
                      Buy
                    </button>
                  ) : (
                    <button className="bg-slate-500 text-white text-sm font-medium px-5 py-1 rounded-full whitespace-nowrap">
                      Coming soon
                    </button>
                  )}
                </div>
                
                <div className="space-y-1 mb-3">
                  <p className="text-xs text-slate-800">Price: <span className="text-[#0047b3] font-bold">GHS {prod.price.toLocaleString()}</span></p>
                  <p className="text-xs text-slate-800">Ownership period: <span className="text-[#0047b3] font-bold">{prod.days}</span> days</p>
                  <p className="text-xs text-slate-800">Daily income: <span className="text-[#0047b3] font-bold">GHS {prod.daily.toLocaleString()}</span></p>
                  <p className="text-xs text-slate-800">Total income: <span className="text-[#0047b3] font-bold">GHS {prod.total.toLocaleString()}</span></p>
                </div>

                <p className="text-xs text-[#0047b3] leading-relaxed pr-2">
                  You can generate income after owning a massage chair for 24 hours
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
