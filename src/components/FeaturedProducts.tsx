import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productHandbag from "@/assets/product-handbag.jpg";
import productTea from "@/assets/product-tea.jpg";

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: 89,
    originalPrice: 120,
    image: productSerum,
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: "Gold Statement Earrings",
    price: 159,
    image: productJewelry,
    badge: "New",
    badgeType: "new",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: productHeadphones,
    badge: "Limited",
    badgeType: "limited",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Minimalist Leather Tote",
    price: 245,
    image: productHandbag,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 5,
    name: "Organic Tea Collection",
    price: 45,
    image: productTea,
    badge: "New",
    badgeType: "new",
    rating: 4.9,
    reviews: 124,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked essentials that define modern luxury and timeless elegance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product badge */}
              {product.badge && (
                <div className={`badge-${product.badgeType}`}>
                  {product.badge}
                </div>
              )}
              
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="cart" className="rounded-full">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Urgent inventory indicator */}
                {product.id === 3 && (
                  <div className="absolute bottom-3 left-3 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Only 2 left!
                  </div>
                )}
              </div>
              
              {/* Product info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                {/* Add to cart button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:variant-cart group-hover:text-success-foreground transition-all duration-300"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;