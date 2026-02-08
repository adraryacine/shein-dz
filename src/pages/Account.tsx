import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Heart, Package, MapPin, CreditCard, Settings, LogOut, Award, Star } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { cn } from '@/lib/utils';

const Account = () => {
  const { items: cartItems, getSubtotal } = useCart();
  const { items: wishlistItems } = useWishlist();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mock user data
  const mockUser = {
    fullName: 'yacine.adrar',
    email: 'yacine.adrar@example.com',
    phone: '+213 550 00 00 00',
    membershipTier: 'gold' as const,
    pointsBalance: 1250,
    totalSpent: 45000,
    dailyStreak: 7,
    avatarUrl: undefined,
  };

  const membershipTiers = {
    bronze: { name: 'Bronze', color: '#CD7F32', discount: 0 },
    silver: { name: 'Silver', color: '#C0C0C0', discount: 5 },
    gold: { name: 'Gold', color: '#FFD700', discount: 10 },
  };

  const tier = membershipTiers[mockUser.membershipTier];

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
          {/* Profile Header */}
          <div className="glass-card p-6 md:p-8 mb-6 gradient-sunset relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border-4 border-white/30">
                {mockUser.avatarUrl ? (
                  <img
                    src={mockUser.avatarUrl}
                    alt={mockUser.fullName}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {mockUser.fullName}
                </h1>
                <p className="text-white/80 mb-4">{mockUser.email}</p>
                
                {/* Membership Badge */}
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Award className="w-5 h-5" style={{ color: tier.color }} />
                  <span className="text-white font-semibold">
                    Membre {tier.name} - {tier.discount}% de réduction
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{mockUser.pointsBalance}</div>
                  <div className="text-sm text-white/80">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{mockUser.dailyStreak}</div>
                  <div className="text-sm text-white/80">Jours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{mockUser.totalSpent.toLocaleString('fr-DZ')}</div>
                  <div className="text-sm text-white/80">DA dépensés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Link to="/wishlist" className="glass-card p-4 hover:scale-105 transition-transform">
              <Heart className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold">{wishlistItems.length}</div>
              <div className="text-sm text-muted-foreground">Favoris</div>
            </Link>
            <div className="glass-card p-4">
              <ShoppingBag className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold">{cartItems.length}</div>
              <div className="text-sm text-muted-foreground">Panier</div>
            </div>
            <div className="glass-card p-4">
              <Package className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Commandes</div>
            </div>
            <div className="glass-card p-4">
              <Star className="w-8 h-8 text-primary mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Avis</div>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orders */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Mes Commandes
              </h2>
              <p className="text-muted-foreground mb-4">
                Suivez vos commandes et consultez l'historique
              </p>
              <Button variant="outline" className="w-full">
                Voir toutes les commandes
              </Button>
            </div>

            {/* Addresses */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Mes Adresses
              </h2>
              <p className="text-muted-foreground mb-4">
                Gérez vos adresses de livraison
              </p>
              <Button variant="outline" className="w-full">
                Gérer les adresses
              </Button>
            </div>

            {/* Payment Methods */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Moyens de Paiement
              </h2>
              <p className="text-muted-foreground mb-4">
                Ajoutez et gérez vos cartes
              </p>
              <Button variant="outline" className="w-full">
                Gérer les paiements
              </Button>
            </div>

            {/* Settings */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Paramètres
              </h2>
              <p className="text-muted-foreground mb-4">
                Modifiez vos préférences et informations
              </p>
              <Button variant="outline" className="w-full">
                Modifier le profil
              </Button>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-6 text-center">
            <Button variant="ghost" className="text-destructive hover:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Account;

