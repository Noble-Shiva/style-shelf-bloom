import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

const RetargetingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems] = useState([
    "Premium Wireless Headphones",
    "Hydrating Face Serum"
  ]);

  useEffect(() => {
    // Simulate returning user detection
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-in-down">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-luxury p-4 max-w-md mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-5 w-5" />
            <div>
              <p className="font-semibold text-sm">Welcome back!</p>
              <p className="text-primary-foreground/90 text-sm">
                You have {cartItems.length} items in your cart
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-3">
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full"
          >
            Complete Your Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetargetingBanner;