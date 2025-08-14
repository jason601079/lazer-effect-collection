import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPanel = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCart();

  const freeShippingThreshold = 1000;
  const currentTotal = getTotalPrice();
  const amountForFreeShipping = freeShippingThreshold - currentTotal;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Cart</h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Free Shipping Message */}
        {currentTotal > 0 && amountForFreeShipping > 0 && (
          <div className="p-4 bg-muted/50 border-b border-border">
            <p className="text-sm text-center">
              Spend <span className="font-semibold text-primary">R{amountForFreeShipping.toFixed(2)}</span> more for free shipping!
            </p>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 space-y-4">
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button asChild variant="outline" onClick={closeCart}>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <Card key={`${item.product.id}-${item.selectedColor}`} className="p-4 bg-card/50">
                <div className="flex gap-3">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          Colour: {item.selectedColor}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">R {item.product.price.toFixed(2)}</span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            {/* Promo Code */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Have a code?</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>R {currentTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                <span>Total</span>
                <span>R {currentTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full" size="lg" variant="hero">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPanel;