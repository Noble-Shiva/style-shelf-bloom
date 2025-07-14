import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Instagram, ExternalLink } from "lucide-react";

const ugcPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    username: "@sarah_style",
    product: "Hydrating Face Serum",
    price: 89,
    likes: 245,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
    username: "@fashion_forward",
    product: "Gold Statement Earrings",
    price: 159,
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    username: "@minimalist_mode",
    product: "Minimalist Leather Tote",
    price: 245,
    likes: 312,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    username: "@tech_lifestyle",
    product: "Premium Wireless Headphones",
    price: 299,
    likes: 167,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    username: "@wellness_daily",
    product: "Organic Tea Collection",
    price: 45,
    likes: 203,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    username: "@home_curator",
    product: "Luxury Candle Set",
    price: 75,
    likes: 134,
  },
];

const UGCGallery = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-6 w-6 text-primary mr-3" />
            <span className="text-sm font-medium text-primary tracking-wider">USER GENERATED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Shop the Look
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by our community. Tap any image to shop the featured products.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ugcPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <img
                src={post.image}
                alt={`Post by ${post.username}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 text-white text-sm">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium mb-1">{post.username}</p>
                  <p className="text-white/80 text-xs mb-2">{post.product}</p>
                  <Button size="sm" variant="secondary" className="w-full">
                    <ShoppingBag className="h-3 w-3 mr-2" />
                    Shop ${post.price}
                  </Button>
                </div>
              </div>
              
              {/* Instagram icon */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="mr-4">
            <Instagram className="h-5 w-5 mr-2" />
            Follow @luxe_official
          </Button>
          <Button variant="outline" size="lg">
            <ExternalLink className="h-5 w-5 mr-2" />
            Share Your Look #LuxeStyle
          </Button>
        </div>
        
        {/* Hashtag engagement */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Join thousands sharing their LUXE moments
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-muted rounded-full">#LuxeStyle</span>
            <span className="px-3 py-1 bg-muted rounded-full">#SustainableLuxury</span>
            <span className="px-3 py-1 bg-muted rounded-full">#TimelessDesign</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCGallery;