import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Youtube, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-black text-background dark:text-foreground mt-20 pb-24 lg:pb-8">
      {/* Newsletter section */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="glass-card p-8 md:p-12 gradient-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Rejoignez la famille ModeDz
              </h3>
              <p className="text-white/80">
                Recevez -10% sur votre première commande + des offres exclusives
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-w-[250px]"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-2xl font-bold text-white">
                ModeDz
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              La mode ultra-rapide algérienne. Livraison 24-48h partout en Algérie.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/women" className="hover:text-primary transition-colors">Femme</Link></li>
              <li><Link to="/men" className="hover:text-primary transition-colors">Homme</Link></li>
              <li><Link to="/kids" className="hover:text-primary transition-colors">Enfants</Link></li>
              <li><Link to="/new" className="hover:text-primary transition-colors">Nouveautés</Link></li>
              <li><Link to="/flash-sales" className="hover:text-primary transition-colors">Flash Sales ⚡</Link></li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/track-order" className="hover:text-primary transition-colors">Suivre ma commande</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Livraison</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Retours</Link></li>
              <li><Link to="/size-guide" className="hover:text-primary transition-colors">Guide des tailles</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Alger, Algérie
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                0550 00 00 00
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contact@modedz.com
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods & copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ModeDz. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Paiement sécurisé:</span>
            <div className="flex gap-2">
              <div className="px-3 py-1 glass rounded text-xs font-medium">COD</div>
              <div className="px-3 py-1 glass rounded text-xs font-medium">CIB</div>
              <div className="px-3 py-1 glass rounded text-xs font-medium">BaridiMob</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
