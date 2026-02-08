import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import type { FlashSale, Product } from '@/types';

interface FlashSaleSectionProps {
  flashSale: FlashSale;
  products: Product[];
}

export const FlashSaleSection = ({ flashSale, products }: FlashSaleSectionProps) => {
  // Create a map of flash prices
  const flashPrices: Record<string, number> = {};
  flashSale.products.forEach((fp) => {
    flashPrices[fp.productId] = fp.flashPrice;
  });

  return (
    <section className="py-8 md:py-12">
      {/* Flash sale header with gradient background */}
      <div className="glass-card p-6 md:p-8 mb-6 gradient-sunset relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse-glow">
                <Zap className="w-6 h-6 text-yellow" />
              </div>
              <span className="flash-badge bg-white/20 backdrop-blur">
                Jusqu'à -{flashSale.discountPercentage}%
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
              {flashSale.name}
            </h2>
            {flashSale.description && (
              <p className="text-white/80 max-w-md">
                {flashSale.description}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-white/80 text-sm uppercase tracking-wider">
              Se termine dans
            </p>
            <CountdownTimer
              targetDate={flashSale.endTime}
              variant="large"
              className="text-white"
            />
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.slice(0, 10).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            flashPrice={flashPrices[product.id]}
          />
        ))}
      </div>

      {/* View all button */}
      <div className="text-center mt-8">
        <Link to="/">
          <Button size="lg" className="gradient-primary text-white font-semibold">
            Voir toutes les offres flash
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FlashSaleSection;
