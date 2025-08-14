import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Filter, Grid3X3, List } from "lucide-react";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skull Caps Collection
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive range of laser-designed skull caps. Each piece is crafted with precision and style.
          </p>
        </div>

        {/* Filters & View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <span className="text-sm text-muted-foreground">
              {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* More Products Coming */}
        <div className="mt-16 text-center space-y-6 py-16 border-t border-border/40">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">More Products On The Way</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We're constantly working on new designs and styles. Stay tuned for our upcoming releases!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Notify Me
            </Button>
            <Button variant="glow" size="lg">
              Follow Updates
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>• New Designs</span>
            <span>• Limited Editions</span>
            <span>• Color Variations</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;