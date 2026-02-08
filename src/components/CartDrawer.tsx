import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal, getTotalItems } = useCart();
  const subtotal = getSubtotal();
  const itemCount = getTotalItems();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col glass">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Mon Panier
            {itemCount > 0 && (
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                {itemCount} article{itemCount > 1 ? 's' : ''}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center py-12">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Votre panier est vide</h3>
              <p className="text-sm text-muted-foreground">
                Découvrez nos produits tendance !
              </p>
            </div>
            <Button onClick={closeCart} className="gradient-primary mt-4">
              Continuer mes achats
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 glass-card p-3">
                    {/* Product image */}
                    <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={item.product.images?.[0]?.imageUrl || '/placeholder.svg'}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.variant.size} • {item.variant.color}
                      </p>
                      <p className="font-semibold text-primary">
                        {item.price.toLocaleString('fr-DZ')} DA
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1 glass rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                          aria-label="Réduire la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-4">
              {/* Free shipping progress */}
              {subtotal < 5000 && (
                <div className="glass-card p-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Livraison gratuite à partir de</span>
                    <span className="font-semibold">5 000 DA</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / 5000) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Plus que {(5000 - subtotal).toLocaleString('fr-DZ')} DA !
                  </p>
                </div>
              )}

              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Sous-total</span>
                <span className="text-xl font-bold text-gradient">
                  {subtotal.toLocaleString('fr-DZ')} DA
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <Link to="/checkout" onClick={closeCart}>
                  <Button className="w-full gradient-primary text-white font-semibold h-12 text-base">
                    Passer la commande
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={closeCart}
                >
                  Continuer mes achats
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
