import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIP Invest - Premium Investment Platform",
  description: "Earn daily passive income with VIP investment plans. Invite friends and grow your wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
