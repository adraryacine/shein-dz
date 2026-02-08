import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/hooks/useWishlist';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlist();

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
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                Mes Favoris ❤️
              </h1>
              <p className="text-muted-foreground text-lg">
                {items.length} {items.length === 1 ? 'produit' : 'produits'} sauvegardé{items.length > 1 ? 's' : ''}
              </p>
            </div>
            {items.length > 0 && (
              <Button
                variant="outline"
                onClick={clearWishlist}
                className="hidden md:flex"
              >
                Vider la liste
              </Button>
            )}
          </div>

          {/* Products grid */}
          {items.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
              <div className="mt-8 text-center md:hidden">
                <Button
                  variant="outline"
                  onClick={clearWishlist}
                >
                  Vider la liste
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Heart className="w-12 h-12 text-muted-foreground/50" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Aucun favori</h2>
              <p className="text-muted-foreground mb-6">
                Commencez à ajouter des produits à vos favoris
              </p>
              <Button asChild className="gradient-primary text-white">
                <Link to="/">Découvrir les produits</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Wishlist;

