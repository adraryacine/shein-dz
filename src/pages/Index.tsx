import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import FlashSaleSection from '@/components/FlashSaleSection';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCarousel from '@/components/ProductCarousel';
import FeaturesBar from '@/components/FeaturesBar';
import {
  mockBanners,
  mockCategories,
  mockFlashSale,
  getFlashSaleProducts,
  getFlashPricesMap,
  getTrendingProducts,
  getNewArrivals,
} from '@/data/mockData';

const Index = () => {
  const flashSaleProducts = getFlashSaleProducts();
  const flashPrices = getFlashPricesMap();
  const trendingProducts = getTrendingProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        {/* Hero Banner */}
        <div className="container mx-auto px-4 pt-4">
          <HeroBanner banners={mockBanners} />
        </div>

        {/* Features bar */}
        <div className="mt-8">
          <FeaturesBar />
        </div>

        {/* Flash Sales Section */}
        <div className="container mx-auto px-4">
          <FlashSaleSection
            flashSale={mockFlashSale}
            products={flashSaleProducts}
          />
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4">
          <CategoryGrid categories={mockCategories} />
        </div>

        {/* Trending Products */}
        <div className="container mx-auto px-4">
          <ProductCarousel
            title="🔥 Tendances du Moment"
            subtitle="Les produits les plus populaires"
            products={trendingProducts}
            viewAllLink="/trending"
          />
        </div>

        {/* New Arrivals */}
        <div className="container mx-auto px-4">
          <ProductCarousel
            title="✨ Nouveautés"
            subtitle="Les dernières arrivées"
            products={newArrivals}
            viewAllLink="/new"
          />
        </div>

        {/* Best Deals Carousel with Flash Prices */}
        <div className="container mx-auto px-4">
          <ProductCarousel
            title="💰 Meilleures Affaires"
            subtitle="Économisez jusqu'à 50%"
            products={flashSaleProducts}
            flashPrices={flashPrices}
            viewAllLink="/deals"
          />
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
