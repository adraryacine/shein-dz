import { useEffect } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCard from '@/components/ProductCard';
import { getTrendingProducts } from '@/data/mockData';

const Trending = () => {
  const products = getTrendingProducts();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              🔥 Tendances du Moment
            </h1>
            <p className="text-muted-foreground text-lg">
              Les produits les plus populaires
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun produit disponible pour le moment
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Trending;

