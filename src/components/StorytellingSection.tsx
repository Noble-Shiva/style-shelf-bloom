import { Button } from "@/components/ui/button";
import { Leaf, Award, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Ethically sourced materials and eco-friendly practices"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully crafted with attention to every detail"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by and for people who value authenticity"
  },
  {
    icon: Heart,
    title: "Purposeful",
    description: "Every purchase supports meaningful causes"
  }
];

const StorytellingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Our Story of
                <span className="block text-primary">Craftsmanship</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to redefine luxury through sustainable practices and timeless design. 
                Every piece in our collection tells a story of artisanal excellence and ethical responsibility.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="space-y-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <Button variant="premium" size="lg">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                Sustainability Report
              </Button>
            </div>
          </div>
          
          {/* Visual content */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
              {/* Placeholder for video or image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Crafted with Love</h3>
                    <p className="text-muted-foreground">Watch our artisans at work</p>
                  </div>
                  <Button variant="ghost" className="mt-4">
                    Play Video
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-xl p-6 shadow-card">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Sustainable</div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              B-Corp Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;