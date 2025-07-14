import { useState } from "react";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SimilarProductsProps {
  currentProductId: string;
}

// Mock similar products data
const mockProducts = [
  {
    id: "2",
    title: "Gold Necklace Set",
    price: 2499,
    originalPrice: 3199,
    rating: 4.5,
    reviews: 234,
    image: "/src/assets/product-jewelry.jpg",
    badge: "TRENDING",
    variant: "bestseller"
  },
  {
    id: "3",
    title: "Premium Headphones",
    price: 1899,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 156,
    image: "/src/assets/product-headphones.jpg",
    badge: "NEW",
    variant: "new"
  },
  {
    id: "4",
    title: "Designer Handbag",
    price: 3299,
    originalPrice: 4199,
    rating: 4.3,
    reviews: 89,
    image: "/src/assets/product-handbag.jpg",
    badge: "LIMITED",
    variant: "limited"
  },
  {
    id: "5",
    title: "Organic Green Tea",
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviews: 312,
    image: "/src/assets/product-tea.jpg",
    badge: "ORGANIC",
    variant: "organic"
  }
];

export const SimilarProducts = ({ currentProductId }: SimilarProductsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = mockProducts.filter(product => product.id !== currentProductId);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold text-foreground">
          You Might Also Like
        </h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover transition-all duration-300">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badge */}
              <Badge 
                variant={product.variant === "new" ? "secondary" : "destructive"}
                className="absolute top-3 left-3 text-xs"
              >
                {product.badge}
              </Badge>
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-background/80 hover:bg-background rounded-full shadow-md"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                </button>
                <button className="p-2 bg-background/80 hover:bg-background rounded-full shadow-md">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-foreground mb-2 line-clamp-2">
                {product.title}
              </h3>
              
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-foreground">
                  ₹{product.price}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              </div>
              
              <Button 
                size="sm" 
                className="w-full"
                variant="outline"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* One-click Upsell */}
      <div className="mt-8 p-4 bg-gradient-card rounded-xl border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-foreground mb-1">
              Complete Your Look
            </h3>
            <p className="text-sm text-muted-foreground">
              People who bought this also added these items
            </p>
          </div>
          <Button variant="hero" size="sm">
            Add Bundle to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};