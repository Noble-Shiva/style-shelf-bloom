import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Sparkles } from "lucide-react";
import productSerum from "@/assets/product-serum.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";
import productHandbag from "@/assets/product-handbag.jpg";

const recommendations = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: 89,
    image: productSerum,
    reason: "Based on your skincare interests",
    confidence: 95,
  },
  {
    id: 2,
    name: "Gold Statement Earrings",
    price: 159,
    image: productJewelry,
    reason: "Customers also bought",
    confidence: 88,
  },
  {
    id: 3,
    name: "Minimalist Leather Tote",
    price: 245,
    image: productHandbag,
    reason: "Perfect match for your style",
    confidence: 92,
  },
];

const RecommendationsSection = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Sparkles className="h-6 w-6 text-primary mr-3" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Recommended for You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* AI confidence badge */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {product.confidence}% match
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <p className="text-xs text-primary font-medium mb-2">
                  {product.reason}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-foreground mb-4">
                  ${product.price}
                </p>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="cart" size="sm" className="flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Recommendations
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Powered by AI • Updates based on your preferences
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;