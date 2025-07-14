import { useState } from "react";
import { Star, Heart, Share2, ShoppingCart, Zap, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductInfoPanelProps {
  product: {
    title: string;
    rating: number;
    reviewCount: number;
    description: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    variants: {
      size: string[];
      type: string[];
    };
  };
  selectedVariants: {
    size: string;
    type: string;
  };
  onVariantChange: (variants: { size: string; type: string }) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export const ProductInfoPanel = ({
  product,
  selectedVariants,
  onVariantChange,
  quantity,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}: ProductInfoPanelProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleVariantChange = (type: string, value: string) => {
    onVariantChange({ ...selectedVariants, [type]: value });
  };

  const adjustQuantity = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">BESTSELLER</Badge>
          <Badge variant="outline" className="text-xs">NEW</Badge>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-foreground mb-3">
          {product.title}
        </h1>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-foreground">
            ₹{product.salePrice}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            ₹{product.originalPrice}
          </span>
          <Badge variant="destructive" className="text-xs">
            {product.discount}% OFF
          </Badge>
        </div>
        <p className="text-sm text-success">
          You save ₹{(product.originalPrice - product.salePrice).toFixed(2)}
        </p>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Variants */}
      <div className="space-y-4">
        {/* Size Selection */}
        <div>
          <h3 className="font-medium mb-3">Size</h3>
          <div className="flex gap-2">
            {product.variants.size.map((size) => (
              <button
                key={size}
                onClick={() => handleVariantChange("size", size)}
                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedVariants.size === size
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Type Selection */}
        <div>
          <h3 className="font-medium mb-3">Type</h3>
          <div className="flex gap-2">
            {product.variants.type.map((type) => (
              <button
                key={type}
                onClick={() => handleVariantChange("type", type)}
                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedVariants.type === type
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => adjustQuantity(-1)}
              className="p-2 hover:bg-muted"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => adjustQuantity(1)}
              className="p-2 hover:bg-muted"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 rounded-lg border border-border hover:bg-muted"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            <button className="p-2 rounded-lg border border-border hover:bg-muted">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onAddToCart}
            variant="secondary"
            size="lg"
            className="flex-1"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            onClick={onBuyNow}
            variant="hero"
            size="lg"
            className="flex-1"
          >
            <Zap className="w-5 h-5 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          SSL Secured
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          Verified Reviews
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          Easy Returns
        </div>
      </div>
    </div>
  );
};