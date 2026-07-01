"use client";

import { Wallet, ArrowUpFromLine, ChevronRight, Monitor, CreditCard, HeadphonesIcon, Info, BookOpen, LogOut, Camera } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export default function MinePage() {
  const phoneNumber = "+233 542114696";
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
        if (!token) return;

        const res = await fetch("https://client17backend-pkr5.vercel.app/api/user/me", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.avatar) {
            setProfilePic(data.avatar);
            localStorage.setItem("profilePic", data.avatar);
          }
        } else {
          const savedPic = localStorage.getItem("profilePic");
          if (savedPic) setProfilePic(savedPic);
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        const savedPic = localStorage.getItem("profilePic");
        if (savedPic) setProfilePic(savedPic);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size on frontend (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Image file is too large! Please choose an image under 10MB.");
        return;
      }

      const toastId = toast.loading("Updating profile picture...");
      
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        
        // Optimistic update
        setProfilePic(base64String);
        localStorage.setItem("profilePic", base64String);

        // Save to backend
        try {
          const token = localStorage.getItem("authToken") || localStorage.getItem("token") || localStorage.getItem("vip_token");
          if (!token) {
            toast.error("Authentication required", { id: toastId });
            return;
          }

          const res = await fetch("https://client17backend-pkr5.vercel.app/api/user/avatar", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ avatar: base64String })
          });

          if (res.ok) {
            toast.success("Profile picture updated successfully!", { id: toastId });
          } else {
            console.error("Failed to save avatar to backend");
            toast.error("Failed to save image to server.", { id: toastId });
          }
        } catch (err) {
          console.error("Error saving avatar:", err);
          toast.error("Network error while saving image.", { id: toastId });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col bg-[#F5F3FF] min-h-full pb-6">
      {/* Top Section */}
      <div className="bg-gradient-to-br from-indigo-700 via-violet-600 to-purple-700 px-4 pt-6 pb-24 rounded-b-[40px] relative shadow-lg shadow-violet-500/30 shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),transparent_60%)] rounded-b-[40px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h1 className="text-white font-black text-2xl mb-6 relative z-10 drop-shadow-sm tracking-tight">My Profile</h1>
      </div>

      <div className="-mt-20 px-4 space-y-4 relative z-20">
        {/* User Card */}
        <div className="bg-white rounded-[24px] p-5 shadow-xl shadow-violet-200/30 border border-violet-100">
          <div className="flex items-center gap-4 border-b border-violet-50 pb-5">
            
            {/* Avatar Upload */}
            <div 
              className="relative w-14 h-14 bg-gradient-to-tr from-indigo-600 via-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-inner text-white font-black text-2xl shadow-violet-500/30 cursor-pointer group shrink-0"
              onClick={() => fileInputRef.current?.click()}
            >
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              ) : (
                "U"
              )}
              
              {/* Overlay for hover */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={20} className="text-white" />
              </div>
              
              {/* Small badge icon */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-0 transition-transform">
                <div className="w-4 h-4 bg-violet-600 rounded-full flex items-center justify-center">
                  <Camera size={10} className="text-white" />
                </div>
              </div>

              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-slate-900 font-black text-lg tracking-tight truncate">{phoneNumber}</p>
              <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md mt-1 uppercase tracking-wider">VIP Member</span>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <Link href="/deposit" className="flex-1 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 rounded-2xl p-3 flex flex-col items-center justify-center text-white shadow-md shadow-violet-500/25 transition-transform active:scale-95">
              <Wallet size={20} className="mb-2 opacity-90" />
              <span className="text-[11px] font-bold tracking-wide">Deposit</span>
            </Link>
            <Link href="/withdraw" className="flex-1 bg-violet-50 border border-violet-200 hover:border-violet-400 hover:bg-violet-100 rounded-2xl p-3 flex flex-col items-center justify-center text-violet-700 shadow-sm transition-all active:scale-95">
              <ArrowUpFromLine size={20} className="mb-2" />
              <span className="text-[11px] font-bold tracking-wide">Withdraw</span>
            </Link>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white rounded-[20px] p-5 shadow-sm border border-violet-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Account Balance</p>
            <p className="text-indigo-700 font-black text-2xl leading-none relative z-10 tracking-tight">GHS 30</p>
          </div>
          <div className="flex-1 bg-white rounded-[20px] p-5 shadow-sm border border-violet-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-full blur-xl -mr-5 -mt-5"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2 relative z-10">Total Income</p>
            <p className="text-emerald-600 font-black text-2xl leading-none relative z-10 tracking-tight">GHS 0</p>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-violet-100 mt-2">
          <Link href="/my-devices" className="px-5 py-4 flex items-center justify-between hover:bg-violet-50/50 transition-colors border-b border-violet-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 border border-violet-100">
                <Monitor size={18} className="text-violet-600" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">My device</span>
            </div>
            <ChevronRight size={18} className="text-violet-300" />
          </Link>

          <Link href="/wallet-accounts" className="px-5 py-4 flex items-center justify-between hover:bg-violet-50/50 transition-colors border-b border-violet-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
                <CreditCard size={18} className="text-indigo-600" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Wallet Accounts</span>
            </div>
            <ChevronRight size={18} className="text-violet-300" />
          </Link>

          <Link href="/support" className="px-5 py-4 flex items-center justify-between hover:bg-violet-50/50 transition-colors border-b border-violet-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                <HeadphonesIcon size={18} className="text-purple-600" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Customer Service</span>
            </div>
            <ChevronRight size={18} className="text-violet-300" />
          </Link>

          <Link href="/about" className="px-5 py-4 flex items-center justify-between hover:bg-violet-50/50 transition-colors border-b border-violet-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <Info size={18} className="text-blue-600" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">About Us</span>
            </div>
            <ChevronRight size={18} className="text-violet-300" />
          </Link>

          <Link href="/platform-rules" className="px-5 py-4 flex items-center justify-between hover:bg-violet-50/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 border border-violet-100">
                <BookOpen size={18} className="text-violet-600" />
              </div>
              <span className="text-sm font-bold text-slate-700 tracking-wide">Platform rules</span>
            </div>
            <ChevronRight size={18} className="text-violet-300" />
          </Link>
        </div>

        <button onClick={handleLogout} className="w-full mt-5 mb-2 bg-white border-2 border-red-50 text-red-500 font-bold py-4 rounded-[20px] shadow-sm flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-100 transition-colors active:scale-95">
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </div>
  );
}
