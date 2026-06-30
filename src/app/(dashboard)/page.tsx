"use client";

import { Wallet, ArrowDownToLine, HeadphonesIcon, Megaphone, ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop",
    title: "Premium Panasonic Series",
    desc: "Invest in the world's leading massage chair technology and start earning."
  },
  {
    image: "https://images.unsplash.com/photo-1596766487920-56d11a2fdfcf?q=80&w=800&auto=format&fit=crop",
    title: "Daily Passive Income",
    desc: "Watch your wealth grow with automated daily returns on your VIP device."
  },
  {
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop",
    title: "Global Investment Platform",
    desc: "Join thousands of smart investors securing their financial future."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#f5f5f5] pb-6">
      
      {/* Top Banner Slider */}
      <div className="w-full relative aspect-[16/9] bg-slate-200 shadow-md overflow-hidden">
        {SLIDES.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Reduced Opacity Lighter Gradient Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20">
              <h2 className="text-white font-black text-xl leading-tight tracking-wide drop-shadow-md">{slide.title}</h2>
              <p className="text-white/95 text-xs mt-2 max-w-[85%] leading-relaxed drop-shadow-md font-medium">{slide.desc}</p>
            </div>
            {/* Original Image without mix-blend mode obscuring it */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-3 right-4 flex gap-1.5 z-30">
          {SLIDES.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-4 bg-white shadow-sm" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around bg-[#0047B3] py-5 px-2 shadow-lg z-20 relative">
        <Link href="/mine" className="flex flex-col items-center gap-2 flex-1 transition-transform active:scale-95">
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
            <Wallet size={20} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold tracking-wide">Payment</span>
        </Link>
        <Link href="/mine" className="flex flex-col items-center gap-2 flex-1 relative transition-transform active:scale-95">
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center relative backdrop-blur-sm">
            <ArrowDownToLine size={20} className="text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0047B3]"></span>
          </div>
          <span className="text-white text-xs font-semibold tracking-wide">Withdraw</span>
        </Link>
        <Link href="/support" className="flex flex-col items-center gap-2 flex-1 transition-transform active:scale-95">
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
            <HeadphonesIcon size={20} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold tracking-wide">Service</span>
        </Link>
      </div>

      {/* Announcement Bar */}
      <div className="bg-white px-4 py-3.5 flex items-center gap-3 mt-4 mx-3 rounded-2xl shadow-sm border border-slate-100">
        <Megaphone size={18} className="text-[#0047B3] shrink-0 animate-pulse" />
        <div className="overflow-hidden">
          <p className="text-xs text-slate-700 font-medium leading-relaxed truncate">
            Welcome to the new VIP Platform! Generate daily income effortlessly.
          </p>
        </div>
      </div>

      {/* Recent Payouts Section (New Section) */}
      <div className="mt-5 mx-3 bg-gradient-to-r from-blue-50 to-[#f5f5f5] rounded-2xl p-4 border border-blue-100/50 shadow-sm relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#0047b3]/5 rounded-full blur-xl"></div>
        <div className="flex items-center gap-2 mb-3 relative z-10">
          <TrendingUp size={16} className="text-[#0047B3]" />
          <h3 className="font-bold text-slate-800 text-xs tracking-wide">Live VIP Withdrawals</h3>
        </div>
        <div className="flex flex-col gap-2 relative z-10">
          {[
            { phone: "***5421", amount: "GHS 1,450", time: "Just now" },
            { phone: "***8902", amount: "GHS 320", time: "2 mins ago" },
            { phone: "***1124", amount: "GHS 5,200", time: "5 mins ago" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-white p-2.5 rounded-xl shadow-sm border border-slate-50">
              <span className="text-xs font-bold text-slate-600">{item.phone}</span>
              <span className="text-xs font-black text-emerald-600">{item.amount}</span>
              <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Advantages */}
      <div className="mt-5 px-3">
        <div className="flex items-center justify-between px-1 mb-3">
          <h3 className="font-black text-slate-800 text-sm tracking-wide">Platform Advantages</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center text-center gap-2.5 border border-slate-100">
             <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
               <ShieldCheck size={24} className="text-emerald-600" />
             </div>
             <div>
               <p className="font-bold text-slate-800 text-xs">Secure</p>
               <p className="text-[10px] text-slate-500 leading-tight mt-1">Bank-grade security.</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center text-center gap-2.5 border border-slate-100">
             <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
               <Zap size={24} className="text-amber-500" />
             </div>
             <div>
               <p className="font-bold text-slate-800 text-xs">Fast Returns</p>
               <p className="text-[10px] text-slate-500 leading-tight mt-1">Daily automated income.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Trust Badges (New Section) */}
      <div className="mt-5 px-4 py-4 bg-white mx-3 rounded-2xl border border-slate-100 flex items-center justify-around shadow-sm">
        <div className="flex flex-col items-center gap-1">
           <span className="text-lg font-black text-[#0047B3]">50K+</span>
           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Active Users</span>
        </div>
        <div className="w-px h-8 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-1">
           <span className="text-lg font-black text-[#0047B3]">24/7</span>
           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Support</span>
        </div>
        <div className="w-px h-8 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-1">
           <span className="text-lg font-black text-[#0047B3]">100%</span>
           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Guaranteed</span>
        </div>
      </div>

      {/* Promotional Graphic */}
      <div className="w-full relative aspect-[16/9] bg-slate-200 mt-5 rounded-3xl overflow-hidden mx-3 shadow-md" style={{ width: 'calc(100% - 24px)' }}>
        <div className="absolute inset-0 flex items-center justify-center z-10 p-6 bg-black/15">
          <div className="bg-white/95 px-6 py-3.5 shadow-xl rounded-xl flex items-center justify-center text-center backdrop-blur-md border border-white/50">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 tracking-wider">
              Panasonic GREEN IMP<span className="text-emerald-600">ACT</span>
            </h2>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop" 
          alt="Green Impact" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Call to Action Link */}
      <Link href="/products" className="mx-3 mt-5 mb-2 bg-gradient-to-r from-[#0047B3] to-blue-500 rounded-2xl p-5 flex items-center justify-between text-white shadow-lg shadow-blue-500/30 transition-transform active:scale-95">
        <div>
          <h3 className="font-bold text-sm tracking-wide">Start Earning Today</h3>
          <p className="text-[11px] text-white/80 mt-1 font-medium">Browse our VIP massage chair products</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <ArrowRight size={18} />
        </div>
      </Link>

    </div>
  );
}
