"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Star } from "lucide-react"

const categories = [
  "Home Cleaning",
  "Home Repairs",
  "Beauty Services",
  "Tutoring",
  "Auto Services",
  "Pet Care",
  "Photography",
  "Catering",
]

const ratings = [5, 4, 3, 2, 1]

export function ServiceFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="px-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === rating}
                    onChange={() => setSelectedRating(rating)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <div className="ml-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">& up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => {
              setSelectedCategories([])
              setPriceRange([0, 5000])
              setSelectedRating(null)
            }}
          >
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
