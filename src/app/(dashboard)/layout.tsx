"use client";

import { Home, ShoppingCart, Users, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: ShoppingCart },
    { name: "Team", href: "/team", icon: Users },
    { name: "Mine", href: "/mine", icon: User },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0 md:flex-row bg-slate-50">
      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto md:max-w-full relative shadow-sm md:shadow-none min-h-screen bg-white md:bg-transparent">
        {children}
      </main>

      {/* Bottom Navigation for Mobile / Max-w-md constraint */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] md:hidden">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center w-full h-full space-y-1 relative"
              >
                {isActive && (
                  <span className="absolute top-0 w-8 h-1 bg-primary rounded-b-md" />
                )}
                <Icon
                  className={cn(
                    "w-6 h-6 transition-colors duration-200",
                    isActive ? "text-primary" : "text-slate-400"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors duration-200",
                    isActive ? "text-primary font-semibold" : "text-slate-500"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
