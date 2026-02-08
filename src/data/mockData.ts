import type { Product, Category, FlashSale, Banner } from '@/types';

// Mock banners for hero section
export const mockBanners: Banner[] = [
  {
    id: '1',
    title: 'Nouvelle Collection Printemps 2025',
    subtitle: 'Découvrez les dernières tendances avec -30% sur la première commande',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
    linkUrl: '/new',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '2',
    title: 'Flash Sales ⚡ Jusqu\'à -70%',
    subtitle: 'Offres limitées dans le temps. Ne manquez pas ces prix incroyables!',
    imageUrl: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1920&q=80',
    linkUrl: '/flash-sales',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '3',
    title: 'Livraison Gratuite à Alger',
    subtitle: 'Sur toutes les commandes de plus de 5000 DA',
    imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80',
    linkUrl: '/shipping',
    displayOrder: 3,
    isActive: true,
  },
];

// Mock categories
export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Robes',
    nameAr: 'فساتين',
    slug: 'robes',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '2',
    name: 'Tops & Blouses',
    nameAr: 'بلوزات',
    slug: 'tops-blouses',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '3',
    name: 'Pantalons',
    nameAr: 'سراويل',
    slug: 'pantalons',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: '4',
    name: 'Hijabs',
    nameAr: 'حجاب',
    slug: 'hijabs',
    imageUrl: 'https://images.unsplash.com/photo-1590654893966-f2a19e66a2a5?w=800&q=80',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: '5',
    name: 'Accessoires',
    nameAr: 'إكسسوارات',
    slug: 'accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3d43?w=800&q=80',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: '6',
    name: 'Chaussures',
    nameAr: 'أحذية',
    slug: 'chaussures',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    displayOrder: 6,
    isActive: true,
  },
];

