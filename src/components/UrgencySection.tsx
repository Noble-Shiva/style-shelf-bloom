import { AlertTriangle, Clock, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UrgencySectionProps {
  stock: number;
  recentPurchases: number;
}

export const UrgencySection = ({ stock, recentPurchases }: UrgencySectionProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Stock Alert */}
        <div className="flex items-center gap-3 text-warning">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <p className="font-medium">Only {stock} left in stock!</p>
            <p className="text-sm text-muted-foreground">Order now to avoid missing out</p>
          </div>
        </div>

        {/* Recent Purchases */}
        <div className="flex items-center gap-3 text-success">
          <TrendingUp className="w-5 h-5" />
          <div>
            <p className="font-medium">{recentPurchases} people bought this in the last hour</p>
            <p className="text-sm text-muted-foreground">High demand item</p>
          </div>
        </div>

        {/* Time Pressure */}
        <div className="flex items-center gap-3 text-primary">
          <Clock className="w-5 h-5" />
          <div>
            <p className="font-medium">Limited time offer</p>
            <p className="text-sm text-muted-foreground">Sale ends in 2 days</p>
          </div>
        </div>
      </div>

      {/* Live Activity */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Sarah from Mumbai just bought this item</span>
        </div>
      </div>
    </div>
  );
};