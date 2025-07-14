import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StorefrontHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top announcement bar */}
        <div className="flex items-center justify-center py-2 text-sm text-muted-foreground border-b">
          <span className="animate-fade-up">
            Free shipping on orders over $100 • Get 10% off your first order with code WELCOME10
          </span>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <h1 className="text-2xl font-serif font-bold text-foreground">
              LUXE
            </h1>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">New In</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Women</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Men</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Beauty</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sale</a>
          </nav>
          
          {/* Search and actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop search */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-80"
              />
            </div>
            
            {/* Mobile search icon */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            
            {/* Shopping bag */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            
            {/* Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StorefrontHeader;