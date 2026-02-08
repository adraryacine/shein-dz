import { Gift, Truck, Shield, RotateCcw } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Livraison 24-48h',
    description: 'Partout en Algérie',
  },
  {
    icon: Shield,
    title: 'Paiement Sécurisé',
    description: 'COD, CIB, BaridiMob',
  },
  {
    icon: RotateCcw,
    title: 'Retours Faciles',
    description: 'Sous 7 jours',
  },
  {
    icon: Gift,
    title: 'Points Fidélité',
    description: 'Gagnez à chaque achat',
  },
];

export const FeaturesBar = () => {
  return (
    <section className="py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
