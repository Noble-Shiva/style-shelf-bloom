import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ProductInfoPanel } from "@/components/ProductInfoPanel";
import { UrgencySection } from "@/components/UrgencySection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DeliveryReturns } from "@/components/DeliveryReturns";
import { CustomerReviews } from "@/components/CustomerReviews";
import { SimilarProducts } from "@/components/SimilarProducts";
import StorefrontHeader from "@/components/StorefrontHeader";
import StorefrontFooter from "@/components/StorefrontFooter";

// Mock product data - in real app, this would come from API
const mockProduct = {
  id: "1",
  title: "Organic Rose Gold Serum",
  rating: 4.6,
  reviewCount: 847,
  description: "Transform your skin with our premium organic rose gold serum. Infused with 24K gold particles and natural botanicals for radiant, youthful skin.",
  originalPrice: 89.99,
  salePrice: 69.99,
  discount: 22,
  images: [
    "/src/assets/product-serum.jpg",
    "/src/assets/product-jewelry.jpg",
    "/src/assets/product-headphones.jpg",
  ],
  variants: {
    size: ["30ml", "50ml", "100ml"],
    type: ["Rose Gold", "Pure Gold", "Platinum"]
  },
  stock: 3,
  recentPurchases: 12,
  benefits: [
    { icon: "🌱", title: "100% Organic", description: "Natural ingredients only" },
    { icon: "🇮🇳", title: "Made in India", description: "Supporting local artisans" },
    { icon: "✨", title: "Clinically Tested", description: "Dermatologist approved" },
    { icon: "🔒", title: "Cruelty Free", description: "Never tested on animals" }
  ],
  deliveryInfo: {
    estimatedDays: "2-3",
    freeShipping: true,
    returnPolicy: "30-day money-back guarantee"
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useState(mockProduct);
  const [selectedVariants, setSelectedVariants] = useState({
    size: "30ml",
    type: "Rose Gold"
  });
  const [quantity, setQuantity] = useState(1);
  const [showStickyCart, setShowStickyCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 800;
      setShowStickyCart(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Adding to cart:", { product, selectedVariants, quantity });
  };

  const handleBuyNow = () => {
    // Buy now logic
    console.log("Buy now:", { product, selectedVariants, quantity });
  };

  return (
    <div className="min-h-screen bg-background">
      <StorefrontHeader />
      
      {/* Sticky Add to Cart - Mobile */}
      {showStickyCart && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border p-4 md:hidden">
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-secondary text-secondary-foreground py-3 px-4 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 button-gradient text-primary-foreground py-3 px-4 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Images */}
          <div>
            <ProductImageGallery images={product.images} />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <ProductInfoPanel
              product={product}
              selectedVariants={selectedVariants}
              onVariantChange={setSelectedVariants}
              quantity={quantity}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>

        {/* Urgency + Social Proof */}
        <UrgencySection stock={product.stock} recentPurchases={product.recentPurchases} />

        {/* Why You'll Love This */}
        <BenefitsSection benefits={product.benefits} />

        {/* Delivery & Returns */}
        <DeliveryReturns deliveryInfo={product.deliveryInfo} />

        {/* Customer Reviews */}
        <CustomerReviews 
          rating={product.rating} 
          reviewCount={product.reviewCount}
          productId={product.id}
        />

        {/* Similar Products */}
        <SimilarProducts currentProductId={product.id} />
      </main>

      <StorefrontFooter />
    </div>
  );
};

export default ProductDetail;