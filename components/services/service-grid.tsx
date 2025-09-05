import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Professional House Cleaning",
    provider: "CleanPro Services",
    rating: 4.8,
    reviews: 127,
    price: "₹800-1200",
    location: "Mumbai, Maharashtra",
    image: "/professional-house-cleaning.png",
    verified: true,
    responseTime: "2 hours",
  },
  {
    id: 2,
    title: "Plumbing & Electrical Repairs",
    provider: "FixIt Experts",
    rating: 4.9,
    reviews: 89,
    price: "₹500-1500",
    location: "Delhi, NCR",
    image: "/plumber-electrician-repair-service.jpg",
    verified: true,
    responseTime: "1 hour",
  },
  {
    id: 3,
    title: "Home Salon & Beauty Services",
    provider: "Glamour At Home",
    rating: 4.7,
    reviews: 203,
    price: "₹600-2000",
    location: "Bangalore, Karnataka",
    image: "/home-beauty-salon-service.jpg",
    verified: true,
    responseTime: "3 hours",
  },
  {
    id: 4,
    title: "Math & Science Tutoring",
    provider: "EduMentor",
    rating: 4.9,
    reviews: 156,
    price: "₹400-800/hr",
    location: "Pune, Maharashtra",
    image: "/math-science-tutor-teaching.jpg",
    verified: true,
    responseTime: "4 hours",
  },
  {
    id: 5,
    title: "Car Wash & Detailing",
    provider: "AutoCare Pro",
    rating: 4.6,
    reviews: 94,
    price: "₹300-1000",
    location: "Chennai, Tamil Nadu",
    image: "/car-wash-detailing-service.jpg",
    verified: true,
    responseTime: "2 hours",
  },
  {
    id: 6,
    title: "Pet Grooming & Care",
    provider: "PawCare Services",
    rating: 4.8,
    reviews: 78,
    price: "₹500-1500",
    location: "Hyderabad, Telangana",
    image: "/pet-grooming-dog-care-service.jpg",
    verified: true,
    responseTime: "6 hours",
  },
]

export function ServiceGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Available Services</h2>
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort by: Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Response Time</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              {service.verified && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.provider}</p>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({service.reviews})</span>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {service.location}
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Clock className="w-4 h-4 mr-1" />
                Responds in {service.responseTime}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{service.price}</span>
                <Link href={`/services/${service.id}`}>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Services
        </Button>
      </div>
    </div>
  )
}
