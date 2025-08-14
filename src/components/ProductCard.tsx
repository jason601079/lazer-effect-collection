import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-glow hover:border-primary/30">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
          <div className="flex gap-1">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-border"
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
        
        <div className="pt-2">
          <Button asChild variant="outline" className="w-full">
            <Link to={`/product/${product.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
      
      {!product.inStock && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <span className="text-lg font-semibold text-muted-foreground">Out of Stock</span>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;