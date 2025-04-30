
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "../../types/neighborhood";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Resident Reviews</span>
          <span className="text-sm">{reviews.length} reviews</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-3 border rounded-lg">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              
              <div className="mt-3 text-sm">{review.content}</div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {review.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          
          {reviews.length > 5 && (
            <div className="flex justify-center mt-4">
              <Button variant="outline">View All Reviews</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
