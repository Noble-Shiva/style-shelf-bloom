import { useState } from "react";
import { Star, Filter, ChevronDown, Image, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface CustomerReviewsProps {
  rating: number;
  reviewCount: number;
  productId: string;
}

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    author: "Priya Sharma",
    rating: 5,
    title: "Amazing quality and fast delivery!",
    content: "This serum has transformed my skin completely. I've been using it for 3 months and the results are incredible. Highly recommended!",
    date: "2024-01-15",
    verified: true,
    helpful: 24,
    images: ["/src/assets/product-serum.jpg"],
    variant: "Rose Gold, 30ml"
  },
  {
    id: "2",
    author: "Rajesh Kumar",
    rating: 4,
    title: "Good product, worth the price",
    content: "Bought this for my wife and she loves it. The packaging is premium and the product quality is excellent. Will buy again.",
    date: "2024-01-10",
    verified: true,
    helpful: 18,
    images: [],
    variant: "Pure Gold, 50ml"
  },
  {
    id: "3",
    author: "Ananya Patel",
    rating: 5,
    title: "Best purchase ever!",
    content: "I was skeptical at first but this product exceeded my expectations. My skin feels so much smoother and looks radiant.",
    date: "2024-01-08",
    verified: true,
    helpful: 31,
    images: [],
    variant: "Rose Gold, 30ml"
  }
];

export const CustomerReviews = ({ rating, reviewCount, productId }: CustomerReviewsProps) => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showAll, setShowAll] = useState(false);

  const ratingDistribution = [
    { stars: 5, count: 542, percentage: 64 },
    { stars: 4, count: 203, percentage: 24 },
    { stars: 3, count: 76, percentage: 9 },
    { stars: 2, count: 17, percentage: 2 },
    { stars: 1, count: 9, percentage: 1 }
  ];

  const displayedReviews = showAll ? mockReviews : mockReviews.slice(0, 2);

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
        Customer Reviews
      </h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground mb-2">{rating}</div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Based on {reviewCount} reviews
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2">
              <span className="text-sm w-8">{item.stars}★</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-12">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reviews</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="verified">Verified Only</SelectItem>
            <SelectItem value="photos">With Photos</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="helpful">Most Helpful</SelectItem>
            <SelectItem value="rating-high">Rating: High to Low</SelectItem>
            <SelectItem value="rating-low">Rating: Low to High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}`} />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{review.author}</span>
                  {review.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified Purchase
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                
                <h4 className="font-medium text-foreground mb-2">
                  {review.title}
                </h4>
                
                <p className="text-muted-foreground mb-3">
                  {review.content}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">
                    Variant: {review.variant}
                  </span>
                </div>
                
                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border border-border"
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <ThumbsDown className="w-4 h-4" />
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {!showAll && mockReviews.length > 2 && (
        <div className="text-center mt-6">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2"
          >
            Show More Reviews
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};