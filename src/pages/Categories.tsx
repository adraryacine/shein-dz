import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { mockCategories } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Categories = () => {
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
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              Toutes les Catégories
            </h1>
            <p className="text-muted-foreground text-lg">
              Explorez toutes nos collections
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className={cn(
                  "category-card group",
                  index === 0 && "md:col-span-2 md:row-span-2"
                )}
              >
                <img
                  src={category.imageUrl || '/placeholder.svg'}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 md:p-6">
                  <h3 className="text-white font-display text-lg md:text-2xl font-bold text-center drop-shadow-lg">
                    {category.name}
                  </h3>
                  {category.nameAr && (
                    <p className="text-white/80 text-sm mt-1">
                      {category.nameAr}
                    </p>
                  )}
                  <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Categories;

