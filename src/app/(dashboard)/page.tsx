import { TopHero } from "@/components/home/top-hero";
import { QuickActions } from "@/components/home/quick-actions";
import { FeaturedProducts } from "@/components/home/featured-products";
import { TopHeader } from "@/components/layout/top-header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopHeader title="Home" showBack={false} />
      
      <div className="pt-16">
        <TopHero />
        <QuickActions />
        
        <div className="px-4 mt-6 mb-4 flex justify-between items-end">
          <h2 className="text-lg font-bold text-slate-900">Latest Products</h2>
          <span className="text-sm font-medium text-primary cursor-pointer">View All</span>
        </div>
        
        <FeaturedProducts />
      </div>
    </div>
  );
}
