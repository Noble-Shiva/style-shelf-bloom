import { Sparkles, Shirt, Watch, Gem, Home, Coffee } from "lucide-react";

const categories = [
  { name: "New In", icon: Sparkles, count: "24 items" },
  { name: "Fashion", icon: Shirt, count: "156 items" },
  { name: "Accessories", icon: Watch, count: "89 items" },
  { name: "Jewelry", icon: Gem, count: "67 items" },
  { name: "Home", icon: Home, count: "134 items" },
  { name: "Lifestyle", icon: Coffee, count: "45 items" },
];

const CategoryPanel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every aspect of your lifestyle
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group flex-shrink-0 text-center cursor-pointer animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-card border border-border flex items-center justify-center group-hover:shadow-hover transition-all duration-300">
                <category.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPanel;