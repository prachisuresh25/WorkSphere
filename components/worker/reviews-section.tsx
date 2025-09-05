"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Flag } from "lucide-react"

const mockReviews = [
  {
    id: 1,
    customerName: "Priya Sharma",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Excellent service! Rajesh was very professional and thorough. My house was spotless after the cleaning. Highly recommended!",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    customerName: "Amit Patel",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Good cleaning service. Arrived on time and did a decent job. Could have been more thorough with the bathroom cleaning.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    customerName: "Sunita Reddy",
    rating: 5,
    date: "2024-01-05",
    comment:
      "Amazing work! Very punctual and professional. Used eco-friendly products as requested. Will definitely book again.",
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    customerName: "Rohit Kumar",
    rating: 4,
    date: "2023-12-28",
    comment:
      "Satisfied with the service. Good attention to detail and reasonable pricing. Communication could be improved.",
    helpful: 6,
    verified: false,
  },
]

interface ReviewsSectionProps {
  workerId: string
}

export function ReviewsSection({ workerId }: ReviewsSectionProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 3)

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: mockReviews.filter((review) => review.rating === rating).length,
    percentage: (mockReviews.filter((review) => review.rating === rating).length / mockReviews.length) * 100,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Reviews & Ratings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1">Based on {mockReviews.length} reviews</div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percentage}%` }} />
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900">Customer Reviews</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{review.customerName}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Flag className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-gray-700 mb-3">{review.comment}</p>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {mockReviews.length > 3 && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAllReviews(!showAllReviews)}>
              {showAllReviews ? "Show Less" : `Show All ${mockReviews.length} Reviews`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
