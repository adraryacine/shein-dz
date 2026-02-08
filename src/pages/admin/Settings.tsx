import { useEffect, useState } from 'react';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Settings = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [settings, setSettings] = useState({
    shopName: 'ModeDz',
    shopDescription: 'Votre boutique de mode en ligne',
    email: 'contact@modedz.dz',
    phone: '+213 550 00 00 00',
    address: '',
    freeShippingThreshold: 5000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Paramètres enregistrés avec succès!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      
      <main className="pt-20 lg:pt-28">
        <div className="mt-8">
          <FeaturesBar />
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Paramètres de la Boutique
            </h1>
            <p className="text-muted-foreground">
              Configurez les paramètres de votre boutique
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Settings */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-primary" />
                Informations Générales
              </h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nom de la Boutique *
                </label>
                <Input
                  value={settings.shopName}
                  onChange={(e) => setSettings({ ...settings, shopName: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={settings.shopDescription}
                  onChange={(e) => setSettings({ ...settings, shopDescription: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email de Contact *
                  </label>
                  <Input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone *
                  </label>
                  <Input
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Adresse
                </label>
                <Textarea
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  rows={2}
                />
              </div>
            </div>

            {/* Shipping Settings */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-bold mb-4">Livraison</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Seuil de Livraison Gratuite (DA)
                </label>
                <Input
                  type="number"
                  value={settings.freeShippingThreshold}
                  onChange={(e) => setSettings({ ...settings, freeShippingThreshold: parseInt(e.target.value) || 0 })}
                  min="0"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Montant minimum pour la livraison gratuite
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit" className="gradient-primary text-white font-semibold">
                <Save className="w-4 h-4 mr-2" />
                Enregistrer les Paramètres
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

export default Settings;

