import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Star, Truck, Shield, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Products */}
      <section className="container py-16 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular skull caps, each featuring unique laser designs and premium quality materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-dark py-16">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lazer Effect?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another clothing brand. We're innovators pushing the boundaries of streetwear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Every skull cap is crafted with premium materials and precision laser technology for lasting durability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on all orders. Get your new skull cap delivered to your door in 2-3 business days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  Not happy with your purchase? We offer a 30-day return policy with full refund guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <Card className="bg-gradient-glow border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Be the first to know about new releases, exclusive designs, and special offers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
