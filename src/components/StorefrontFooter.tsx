import { MessageCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorefrontFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">LUXE</h3>
            <p className="text-background/80 leading-relaxed">
              Redefining luxury through sustainable practices and timeless design. 
              Every piece tells a story of craftsmanship and purpose.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Sale</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          {/* Support links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Track Your Order</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>
        
        {/* Customer service banner */}
        <div className="border-t border-background/20 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-semibold">24/7 Chat Support</h5>
              <p className="text-sm text-background/80">Get instant help with our live chat</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h5 className="font-semibold">Phone Support</h5>
              <p className="text-sm text-background/80">Call us at 1-800-LUXE-SHOP</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h5 className="font-semibold">WhatsApp</h5>
              <p className="text-sm text-background/80">Message us for quick assistance</p>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-background/80">
                © 2024 LUXE. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Accessibility</a>
              </div>
            </div>
            
            {/* Payment methods */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-background/80 mr-2">We accept:</span>
              <div className="flex space-x-2">
                {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
                  <div key={method} className="w-8 h-5 bg-background/20 rounded border border-background/30 flex items-center justify-center">
                    <span className="text-xs text-background/60">{method.slice(0, 2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StorefrontFooter;