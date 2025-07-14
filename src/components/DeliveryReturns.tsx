import { useState } from "react";
import { Truck, Package, Shield, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DeliveryInfo {
  estimatedDays: string;
  freeShipping: boolean;
  returnPolicy: string;
}

interface DeliveryReturnsProps {
  deliveryInfo: DeliveryInfo;
}

export const DeliveryReturns = ({ deliveryInfo }: DeliveryReturnsProps) => {
  const [zipCode, setZipCode] = useState("");
  const [deliveryEstimate, setDeliveryEstimate] = useState<string | null>(null);

  const checkDelivery = () => {
    if (zipCode.length === 6) {
      setDeliveryEstimate(`Delivery by ${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
        Delivery & Returns
      </h2>

      <div className="space-y-6">
        {/* Zip Code Checker */}
        <div>
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Check Delivery
          </h3>
          <div className="flex gap-2 max-w-md">
            <Input
              placeholder="Enter PIN code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              maxLength={6}
            />
            <Button onClick={checkDelivery} variant="outline">
              Check
            </Button>
          </div>
          {deliveryEstimate && (
            <p className="text-sm text-success mt-2">
              ✓ {deliveryEstimate}
            </p>
          )}
        </div>

        {/* Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Estimated Delivery */}
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">Fast Delivery</h4>
              <p className="text-sm text-muted-foreground">
                {deliveryInfo.estimatedDays} business days
              </p>
              {deliveryInfo.freeShipping && (
                <p className="text-sm text-success">Free shipping on this order</p>
              )}
            </div>
          </div>

          {/* Return Policy */}
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">Easy Returns</h4>
              <p className="text-sm text-muted-foreground">
                {deliveryInfo.returnPolicy}
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-sm text-primary hover:underline flex items-center gap-1">
                    Learn more <Info className="w-3 h-3" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium">Return Policy Details</h4>
                    <p className="text-sm text-muted-foreground">
                      • Free returns within 30 days
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • Original packaging required
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • Full refund or exchange available
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">Quality Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                30-day no-risk trial
              </p>
              <p className="text-sm text-success">
                100% satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};