// Mock products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Robe Midi Élégante Fleurie',
    slug: 'robe-midi-elegante-fleurie',
    description: 'Une robe midi parfaite pour toutes les occasions',
    categoryId: '1',
    category: mockCategories[0],
    basePrice: 4500,
    salePrice: 2990,
    material: 'Polyester',
    isActive: true,
    isFeatured: true,
    totalSold: 234,
    avgRating: 4.5,
    reviewCount: 87,
    images: [
      { id: '1', productId: '1', imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '1-1', productId: '1', size: 'S', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 15, isActive: true },
      { id: '1-2', productId: '1', size: 'M', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 20, isActive: true },
      { id: '1-3', productId: '1', size: 'L', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 10, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Ensemble 2 Pièces Sport Chic',
    slug: 'ensemble-sport-chic',
    description: 'Ensemble confortable et stylé',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 5900,
    salePrice: 3990,
    material: 'Coton',
    isActive: true,
    isFeatured: true,
    totalSold: 456,
    avgRating: 4.8,
    reviewCount: 156,
    images: [
      { id: '2', productId: '2', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '2-1', productId: '2', size: 'S', color: 'Beige', colorHex: '#F5F5DC', stockQuantity: 25, isActive: true },
      { id: '2-2', productId: '2', size: 'M', color: 'Beige', colorHex: '#F5F5DC', stockQuantity: 30, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Blazer Oversize Tendance',
    slug: 'blazer-oversize-tendance',
    description: 'Le blazer incontournable de la saison',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 7500,
    salePrice: 5490,
    material: 'Polyester Blend',
    isActive: true,
    isFeatured: false,
    totalSold: 178,
    avgRating: 4.6,
    reviewCount: 64,
    images: [
      { id: '3', productId: '3', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '3-1', productId: '3', size: 'M', color: 'Noir', colorHex: '#000000', stockQuantity: 12, isActive: true },
      { id: '3-2', productId: '3', size: 'L', color: 'Noir', colorHex: '#000000', stockQuantity: 18, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Hijab Premium Mousseline',
    slug: 'hijab-premium-mousseline',
    description: 'Hijab léger et élégant en mousseline de qualité supérieure',
    categoryId: '4',
    category: mockCategories[3],
    basePrice: 1500,
    material: 'Mousseline',
    isActive: true,
    isFeatured: true,
    totalSold: 892,
    avgRating: 4.9,
    reviewCount: 324,
    images: [
      { id: '4', productId: '4', imageUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '4-1', productId: '4', size: 'Unique', color: 'Bordeaux', colorHex: '#722F37', stockQuantity: 50, isActive: true },
      { id: '4-2', productId: '4', size: 'Unique', color: 'Navy', colorHex: '#000080', stockQuantity: 45, isActive: true },
      { id: '4-3', productId: '4', size: 'Unique', color: 'Rose Poudré', colorHex: '#E8B4B8', stockQuantity: 60, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Jean Mom Taille Haute',
    slug: 'jean-mom-taille-haute',
    description: 'Jean confortable coupe mom taille haute',
    categoryId: '3',
    category: mockCategories[2],
    basePrice: 4200,
    salePrice: 2890,
    material: 'Denim',
    isActive: true,
    isFeatured: true,
    totalSold: 567,
    avgRating: 4.4,
    reviewCount: 198,
    images: [
      { id: '5', productId: '5', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '5-1', productId: '5', size: '36', color: 'Bleu', colorHex: '#4169E1', stockQuantity: 20, isActive: true },
      { id: '5-2', productId: '5', size: '38', color: 'Bleu', colorHex: '#4169E1', stockQuantity: 25, isActive: true },
      { id: '5-3', productId: '5', size: '40', color: 'Bleu', colorHex: '#4169E1', stockQuantity: 15, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Sneakers Plateforme Tendance',
    slug: 'sneakers-plateforme',
    description: 'Sneakers confortables avec plateforme légère',
    categoryId: '6',
    category: mockCategories[5],
    basePrice: 6500,
    salePrice: 4490,
    material: 'Similicuir',
    isActive: true,
    isFeatured: true,
    totalSold: 345,
    avgRating: 4.7,
    reviewCount: 112,
    images: [
      { id: '6', productId: '6', imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '6-1', productId: '6', size: '37', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 10, isActive: true },
      { id: '6-2', productId: '6', size: '38', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 15, isActive: true },
      { id: '6-3', productId: '6', size: '39', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 12, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Sac à Main Chaîne Dorée',
    slug: 'sac-main-chaine-doree',
    description: 'Sac élégant avec chaîne dorée',
    categoryId: '5',
    category: mockCategories[4],
    basePrice: 3800,
    salePrice: 2490,
    material: 'Similicuir',
    isActive: true,
    isFeatured: false,
    totalSold: 289,
    avgRating: 4.6,
    reviewCount: 87,
    images: [
      { id: '7', productId: '7', imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '7-1', productId: '7', size: 'Unique', color: 'Noir', colorHex: '#000000', stockQuantity: 30, isActive: true },
      { id: '7-2', productId: '7', size: 'Unique', color: 'Beige', colorHex: '#F5F5DC', stockQuantity: 25, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Robe Longue Bohème',
    slug: 'robe-longue-boheme',
    description: 'Robe longue fluide style bohème',
    categoryId: '1',
    category: mockCategories[0],
    basePrice: 5500,
    salePrice: 3890,
    material: 'Viscose',
    isActive: true,
    isFeatured: true,
    totalSold: 423,
    avgRating: 4.8,
    reviewCount: 156,
    images: [
      { id: '8', productId: '8', imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '8-1', productId: '8', size: 'S', color: 'Terracotta', colorHex: '#E2725B', stockQuantity: 18, isActive: true },
      { id: '8-2', productId: '8', size: 'M', color: 'Terracotta', colorHex: '#E2725B', stockQuantity: 22, isActive: true },
      { id: '8-3', productId: '8', size: 'L', color: 'Terracotta', colorHex: '#E2725B', stockQuantity: 15, isActive: true },
    ],
    createdAt: new Date().toISOString(),
  },
  // Produits Homme
  {
    id: '9',
    name: 'Chemise Classique Homme',
    slug: 'chemise-classique-homme',
    description: 'Chemise élégante pour homme, parfaite pour le bureau',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 3500,
    salePrice: 2490,
    material: 'Coton',
    isActive: true,
    isFeatured: true,
    totalSold: 312,
    avgRating: 4.6,
    reviewCount: 98,
    images: [
      { id: '9', productId: '9', imageUrl: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '9-1', productId: '9', size: 'M', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 20, isActive: true },
      { id: '9-2', productId: '9', size: 'L', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 25, isActive: true },
      { id: '9-3', productId: '9', size: 'XL', color: 'Bleu', colorHex: '#4169E1', stockQuantity: 18, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
  },
  {
    id: '10',
    name: 'Pantalon Chino Homme',
    slug: 'pantalon-chino-homme',
    description: 'Pantalon chino confortable et stylé',
    categoryId: '3',
    category: mockCategories[2],
    basePrice: 4200,
    salePrice: 2990,
    material: 'Coton',
    isActive: true,
    isFeatured: true,
    totalSold: 245,
    avgRating: 4.5,
    reviewCount: 76,
    images: [
      { id: '10', productId: '10', imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '10-1', productId: '10', size: '38', color: 'Beige', colorHex: '#F5F5DC', stockQuantity: 15, isActive: true },
      { id: '10-2', productId: '10', size: '40', color: 'Beige', colorHex: '#F5F5DC', stockQuantity: 20, isActive: true },
      { id: '10-3', productId: '10', size: '42', color: 'Navy', colorHex: '#000080', stockQuantity: 12, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
  {
    id: '11',
    name: 'Veste Blazer Homme',
    slug: 'veste-blazer-homme',
    description: 'Blazer élégant pour toutes occasions',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 8500,
    salePrice: 5990,
    material: 'Laine',
    isActive: true,
    isFeatured: false,
    totalSold: 156,
    avgRating: 4.7,
    reviewCount: 54,
    images: [
      { id: '11', productId: '11', imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '11-1', productId: '11', size: 'L', color: 'Noir', colorHex: '#000000', stockQuantity: 10, isActive: true },
      { id: '11-2', productId: '11', size: 'XL', color: 'Navy', colorHex: '#000080', stockQuantity: 8, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
  },
  // Produits Enfant
  {
    id: '12',
    name: 'Robe Fille Princesse',
    slug: 'robe-fille-princesse',
    description: 'Robe magnifique pour petite fille',
    categoryId: '1',
    category: mockCategories[0],
    basePrice: 2800,
    salePrice: 1990,
    material: 'Polyester',
    isActive: true,
    isFeatured: true,
    totalSold: 423,
    avgRating: 4.8,
    reviewCount: 145,
    images: [
      { id: '12', productId: '12', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '12-1', productId: '12', size: '4 ans', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 30, isActive: true },
      { id: '12-2', productId: '12', size: '6 ans', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 25, isActive: true },
      { id: '12-3', productId: '12', size: '8 ans', color: 'Bleu', colorHex: '#87CEEB', stockQuantity: 20, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  },
  {
    id: '13',
    name: 'Ensemble Garçon Sport',
    slug: 'ensemble-garcon-sport',
    description: 'Ensemble confortable pour garçon',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 3200,
    salePrice: 2290,
    material: 'Coton',
    isActive: true,
    isFeatured: true,
    totalSold: 289,
    avgRating: 4.6,
    reviewCount: 98,
    images: [
      { id: '13', productId: '13', imageUrl: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '13-1', productId: '13', size: '6 ans', color: 'Bleu', colorHex: '#4169E1', stockQuantity: 25, isActive: true },
      { id: '13-2', productId: '13', size: '8 ans', color: 'Rouge', colorHex: '#FF0000', stockQuantity: 20, isActive: true },
      { id: '13-3', productId: '13', size: '10 ans', color: 'Vert', colorHex: '#008000', stockQuantity: 18, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: '14',
    name: 'Sneakers Enfant Colorées',
    slug: 'sneakers-enfant-colorees',
    description: 'Sneakers confortables et colorées pour enfants',
    categoryId: '6',
    category: mockCategories[5],
    basePrice: 3500,
    salePrice: 2490,
    material: 'Synthétique',
    isActive: true,
    isFeatured: false,
    totalSold: 198,
    avgRating: 4.5,
    reviewCount: 67,
    images: [
      { id: '14', productId: '14', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '14-1', productId: '14', size: '28', color: 'Multicolore', colorHex: '#FFD700', stockQuantity: 15, isActive: true },
      { id: '14-2', productId: '14', size: '30', color: 'Multicolore', colorHex: '#FFD700', stockQuantity: 12, isActive: true },
      { id: '14-3', productId: '14', size: '32', color: 'Multicolore', colorHex: '#FFD700', stockQuantity: 10, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
  },
  // Produits Femme supplémentaires
  {
    id: '15',
    name: 'Robe Midi Élégante Femme',
    slug: 'robe-midi-elegante-femme',
    description: 'Robe midi parfaite pour toutes occasions',
    categoryId: '1',
    category: mockCategories[0],
    basePrice: 4800,
    salePrice: 3290,
    material: 'Viscose',
    isActive: true,
    isFeatured: true,
    totalSold: 567,
    avgRating: 4.7,
    reviewCount: 198,
    images: [
      { id: '15', productId: '15', imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '15-1', productId: '15', size: 'S', color: 'Noir', colorHex: '#000000', stockQuantity: 20, isActive: true },
      { id: '15-2', productId: '15', size: 'M', color: 'Noir', colorHex: '#000000', stockQuantity: 25, isActive: true },
      { id: '15-3', productId: '15', size: 'L', color: 'Bordeaux', colorHex: '#722F37', stockQuantity: 18, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
  },
  {
    id: '16',
    name: 'Top Femme Moderne',
    slug: 'top-femme-moderne',
    description: 'Top tendance et confortable',
    categoryId: '2',
    category: mockCategories[1],
    basePrice: 2200,
    salePrice: 1490,
    material: 'Coton',
    isActive: true,
    isFeatured: false,
    totalSold: 345,
    avgRating: 4.4,
    reviewCount: 112,
    images: [
      { id: '16', productId: '16', imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80', displayOrder: 0, isPrimary: true },
    ],
    variants: [
      { id: '16-1', productId: '16', size: 'S', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 30, isActive: true },
      { id: '16-2', productId: '16', size: 'M', color: 'Blanc', colorHex: '#FFFFFF', stockQuantity: 35, isActive: true },
      { id: '16-3', productId: '16', size: 'L', color: 'Rose', colorHex: '#FFB6C1', stockQuantity: 28, isActive: true },
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
  },
];

// Mock flash sale (ends in 24 hours from now)
export const mockFlashSale: FlashSale = {
  id: '1',
  name: 'Mega Flash Sale 🔥',
  nameAr: 'تخفيضات خاصة',
  description: 'Des prix fous sur une sélection de produits tendance. Faites vite, stocks limités!',
  discountPercentage: 50,
  startTime: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // Started 12 hours ago
  endTime: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(), // Ends in 12 hours
  bannerImageUrl: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1920&q=80',
  isActive: true,
  products: [
    { id: '1', flashSaleId: '1', productId: '1', flashPrice: 1990, maxQuantity: 50, soldQuantity: 32 },
    { id: '2', flashSaleId: '1', productId: '2', flashPrice: 2490, maxQuantity: 30, soldQuantity: 18 },
    { id: '3', flashSaleId: '1', productId: '5', flashPrice: 1990, maxQuantity: 40, soldQuantity: 25 },
    { id: '4', flashSaleId: '1', productId: '6', flashPrice: 2990, maxQuantity: 25, soldQuantity: 12 },
    { id: '5', flashSaleId: '1', productId: '8', flashPrice: 2490, maxQuantity: 35, soldQuantity: 20 },
  ],
};

// Helper to get flash sale products with their details
export const getFlashSaleProducts = (): Product[] => {
  return mockFlashSale.products
    .map((fp) => mockProducts.find((p) => p.id === fp.productId))
    .filter((p): p is Product => p !== undefined);
};

// Helper to get flash prices map
export const getFlashPricesMap = (): Record<string, number> => {
  const map: Record<string, number> = {};
  mockFlashSale.products.forEach((fp) => {
    map[fp.productId] = fp.flashPrice;
  });
  return map;
};

// Get trending products (most sold)
export const getTrendingProducts = (): Product[] => {
  return [...mockProducts].sort((a, b) => b.totalSold - a.totalSold);
};

// Get new arrivals (most recent)
export const getNewArrivals = (): Product[] => {
  return [...mockProducts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter((p) => p.isFeatured);
};

// Get products for Men (Homme)
export const getMenProducts = (): Product[] => {
  const menProductIds = ['9', '10', '11'];
  const menKeywords = ['homme', 'hommes'];
  return mockProducts.filter((p) => 
    menProductIds.includes(p.id) ||
    (menKeywords.some(keyword => 
      p.name.toLowerCase().includes(keyword.toLowerCase())
    ) && !p.name.toLowerCase().includes('femme') && !p.name.toLowerCase().includes('fille') && !p.name.toLowerCase().includes('garçon'))
  );
};

// Get products for Women (Femme)
export const getWomenProducts = (): Product[] => {
  const womenProductIds = ['1', '2', '3', '4', '8', '15', '16'];
  const womenKeywords = ['femme', 'femmes'];
  const excludeKeywords = ['garçon', 'fille', 'enfant', 'enfants', 'princesse', 'homme'];
  return mockProducts.filter((p) => 
    womenProductIds.includes(p.id) ||
    (womenKeywords.some(keyword => 
      p.name.toLowerCase().includes(keyword.toLowerCase())
    ) && !excludeKeywords.some(exclude => p.name.toLowerCase().includes(exclude)))
  );
};

// Get products for Kids (Enfants)
export const getKidsProducts = (): Product[] => {
  const kidsProductIds = ['12', '13', '14'];
  const kidsKeywords = ['enfant', 'enfants', 'fille', 'garçon', 'princesse'];
  return mockProducts.filter((p) => 
    kidsProductIds.includes(p.id) ||
    kidsKeywords.some(keyword => 
      p.name.toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

// Get new products (Nouveau) - products created in the last 7 days
export const getNewProducts = (): Product[] => {
  const sevenDaysAgo = Date.now() - (1000 * 60 * 60 * 24 * 7);
  return mockProducts
    .filter((p) => new Date(p.createdAt).getTime() >= sevenDaysAgo)
    .sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
};

// Get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return mockProducts.find((p) => p.slug === slug);
};

// Get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return mockCategories.find((c) => c.slug === slug);
};

// Get products by category slug
export const getProductsByCategorySlug = (slug: string): Product[] => {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  return mockProducts.filter((p) => p.categoryId === category.id);
};
