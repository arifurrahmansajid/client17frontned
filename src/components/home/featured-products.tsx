"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "VIP 1",
    price: 80,
    dailyIncome: 20,
    totalIncome: 14400,
    days: 720,
    image: "https://images.unsplash.com/photo-1544253303-3112a445d47e?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 2,
    name: "VIP 2",
    price: 160,
    dailyIncome: 41,
    totalIncome: 29520,
    days: 720,
    image: "https://images.unsplash.com/photo-1581594236357-1906780c102b?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

export function FeaturedProducts() {
  return (
    <div className="px-4 space-y-4">
      {products.map((product) => (
        <Card key={product.id} className="border-0 shadow-md shadow-slate-200/50 rounded-[20px] overflow-hidden">
          <div className="flex">
            {/* Image Section */}
            <div className="w-2/5 relative h-36 bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                <Zap size={10} />
                {product.name}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-3/5 p-3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 leading-tight">Investment Plan {product.id}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Price:</span>
                    <span className="font-bold text-primary">GHS {product.price}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Daily:</span>
                    <span className="font-bold text-emerald-600">GHS {product.dailyIncome}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Total:</span>
                    <span className="font-bold text-slate-700">GHS {product.totalIncome}</span>
                  </div>
                </div>
              </div>
              
              <Link href={`/products/${product.id}`} className="mt-2">
                <Button size="sm" className="w-full h-8 rounded-lg text-xs shadow-sm">
                  Invest Now
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
