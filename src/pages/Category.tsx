import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getCategoryBySlug, getProductsByCategorySlug, getTrendingProducts } from '@/data/mockData';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const products = slug ? getProductsByCategorySlug(slug) : [];
  const trendingProducts = getTrendingProducts().filter(p => 
    products.some(cp => cp.id === p.id)
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <CartDrawer />
        <main className="pt-20 lg:pt-28 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Catégorie non trouvée</h1>
            <p className="text-muted-foreground">Cette catégorie n'existe pas.</p>
          </div>
        </main>
        <Footer />
        <MobileNav />
      </div>
    );
  }

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
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              {category.name}
            </h1>
            {category.nameAr && (
              <p className="text-muted-foreground text-lg mb-4">
                {category.nameAr}
              </p>
            )}
            <p className="text-muted-foreground">
              {products.length} {products.length === 1 ? 'produit' : 'produits'} disponible{products.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Trending Products Carousel */}
          {trendingProducts.length > 0 && (
            <div className="mb-12">
              <ProductCarousel
                title="🔥 Tendances"
                subtitle="Les produits les plus populaires de cette catégorie"
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
                Aucun produit disponible dans cette catégorie pour le moment
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

export default Category;

