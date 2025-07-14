import { useState, useEffect } from "react";
import { ShoppingBag, MapPin } from "lucide-react";

const PurchasePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(0);

  const recentPurchases = [
    { name: "Sarah", location: "Los Angeles", product: "Hydrating Face Serum", time: "2 minutes ago" },
    { name: "Mike", location: "New York", product: "Gold Statement Earrings", time: "5 minutes ago" },
    { name: "Emma", location: "Chicago", product: "Premium Wireless Headphones", time: "8 minutes ago" },
    { name: "Alex", location: "Miami", product: "Minimalist Leather Tote", time: "12 minutes ago" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(true);
      setCurrentPurchase(prev => (prev + 1) % recentPurchases.length);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const purchase = recentPurchases[currentPurchase];

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left">
      <div className="bg-background border border-border rounded-lg shadow-luxury p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              <span className="font-semibold">{purchase.name}</span> from{" "}
              <span className="inline-flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {purchase.location}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              just purchased <span className="font-medium">{purchase.product}</span>
            </p>
            <p className="text-xs text-muted-foreground">{purchase.time}</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePopup;