"use client";

import { Home, ShoppingBag, Users, User, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Team", href: "/team", icon: Users },
  { name: "Mine", href: "/mine", icon: User },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[430px] relative bg-background min-h-screen">
          {children}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <nav className="w-full max-w-[430px] bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-8px_30px_-10px_rgba(0,87,217,0.08)]">
          <div className="flex justify-around items-center h-[60px] px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center justify-center flex-1 h-full gap-1 relative group"
                >
                  <div className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-200",
                    isActive ? "bg-primary/10 scale-105" : "group-hover:bg-slate-100"
                  )}>
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-all duration-200",
                        isActive ? "text-primary stroke-[2.5]" : "text-slate-400 group-hover:text-slate-600"
                      )}
                    />
                  </div>
                  <span className={cn(
                    "text-[10px] font-semibold tracking-wide transition-colors duration-200 leading-none",
                    isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                  )}>
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
