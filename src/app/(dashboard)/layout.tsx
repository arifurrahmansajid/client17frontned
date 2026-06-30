"use client";

import { Home, ShoppingCart, Users, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

const BOTTOM_NAV = [
  { name: "Home", href: "/", icon: Home },
  { name: "Product", href: "/products", icon: ShoppingCart },
  { name: "Team", href: "/team", icon: Users },
  { name: "Mine", href: "/mine", icon: User },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Auth guard — redirect to login if not authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#f5f5f5] flex justify-center">
      <div className="w-full max-w-md bg-white h-full relative shadow-2xl flex flex-col">
        
        {/* Top Header */}
        <header className="sticky top-0 z-50 h-12 bg-[#0047B3] flex items-center justify-center shrink-0">
          <h1 className="text-white font-bold text-lg tracking-wide">Panasonic</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pb-[60px] bg-[#f5f5f5]">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#0047B3] flex items-center justify-around z-50">
          {BOTTOM_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 w-full h-full text-white/70 hover:text-white transition-colors"
              >
                <Icon size={22} className={cn(isActive ? "text-white" : "")} />
                <span className={cn("text-[11px] font-medium", isActive ? "text-white font-bold" : "")}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

