import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem, openCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, product.colors[selectedColor]);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
    setTimeout(() => {
      openCart();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-primary">
              R{product.price.toFixed(2)}
            </div>

            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Color: {product.colors[selectedColor]}</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-primary' : 'border-border'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase() === 'black' ? '#000' :
                                     color.toLowerCase() === 'purple' ? '#8B5CF6' :
                                     color.toLowerCase() === 'grey' ? '#6B7280' :
                                     color.toLowerCase() === 'navy' ? '#1E3A8A' : color
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1"
                  size="lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              {product.inStock && (
                <Button variant="hero" size="lg" className="w-full">
                  Buy Now
                </Button>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <Badge variant={product.inStock ? "default" : "destructive"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
              {product.inStock && (
                <span className="text-sm text-muted-foreground">
                  Ready to ship
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Product Features */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Card key={relatedProduct.id} className="group overflow-hidden">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                      <p className="text-primary font-bold">R{relatedProduct.price.toFixed(2)}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;