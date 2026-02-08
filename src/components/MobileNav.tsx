import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Accueil' },
  { href: '/search', icon: Search, label: 'Recherche' },
  { href: '/wishlist', icon: Heart, label: 'Favoris', badge: 'wishlist' },
  { href: '/cart', icon: ShoppingBag, label: 'Panier', badge: 'cart' },
  { href: '/auth', icon: User, label: 'Compte' },
];

export const MobileNav = () => {
  const location = useLocation();
  const { getTotalItems, openCart } = useCart();
  const { items: wishlistItems } = useWishlist();

  const cartCount = getTotalItems();
  const wishlistCount = wishlistItems.length;

  const getBadgeCount = (type?: string) => {
    if (type === 'cart') return cartCount;
    if (type === 'wishlist') return wishlistCount;
    return 0;
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href === '/cart') {
      e.preventDefault();
      openCart();
    }
  };

  return (
    <nav className="mobile-nav lg:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const badgeCount = getBadgeCount(item.badge);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <Icon className={cn(
                  "w-6 h-6 transition-transform",
                  isActive && "scale-110"
                )} />
                {badgeCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full gradient-primary text-white text-[10px] flex items-center justify-center font-bold">
                    {badgeCount > 9 ? '9+' : badgeCount}
                  </span>
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium",
                isActive && "font-semibold"
              )}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-8 h-1 gradient-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
