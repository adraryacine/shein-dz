import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Plus, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockCategories, mockProducts, getProductBySlug } from '@/data/mockData';
import { cn } from '@/lib/utils';
import type { Product, ProductVariant, ProductImage } from '@/types';

const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = id && id !== 'new';
  const existingProduct = isEdit ? mockProducts.find(p => p.id === id) : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: existingProduct?.name || '',
    nameAr: existingProduct?.nameAr || '',
    slug: existingProduct?.slug || '',
    description: existingProduct?.description || '',
    descriptionAr: existingProduct?.descriptionAr || '',
    categoryId: existingProduct?.categoryId || '',
    basePrice: existingProduct?.basePrice || 0,
    salePrice: existingProduct?.salePrice || undefined,
    material: existingProduct?.material || '',
    isActive: existingProduct?.isActive ?? true,
    isFeatured: existingProduct?.isFeatured ?? false,
  });

  const [images, setImages] = useState<ProductImage[]>(existingProduct?.images || []);
  const [variants, setVariants] = useState<ProductVariant[]>(existingProduct?.variants || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save to your backend
    alert(isEdit ? 'Produit modifié avec succès!' : 'Produit créé avec succès!');
    navigate('/admin/products');
  };

  const addImage = () => {
    setImages([...images, {
      id: `img-${Date.now()}`,
      productId: id || 'new',
      imageUrl: '',
      displayOrder: images.length,
      isPrimary: images.length === 0,
    }]);
  };

  const removeImage = (imageId: string) => {
    setImages(images.filter(img => img.id !== imageId));
  };

  const setPrimaryImage = (imageId: string) => {
    setImages(images.map(img => ({
      ...img,
      isPrimary: img.id === imageId,
    })));
  };

  const addVariant = () => {
    setVariants([...variants, {
      id: `var-${Date.now()}`,
      productId: id || 'new',
      size: 'M',
      color: 'Noir',
      colorHex: '#000000',
      stockQuantity: 0,
      isActive: true,
    }]);
  };

  const removeVariant = (variantId: string) => {
    setVariants(variants.filter(v => v.id !== variantId));
  };

  const updateVariant = (variantId: string, field: keyof ProductVariant, value: any) => {
    setVariants(variants.map(v => 
      v.id === variantId ? { ...v, [field]: value } : v
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        <div className="mt-8">
          <FeaturesBar />
        </div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" onClick={() => navigate('/admin/products')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                {isEdit ? 'Modifier le Produit' : 'Nouveau Produit'}
              </h1>
              <p className="text-muted-foreground">
                {isEdit ? 'Modifiez les informations du produit' : 'Ajoutez un nouveau produit à votre boutique'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Informations de Base</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom du Produit *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Ex: Robe Midi Élégante"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom (Arabe)
                  </label>
                  <Input
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    placeholder="Ex: فستان أنيق"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slug (URL) *
                </label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  placeholder="Ex: robe-midi-elegante"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Utilisé dans l'URL du produit (sans espaces, avec tirets)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  placeholder="Décrivez votre produit en détail..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description (Arabe)
                </label>
                <Textarea
                  value={formData.descriptionAr}
                  onChange={(e) => setFormData({ ...formData, descriptionAr: e.target.value })}
                  rows={4}
                  placeholder="وصف المنتج بالعربية..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Catégorie *
                  </label>
                  <select
                    value={formData.categoryId}
                    onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {mockCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Matière
                  </label>
                  <Input
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    placeholder="Ex: Coton, Polyester..."
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Prix</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prix de Base (DA) *
                  </label>
                  <Input
                    type="number"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({ ...formData, basePrice: parseFloat(e.target.value) || 0 })}
                    required
                    min="0"
                    step="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prix de Vente (DA)
                  </label>
                  <Input
                    type="number"
                    value={formData.salePrice || ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      salePrice: e.target.value ? parseFloat(e.target.value) : undefined 
                    })}
                    min="0"
                    step="10"
                    placeholder="Optionnel"
                  />
                  {formData.salePrice && formData.salePrice < formData.basePrice && (
                    <p className="text-xs text-green-600 mt-1">
                      Réduction: {Math.round(((formData.basePrice - formData.salePrice) / formData.basePrice) * 100)}%
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Images du Produit</h2>
                <Button type="button" variant="outline" onClick={addImage}>
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter une Image
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={image.id} className="relative group">
                    <div className={cn(
                      "aspect-square rounded-lg overflow-hidden border-2",
                      image.isPrimary ? "border-primary" : "border-border"
                    )}>
                      <img
                        src={image.imageUrl || '/placeholder.svg'}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      {!image.isPrimary && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setPrimaryImage(image.id)}
                          className="bg-white/90 hover:bg-white"
                        >
                          ⭐
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeImage(image.id)}
                        className="bg-white/90 hover:bg-white text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    {image.isPrimary && (
                      <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        Principale
                      </div>
                    )}
                    <Input
                      type="url"
                      value={image.imageUrl}
                      onChange={(e) => {
                        setImages(images.map(img => 
                          img.id === image.id ? { ...img, imageUrl: e.target.value } : img
                        ));
                      }}
                      placeholder="URL de l'image"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>
              {images.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Aucune image. Cliquez sur "Ajouter une Image" pour commencer.
                </p>
              )}
            </div>

            {/* Variants */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Variantes (Taille & Couleur)</h2>
                <Button type="button" variant="outline" onClick={addVariant}>
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter une Variante
                </Button>
              </div>
              
              <div className="space-y-4">
                {variants.map((variant, index) => (
                  <div key={variant.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Variante {index + 1}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeVariant(variant.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Taille</label>
                        <Input
                          value={variant.size}
                          onChange={(e) => updateVariant(variant.id, 'size', e.target.value)}
                          placeholder="Ex: S, M, L, 38, 40..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Couleur</label>
                        <Input
                          value={variant.color}
                          onChange={(e) => updateVariant(variant.id, 'color', e.target.value)}
                          placeholder="Ex: Noir, Rose..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Code Couleur (Hex)</label>
                        <div className="flex gap-2">
                          <Input
                            type="color"
                            value={variant.colorHex || '#000000'}
                            onChange={(e) => updateVariant(variant.id, 'colorHex', e.target.value)}
                            className="w-16 h-10 p-1"
                          />
                          <Input
                            value={variant.colorHex || ''}
                            onChange={(e) => updateVariant(variant.id, 'colorHex', e.target.value)}
                            placeholder="#000000"
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Stock</label>
                        <Input
                          type="number"
                          value={variant.stockQuantity}
                          onChange={(e) => updateVariant(variant.id, 'stockQuantity', parseInt(e.target.value) || 0)}
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={variant.isActive}
                          onChange={(e) => updateVariant(variant.id, 'isActive', e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm">Variante active</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {variants.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Aucune variante. Cliquez sur "Ajouter une Variante" pour commencer.
                </p>
              )}
            </div>

            {/* Settings */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Paramètres</h2>
              
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="rounded"
                  />
                  <span className="font-medium">Produit actif</span>
                  <span className="text-sm text-muted-foreground">(visible sur le site)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="rounded"
                  />
                  <span className="font-medium">Produit mis en avant</span>
                  <span className="text-sm text-muted-foreground">(affiché en vedette)</span>
                </label>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/products')}
              >
                Annuler
              </Button>
              <Button
                type="submit"
                className="gradient-primary text-white font-semibold"
              >
                {isEdit ? 'Enregistrer les modifications' : 'Créer le produit'}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default ProductForm;

