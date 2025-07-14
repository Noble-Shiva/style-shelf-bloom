import StorefrontHeader from "@/components/StorefrontHeader";
import HeroSection from "@/components/HeroSection";
import CategoryPanel from "@/components/CategoryPanel";
import FeaturedProducts from "@/components/FeaturedProducts";
import RecommendationsSection from "@/components/RecommendationsSection";
import StorytellingSection from "@/components/StorytellingSection";
import UGCGallery from "@/components/UGCGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import NewsletterSection from "@/components/NewsletterSection";
import StorefrontFooter from "@/components/StorefrontFooter";
import PurchasePopup from "@/components/PurchasePopup";
import RetargetingBanner from "@/components/RetargetingBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StorefrontHeader />
      <HeroSection />
      <CategoryPanel />
      <FeaturedProducts />
      <RecommendationsSection />
      <StorytellingSection />
      <UGCGallery />
      <TestimonialsSlider />
      <NewsletterSection />
      <StorefrontFooter />
      
      {/* Growth enabler components */}
      <PurchasePopup />
      <RetargetingBanner />
    </div>
  );
};

export default Index;
