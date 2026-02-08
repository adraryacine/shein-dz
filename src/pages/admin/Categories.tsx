import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockCategories } from '@/data/mockData';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    slug: '',
    imageUrl: '',
    displayOrder: categories.length + 1,
    isActive: true,
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCategories(categories.map(cat => 
        cat.id === editingId ? { ...cat, ...formData } : cat
      ));
      setEditingId(null);
    } else {
      setCategories([...categories, {
        id: `cat-${Date.now()}`,
        ...formData,
      }]);
      setIsAdding(false);
    }
    setFormData({
      name: '',
      nameAr: '',
      slug: '',
      imageUrl: '',
      displayOrder: categories.length + 1,
      isActive: true,
    });
  };

  const handleEdit = (category: Category) => {
    setFormData({
      name: category.name,
      nameAr: category.nameAr || '',
      slug: category.slug,
      imageUrl: category.imageUrl || '',
      displayOrder: category.displayOrder,
      isActive: category.isActive,
    });
    setEditingId(category.id);
    setIsAdding(true);
  };

  const handleDelete = (categoryId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      setCategories(categories.filter(cat => cat.id !== categoryId));
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
                Gestion des Catégories
              </h1>
              <p className="text-muted-foreground">
                {categories.length} {categories.length === 1 ? 'catégorie' : 'catégories'}
              </p>
            </div>
            <Button
              onClick={() => {
                setIsAdding(true);
                setEditingId(null);
                setFormData({
                  name: '',
                  nameAr: '',
                  slug: '',
                  imageUrl: '',
                  displayOrder: categories.length + 1,
                  isActive: true,
                });
              }}
              className="gradient-primary text-white font-semibold"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouvelle Catégorie
            </Button>
          </div>

          {/* Add/Edit Form */}
          {isAdding && (
            <div className="glass-card p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                {editingId ? 'Modifier la Catégorie' : 'Nouvelle Catégorie'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom (Arabe)</label>
                    <Input
                      value={formData.nameAr}
                      onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Slug *</label>
                    <Input
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ordre d'affichage</label>
                    <Input
                      type="number"
                      value={formData.displayOrder}
                      onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">URL de l'Image</label>
                  <Input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="rounded"
                    />
                    <span>Catégorie active</span>
                  </label>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="gradient-primary text-white">
                    {editingId ? 'Enregistrer' : 'Créer'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsAdding(false);
                      setEditingId(null);
                    }}
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="glass-card p-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src={category.imageUrl || '/placeholder.svg'}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  {category.nameAr && (
                    <p className="text-muted-foreground">{category.nameAr}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Slug: {category.slug}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-semibold",
                      category.isActive 
                        ? "bg-green-100 text-green-700" 
                        : "bg-red-100 text-red-700"
                    )}>
                      {category.isActive ? 'Actif' : 'Inactif'}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(category)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(category.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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

