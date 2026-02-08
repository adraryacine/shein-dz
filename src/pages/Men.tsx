import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getMenProducts, getTrendingProducts } from '@/data/mockData';

const Men = () => {
  const products = getMenProducts();
  const trendingProducts = getTrendingProducts().filter(p => 
    products.some(mp => mp.id === p.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        {/* Features bar */}
        <div className="mt-8">
          <FeaturesBar />
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              Collection Homme 👔
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez notre sélection de vêtements élégants et tendance pour homme
            </p>
          </div>

          {/* Trending Products Carousel */}
          {trendingProducts.length > 0 && (
            <div className="mb-12">
              <ProductCarousel
                title="🔥 Tendances Homme"
                subtitle="Les produits les plus populaires"
                products={trendingProducts}
              />
            </div>
          )}

          {/* All Products Grid */}
          {products.length > 0 ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Tous les produits
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
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

export default Men;

