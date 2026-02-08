import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import type { Product, ProductVariant } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  flashPrice?: number;
  showQuickAdd?: boolean;
  className?: string;
}

export const ProductCard = ({
  product,
  flashPrice,
  showQuickAdd = true,
  className,
}: ProductCardProps) => {
  const { toggleItem, isInWishlist } = useWishlist();
  const { addItem } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const currentPrice = flashPrice ?? product.salePrice ?? product.basePrice;
  const originalPrice = product.basePrice;
  const hasDiscount = currentPrice < originalPrice;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const primaryImage = product.images?.find((img) => img.isPrimary)?.imageUrl 
    || product.images?.[0]?.imageUrl 
    || '/placeholder.svg';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add first available variant or create a default one
    const variant: ProductVariant = product.variants?.[0] || {
      id: `${product.id}-default`,
      productId: product.id,
      size: 'M',
      color: 'Default',
      stockQuantity: 10,
      isActive: true,
    };
    
    addItem(product, variant, 1, currentPrice);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
  };

  return (
    <Link to={`/product/${product.slug}`} className={cn("block", className)}>
      <div className="product-card group">
        {/* Image container */}
        <div className="product-card-image">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Discount badge */}
          {hasDiscount && (
            <div className="absolute top-3 left-3 flash-badge">
              -{discountPercent}%
            </div>
          )}

          {/* Flash sale badge */}
          {flashPrice && (
            <div className="absolute top-3 left-3 flash-badge">
              ⚡ Flash
            </div>
          )}

          {/* Wishlist button */}
          <button
            onClick={handleWishlistToggle}
            className={cn(
              "wishlist-btn",
              isWishlisted && "active"
            )}
            aria-label={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <Heart 
              className={cn(
                "w-4 h-4 transition-all",
                isWishlisted ? "fill-current" : ""
              )}
            />
          </button>

          {/* Quick add button (visible on hover) */}
          {showQuickAdd && (
            <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Button 
                onClick={handleQuickAdd}
                className="w-full gradient-primary text-white font-semibold shadow-lg"
                size="sm"
              >
                Ajouter au panier
              </Button>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="p-4">
          {/* Category */}
          {product.category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.category.name}
            </p>
          )}

          {/* Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          {product.reviewCount > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={cn(
                      "w-3.5 h-3.5",
                      star <= Math.round(product.avgRating)
                        ? "text-yellow fill-current"
                        : "text-muted-foreground/30"
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="price-tag">
              {currentPrice.toLocaleString('fr-DZ')} DA
            </span>
            {hasDiscount && (
              <span className="price-tag-old">
                {originalPrice.toLocaleString('fr-DZ')} DA
              </span>
            )}
          </div>

          {/* Sold count for social proof */}
          {product.totalSold > 50 && (
            <p className="text-xs text-muted-foreground mt-2">
              🔥 {product.totalSold}+ vendus
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
