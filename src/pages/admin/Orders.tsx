import { useEffect } from 'react';
import { Package, Search } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Orders = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mock orders
  const orders: any[] = [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        <div className="mt-8">
          <FeaturesBar />
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Commandes
            </h1>
            <p className="text-muted-foreground">
              Gérez et suivez toutes vos commandes
            </p>
          </div>

          {/* Search */}
          <div className="glass-card p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher une commande..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Orders List */}
          {orders.length > 0 ? (
            <div className="glass-card p-6">
              <div className="space-y-4">
                {/* Orders will be displayed here */}
              </div>
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h2 className="text-xl font-bold mb-2">Aucune commande</h2>
              <p className="text-muted-foreground">
                Vous n'avez pas encore de commandes
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

export default Orders;

