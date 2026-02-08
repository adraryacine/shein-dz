import { useEffect } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCard from '@/components/ProductCard';
import { getFlashSaleProducts, getFlashPricesMap } from '@/data/mockData';

const Deals = () => {
  const products = getFlashSaleProducts();
  const flashPrices = getFlashPricesMap();

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
              💰 Meilleures Affaires
            </h1>
            <p className="text-muted-foreground text-lg">
              Économisez jusqu'à 50%
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  flashPrice={flashPrices[product.id]}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucune offre disponible pour le moment
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

export default Deals;

