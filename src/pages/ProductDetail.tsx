import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Star, ArrowLeft, Minus, Plus } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { getProductBySlug, getFlashPricesMap, mockFlashSale } from '@/data/mockData';
import type { ProductVariant } from '@/types';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;
  const flashPrices = getFlashPricesMap();
  const { addItem, openCart } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) {
    return <NotFound />;
  }

  // Get available sizes and colors from variants
  const availableSizes = Array.from(new Set(product.variants?.map(v => v.size) || []));
  const availableColors = Array.from(
    new Set(
      product.variants
        ?.filter(v => !selectedSize || v.size === selectedSize)
        .map(v => ({ color: v.color, hex: v.colorHex })) || []
    )
  );

  // Initialize selected size and color
  useEffect(() => {
    if (availableSizes.length > 0 && !selectedSize) {
      setSelectedSize(availableSizes[0]);
    }
  }, [availableSizes.length, selectedSize]);

  useEffect(() => {
    if (availableColors.length > 0 && !selectedColor) {
      setSelectedColor(availableColors[0].color);
    } else if (selectedSize && availableColors.length === 0) {
      setSelectedColor('');
    }
  }, [selectedSize, availableColors.length, selectedColor]);

  const isWishlisted = isInWishlist(product.id);
  const flashPrice = flashPrices[product.id];
  const currentPrice = flashPrice ?? product.salePrice ?? product.basePrice;
  const originalPrice = product.basePrice;
  const hasDiscount = currentPrice < originalPrice;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const images = product.images || [];
  const primaryImage = images[selectedImageIndex]?.imageUrl || images[0]?.imageUrl || '/placeholder.svg';

  // Get selected variant
  const selectedVariant = product.variants?.find(
    v => v.size === selectedSize && v.color === selectedColor
  ) || product.variants?.[0];

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(product, selectedVariant, quantity, currentPrice);
    openCart();
  };

  const handleWishlistToggle = () => {
    toggleItem(product);
  };

  const increaseQuantity = () => {
    if (selectedVariant && quantity < selectedVariant.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        {/* Features bar */}
        <div className="mt-8">
          <FeaturesBar />
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted glass-card">
                <img
                  src={primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Discount badge */}
                {hasDiscount && (
                  <div className="absolute top-4 left-4 flash-badge">
                    -{discountPercent}%
                  </div>
                )}
                {flashPrice && (
                  <div className="absolute top-4 left-4 flash-badge">
                    ⚡ Flash
                  </div>
                )}
              </div>

              {/* Thumbnail images */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImageIndex(index)}
                      className={cn(
                        "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedImageIndex === index
                          ? "border-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img
                        src={image.imageUrl}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              {product.category && (
                <Link
                  to={`/category/${product.category.slug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {product.category.name}
                </Link>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                {product.name}
              </h1>

              {/* Rating */}
              {product.reviewCount > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-5 h-5",
                          star <= Math.round(product.avgRating)
                            ? "text-yellow fill-current"
                            : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.avgRating} ({product.reviewCount} avis)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  {currentPrice.toLocaleString('fr-DZ')} DA
                </span>
                {hasDiscount && (
                  <span className="text-xl text-muted-foreground line-through">
                    {originalPrice.toLocaleString('fr-DZ')} DA
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}

              {/* Material */}
              {product.material && (
                <div>
                  <h3 className="font-semibold mb-2">Matière</h3>
                  <p className="text-muted-foreground">{product.material}</p>
                </div>
              )}

              {/* Size Selection */}
              {availableSizes.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Taille</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setSelectedColor('');
                        }}
                        className={cn(
                          "px-4 py-2 rounded-lg border-2 transition-all",
                          selectedSize === size
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {availableColors.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Couleur</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableColors.map((colorObj, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(colorObj.color)}
                        className={cn(
                          "w-12 h-12 rounded-full border-2 transition-all",
                          selectedColor === colorObj.color
                            ? "border-primary scale-110"
                            : "border-border hover:scale-105"
                        )}
                        style={{ backgroundColor: colorObj.hex || '#ccc' }}
                        title={colorObj.color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-semibold mb-3">Quantité</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border-2 border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={increaseQuantity}
                      disabled={!selectedVariant || quantity >= selectedVariant.stockQuantity}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  {selectedVariant && (
                    <span className="text-sm text-muted-foreground">
                      {selectedVariant.stockQuantity} en stock
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant || selectedVariant.stockQuantity === 0}
                  className="flex-1 gradient-primary text-white font-semibold"
                  size="lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWishlistToggle}
                  className={cn(
                    "px-4",
                    isWishlisted && "border-primary text-primary"
                  )}
                >
                  <Heart
                    className={cn(
                      "w-5 h-5",
                      isWishlisted && "fill-current"
                    )}
                  />
                </Button>
              </div>

              {/* Sold count */}
              {product.totalSold > 50 && (
                <p className="text-sm text-muted-foreground">
                  🔥 {product.totalSold}+ vendus
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default ProductDetail;

