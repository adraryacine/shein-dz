import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockProducts, mockCategories } from '@/data/mockData';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';

const Products = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (productId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Gestion des Produits
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produit' : 'produits'}
              </p>
            </div>
            <Link to="/admin/products/new">
              <Button className="gradient-primary text-white font-semibold">
                <Plus className="w-5 h-5 mr-2" />
                Nouveau Produit
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="glass-card p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-border bg-background"
                >
                  <option value="all">Toutes les catégories</option>
                  {mockCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4">Produit</th>
                    <th className="text-left p-4">Catégorie</th>
                    <th className="text-left p-4">Prix</th>
                    <th className="text-left p-4">Stock</th>
                    <th className="text-left p-4">Ventes</th>
                    <th className="text-left p-4">Note</th>
                    <th className="text-left p-4">Statut</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => {
                    const totalStock = product.variants?.reduce((sum, v) => sum + v.stockQuantity, 0) || 0;
                    return (
                      <tr key={product.id} className="border-b hover:bg-muted/50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images?.[0]?.imageUrl || '/placeholder.svg'}
                              alt={product.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-semibold">{product.name}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">
                                {product.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {product.category?.name || 'N/A'}
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">
                              {(product.salePrice || product.basePrice).toLocaleString('fr-DZ')} DA
                            </span>
                            {product.salePrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                {product.basePrice.toLocaleString('fr-DZ')} DA
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={cn(
                            "px-2 py-1 rounded-full text-xs font-semibold",
                            totalStock > 10 ? "bg-green-100 text-green-700" :
                            totalStock > 0 ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"
                          )}>
                            {totalStock} unités
                          </span>
                        </td>
                        <td className="p-4">{product.totalSold}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">{product.avgRating.toFixed(1)}</span>
                            <span className="text-muted-foreground text-sm">
                              ({product.reviewCount})
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={cn(
                            "px-2 py-1 rounded-full text-xs font-semibold",
                            product.isActive 
                              ? "bg-green-100 text-green-700" 
                              : "bg-red-100 text-red-700"
                          )}>
                            {product.isActive ? 'Actif' : 'Inactif'}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Link to={`/admin/products/${product.id}/edit`}>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(product.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun produit trouvé
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

export default Products;

