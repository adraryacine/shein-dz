import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getNewProducts, getNewArrivals } from '@/data/mockData';

const New = () => {
  const newProducts = getNewProducts();
  const allNewArrivals = getNewArrivals();

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
              ✨ Nouveautés
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez les dernières arrivées de notre collection
            </p>
          </div>

          {/* New Arrivals Carousel */}
          {allNewArrivals.length > 0 && (
            <div className="mb-12">
              <ProductCarousel
                title="🔥 Dernières Arrivées"
                subtitle="Les produits les plus récents"
                products={allNewArrivals}
              />
            </div>
          )}

          {/* New Products Grid (last 7 days) */}
          {newProducts.length > 0 ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Nouveautés de la semaine
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {newProducts.map((product) => (
                  <div key={product.id} className="flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun nouveau produit cette semaine
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

export default New;

