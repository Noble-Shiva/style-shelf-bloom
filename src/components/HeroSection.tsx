import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury lifestyle products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-accent rounded-full animate-bounce" />
      
      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-background/90 backdrop-blur rounded-full text-sm font-medium text-foreground mb-6 animate-fade-up">
          <span className="h-2 w-2 bg-primary rounded-full mr-2" />
          New Collection Available
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-up text-shadow">
          Luxury
          <span className="block text-primary">Redefined</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up text-shadow">
          Discover our curated collection of premium products designed for the modern lifestyle
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button variant="hero" size="xl" className="group">
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
            <Play className="mr-2 h-5 w-5" />
            Watch Story
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-center space-x-8 mt-16 animate-fade-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-white/70 text-sm">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-white/70 text-sm">Satisfaction Rate</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-white/70 text-sm">Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;