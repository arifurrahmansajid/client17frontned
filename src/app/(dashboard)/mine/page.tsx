"use client";

import { TopHeader } from "@/components/layout/top-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Wallet, 
  ArrowDownToLine, 
  ArrowUpRight, 
  Settings, 
  HeadphonesIcon, 
  LogOut, 
  CreditCard, 
  Box, 
  Info,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MinePage() {
  const menuItems = [
    { icon: Wallet, label: "Wallet Accounts", href: "/wallet-accounts" },
    { icon: Box, label: "My Products", href: "/my-products" },
    { icon: CreditCard, label: "Transaction History", href: "/transactions" },
    { icon: HeadphonesIcon, label: "Customer Service", href: "/support" },
    { icon: Info, label: "About Platform", href: "/about" },
    { icon: ShieldCheck, label: "Platform Rules", href: "/rules" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <TopHeader title="My Profile" showBack={false} />
      
      <div className="pt-14">
        {/* Profile Header */}
        <div className="bg-primary px-4 pt-6 pb-12 rounded-b-[32px] text-primary-foreground shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white/20 shadow-md">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">+233 55 *** 1234</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm">VIP 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Balance Card - overlaps the header */}
        <div className="px-4 -mt-8 relative z-10">
          <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-[20px] overflow-hidden">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-sm font-medium text-slate-500 mb-1">Total Balance</p>
                <h3 className="text-3xl font-bold text-slate-900">GHS 4,520.00</h3>
              </div>
              
              <div className="flex justify-between items-center mb-6 px-4">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Today's Income</p>
                  <p className="font-bold text-emerald-600">GHS +82.00</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Total Income</p>
                  <p className="font-bold text-slate-700">GHS 2,140.00</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/deposit">
                  <Button className="w-full h-11 rounded-xl shadow-sm bg-primary hover:bg-primary/90 text-sm font-semibold">
                    <ArrowDownToLine className="mr-2" size={16} />
                    Deposit
                  </Button>
                </Link>
                <Link href="/withdraw">
                  <Button variant="outline" className="w-full h-11 rounded-xl text-primary border-primary/20 hover:bg-primary/5 text-sm font-semibold">
                    <ArrowUpRight className="mr-2" size={16} />
                    Withdraw
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="px-4 mt-6 space-y-3">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={item.href}>
                <Card className="border-0 shadow-sm shadow-slate-200/30 rounded-[16px] hover:bg-slate-50 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                        <item.icon size={20} />
                      </div>
                      <span className="font-medium text-slate-700">{item.label}</span>
                    </div>
                    <ChevronRight size={20} className="text-slate-400" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.05 }}
            className="pt-2"
          >
            <Button variant="ghost" className="w-full h-14 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive font-semibold">
              <LogOut className="mr-2" size={18} />
              Sign Out
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
