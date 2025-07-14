import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Mail, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // In a real app, you'd send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Discount banner */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Gift className="h-8 w-8 opacity-20" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="h-6 w-6 opacity-20" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Get 10% Off Your First Order
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Join our community and unlock exclusive deals, early access, and style inspiration
              </p>
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Use code:</span>
                <span className="text-lg font-bold">WELCOME10</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary">NEWSLETTER</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Stay in the Loop
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Be the first to know about new arrivals, exclusive offers, and behind-the-scenes content. 
                Plus, get styling tips from our expert team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Early access to sales & new collections</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Exclusive styling tips and lookbooks</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Members-only discounts up to 30% off</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-foreground mb-2">
                    Referral Code (Optional)
                  </label>
                  <Input
                    id="referral"
                    type="text"
                    placeholder="Enter referral code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Get an extra 5% off when you use a friend's code
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "Welcome to LUXE!" : "Get My 10% Discount"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe at any time.
                </p>
              </form>
              
              {isSubscribed && (
                <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg text-center">
                  <p className="text-success font-medium">
                    Welcome! Check your email for your discount code.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Social proof */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Join 50,000+ style enthusiasts</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">
                and counting...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;