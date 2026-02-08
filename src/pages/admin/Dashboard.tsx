import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Plus,
  Edit,
  Settings,
  BarChart3
} from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { mockProducts, mockCategories } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mock stats
  const stats = {
    totalProducts: mockProducts.length,
    activeProducts: mockProducts.filter(p => p.isActive).length,
    totalSales: mockProducts.reduce((sum, p) => sum + p.totalSold, 0),
    totalRevenue: mockProducts.reduce((sum, p) => sum + (p.totalSold * (p.salePrice || p.basePrice)), 0),
    avgRating: mockProducts.reduce((sum, p) => sum + p.avgRating, 0) / mockProducts.length,
    totalCategories: mockCategories.length,
  };

  const recentProducts = mockProducts.slice(0, 5);

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
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                Dashboard Back Office
              </h1>
              <p className="text-muted-foreground text-lg">
                Gérez vos produits et votre boutique
              </p>
            </div>
            <Link to="/admin/products/new">
              <Button className="gradient-primary text-white font-semibold">
                <Plus className="w-5 h-5 mr-2" />
                Nouveau Produit
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="glass-card p-4">
              <Package className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
              <div className="text-sm text-muted-foreground">Produits</div>
            </div>
            <div className="glass-card p-4">
              <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-2xl font-bold">{stats.activeProducts}</div>
              <div className="text-sm text-muted-foreground">Actifs</div>
            </div>
            <div className="glass-card p-4">
              <ShoppingBag className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-2xl font-bold">{stats.totalSales}</div>
              <div className="text-sm text-muted-foreground">Ventes</div>
            </div>
            <div className="glass-card p-4">
              <DollarSign className="w-8 h-8 text-yellow-500 mb-2" />
              <div className="text-2xl font-bold">{Math.round(stats.totalRevenue / 1000)}K</div>
              <div className="text-sm text-muted-foreground">Revenus (DA)</div>
            </div>
            <div className="glass-card p-4">
              <Star className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl font-bold">{stats.avgRating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Note moy.</div>
            </div>
            <div className="glass-card p-4">
              <BarChart3 className="w-8 h-8 text-purple-500 mb-2" />
              <div className="text-2xl font-bold">{stats.totalCategories}</div>
              <div className="text-sm text-muted-foreground">Catégories</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link to="/admin/products" className="glass-card p-6 hover:scale-105 transition-transform">
              <Package className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-1">Gérer les Produits</h3>
              <p className="text-sm text-muted-foreground">Ajouter, modifier ou supprimer des produits</p>
            </Link>
            <Link to="/admin/categories" className="glass-card p-6 hover:scale-105 transition-transform">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-1">Gérer les Catégories</h3>
              <p className="text-sm text-muted-foreground">Organiser vos catégories</p>
            </Link>
            <Link to="/admin/orders" className="glass-card p-6 hover:scale-105 transition-transform">
              <ShoppingBag className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-1">Commandes</h3>
              <p className="text-sm text-muted-foreground">Voir et gérer les commandes</p>
            </Link>
            <Link to="/admin/settings" className="glass-card p-6 hover:scale-105 transition-transform">
              <Settings className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-1">Paramètres</h3>
              <p className="text-sm text-muted-foreground">Configuration de la boutique</p>
            </Link>
          </div>

          {/* Recent Products */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Produits Récents</h2>
              <Link to="/admin/products">
                <Button variant="ghost" size="sm">
                  Voir tout
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Produit</th>
                    <th className="text-left p-2">Catégorie</th>
                    <th className="text-left p-2">Prix</th>
                    <th className="text-left p-2">Ventes</th>
                    <th className="text-left p-2">Statut</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-muted/50">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={product.images?.[0]?.imageUrl || '/placeholder.svg'}
                            alt={product.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="p-2 text-muted-foreground">
                        {product.category?.name || 'N/A'}
                      </td>
                      <td className="p-2">
                        <span className="font-semibold">
                          {(product.salePrice || product.basePrice).toLocaleString('fr-DZ')} DA
                        </span>
                      </td>
                      <td className="p-2">{product.totalSold}</td>
                      <td className="p-2">
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-semibold",
                          product.isActive 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                        )}>
                          {product.isActive ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="p-2">
                        <Link to={`/admin/products/${product.id}/edit`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Dashboard;

