// Core types for ModeDz e-commerce platform

export type MembershipTier = 'bronze' | 'silver' | 'gold';
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PaymentMethod = 'cod' | 'cib' | 'edahabia' | 'baridimob' | 'ccp';
export type SizeAccuracy = 'runs_small' | 'true_to_size' | 'runs_large';
export type AppRole = 'admin' | 'moderator' | 'user';

export interface User {
  id: string;
  email: string;
  fullName?: string;
  phone?: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  pointsBalance: number;
  totalSpent: number;
  membershipTier: MembershipTier;
  dailyStreak: number;
  lastCheckIn?: string;
  isBlacklisted: boolean;
  avatarUrl?: string;
  createdAt: string;
}

export interface Address {
  id: string;
  userId: string;
  label: string;
  fullName: string;
  phone: string;
  wilaya: string;
  commune: string;
  addressLine: string;
  isDefault: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  imageUrl?: string;
  parentId?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  description?: string;
  descriptionAr?: string;
  categoryId?: string;
  category?: Category;
  basePrice: number;
  salePrice?: number;
  material?: string;
  isActive: boolean;
  isFeatured: boolean;
  totalSold: number;
  avgRating: number;
  reviewCount: number;
  images: ProductImage[];
  variants: ProductVariant[];
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size: string;
  color: string;
  colorHex?: string;
  sku?: string;
  stockQuantity: number;
  isActive: boolean;
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  displayOrder: number;
  isPrimary: boolean;
}

export interface FlashSale {
  id: string;
  name: string;
  nameAr?: string;
  description?: string;
  discountPercentage: number;
  startTime: string;
  endTime: string;
  bannerImageUrl?: string;
  isActive: boolean;
  products: FlashSaleProduct[];
}

export interface FlashSaleProduct {
  id: string;
  flashSaleId: string;
  productId: string;
  product?: Product;
  flashPrice: number;
  maxQuantity?: number;
  soldQuantity: number;
}

export interface CartItem {
  id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  price: number; // Current price (may include flash sale price)
}

export interface Order {
  id: string;
  userId?: string;
  orderNumber: string;
  status: OrderStatus;
  subtotal: number;
  shippingCost: number;
  discountAmount: number;
  pointsUsed: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: string;
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  notes?: string;
  promoCode?: string;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  wilaya: string;
  commune: string;
  addressLine: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId?: string;
  variantId?: string;
  productName: string;
  variantInfo?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Review {
  id: string;
  userId?: string;
  user?: { fullName: string; avatarUrl?: string };
  productId: string;
  orderItemId?: string;
  rating: number;
  title?: string;
  content?: string;
  sizeAccuracy?: SizeAccuracy;
  helpfulCount: number;
  isVerifiedPurchase: boolean;
  images: ReviewImage[];
  createdAt: string;
}

export interface ReviewImage {
  id: string;
  reviewId: string;
  imageUrl: string;
}

export interface PointsTransaction {
  id: string;
  userId: string;
  points: number;
  type: string;
  description?: string;
  referenceId?: string;
  createdAt: string;
}

export interface PromoCode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderAmount?: number;
  maxUses?: number;
  usedCount: number;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  linkUrl?: string;
  displayOrder: number;
  isActive: boolean;
}

// Helper type for countdown timers
export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// Points action types and values
export const POINTS_CONFIG = {
  DAILY_CHECK_IN: 10,
  WRITE_REVIEW: 50,
  UPLOAD_PHOTO: 30,
  VERIFY_EMAIL: 100,
  VERIFY_PHONE: 50,
  FIRST_ORDER: 100,
  POINTS_TO_DA_RATIO: 1, // 100 points = 100 DA
} as const;

// Membership tier thresholds and benefits
export const MEMBERSHIP_TIERS = {
  bronze: {
    name: 'Bronze',
    nameAr: 'برونز',
    threshold: 0,
    discount: 0,
    freeShipping: false,
    color: '#CD7F32',
  },
  silver: {
    name: 'Silver',
    nameAr: 'فضي',
    threshold: 5000,
    discount: 5,
    freeShipping: false,
    color: '#C0C0C0',
  },
  gold: {
    name: 'Gold',
    nameAr: 'ذهبي',
    threshold: 15000,
    discount: 10,
    freeShipping: true,
    color: '#FFD700',
  },
} as const;
