import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, User, Sparkles } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';

const navLinks = [
  { href: '/women', label: 'Femme' },
  { href: '/men', label: 'Homme' },
  { href: '/kids', label: 'Enfants' },
  { href: '/', label: '⚡ Flash Sales', highlight: true },
  { href: '/new', label: 'Nouveau' },
];

export const Header = () => {
  const location = useLocation();
  const { openCart, getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = getTotalItems();
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top bar - desktop only */}
        <div className="hidden lg:flex items-center justify-between py-2 text-xs border-b border-border/50">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              🚚 Livraison rapide 24-48h
            </span>
            <span className="text-muted-foreground">
              📞 0550 00 00 00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/track-order" className="text-muted-foreground hover:text-primary transition-colors">
              Suivre ma commande
            </Link>
            <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
              Aide
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 glass">
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-all",
                      link.highlight
                        ? "gradient-accent text-white"
                        : "hover:bg-primary/10",
                      location.pathname === link.href && "bg-primary/10"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg font-medium hover:bg-primary/10 flex items-center gap-3"
                >
                  <User className="w-5 h-5" />
                  Mon Compte
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-gradient hidden sm:block">
              ModeDz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-xl font-medium transition-all",
                  link.highlight
                    ? "flash-badge"
                    : "hover:bg-primary/10",
                  location.pathname === link.href && !link.highlight && "bg-primary/10 text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ModeToggle />
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="relative"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-bold animate-bounce-in">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Account - desktop */}
            <Link to="/auth" className="hidden lg:block">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Search bar - expandable */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            showSearch ? "h-16 opacity-100" : "h-0 opacity-0"
          )}
        >
          <div className="py-3">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher des produits, catégories..."
                className="pl-12 pr-12 h-12 rounded-full glass border-primary/20 focus:border-primary"
                autoFocus={showSearch}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowSearch(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
