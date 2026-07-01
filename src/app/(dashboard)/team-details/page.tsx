"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TeamDetailsPage() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Level 1(0)" },
    { id: 2, label: "Level 2(0)" },
    { id: 3, label: "Level 3(0)" },
  ];

  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      {/* Tabs */}
      <div className="flex w-full bg-white border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-3 text-[11px] font-semibold text-center transition-colors relative",
              activeTab === tab.id
                ? "text-slate-800"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            <div className="flex flex-col items-center justify-center gap-0.5">
              <span>0</span>
              <span>{tab.label}</span>
            </div>
            
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800" />
            )}
          </button>
        ))}
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 mt-16">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full" />
          <div className="relative z-10 text-gray-200">
            <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" fill="url(#paint0_linear)"/>
              <path d="M60 70H140V150C140 155.523 135.523 160 130 160H70C64.4772 160 60 155.523 60 150V70Z" fill="#F3F4F6"/>
              <path d="M70 50H130V70H70V50Z" fill="#E5E7EB"/>
              <path d="M80 90H120" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M80 110H120" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <path d="M80 130H100" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="120" cy="130" r="16" fill="#D1D5DB"/>
              <rect x="112" y="124" width="4" height="12" rx="1" fill="#F3F4F6"/>
              <rect x="118" y="120" width="4" height="16" rx="1" fill="#F3F4F6"/>
              <rect x="124" y="128" width="4" height="8" rx="1" fill="#F3F4F6"/>
              <defs>
                <linearGradient id="paint0_linear" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9FAFB" stopOpacity="0"/>
                  <stop offset="1" stopColor="#F3F4F6" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p className="text-gray-400 text-xs font-medium mt-2">No more data</p>
      </div>
    </div>
  );
}
