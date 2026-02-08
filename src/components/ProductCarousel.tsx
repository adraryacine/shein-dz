import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/types';
import { useRef } from 'react';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  flashPrices?: Record<string, number>;
}

export const ProductCarousel = ({
  title,
  subtitle,
  products,
  viewAllLink,
  flashPrices,
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {viewAllLink && (
            <Button variant="ghost" className="hidden sm:flex">
              Voir tout
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full glass"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full glass"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Products scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start">
            <ProductCard
              product={product}
              flashPrice={flashPrices?.[product.id]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
