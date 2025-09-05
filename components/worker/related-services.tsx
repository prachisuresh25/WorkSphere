import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const relatedServices = [
  {
    id: 2,
    name: "Meera Cleaning Services",
    title: "Deep Cleaning Specialist",
    rating: 4.7,
    reviews: 89,
    price: "₹900-1300",
    location: "Mumbai, Maharashtra",
    image: "/placeholder.svg?height=80&width=80&text=Meera",
  },
  {
    id: 3,
    name: "Quick Clean Pro",
    title: "Residential Cleaning",
    rating: 4.6,
    reviews: 156,
    price: "₹700-1100",
    location: "Mumbai, Maharashtra",
    image: "/placeholder.svg?height=80&width=80&text=Quick",
  },
  {
    id: 4,
    name: "Sparkle Home Services",
    title: "Premium Cleaning",
    rating: 4.9,
    reviews: 203,
    price: "₹1000-1500",
    location: "Mumbai, Maharashtra",
    image: "/placeholder.svg?height=80&width=80&text=Sparkle",
  },
]

interface RelatedServicesProps {
  currentServiceId: string
}

export function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Similar Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {relatedServices.map((service) => (
          <div
            key={service.id}
            className="flex gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">{service.name}</h4>
              <p className="text-sm text-gray-600 truncate">{service.title}</p>

              <div className="flex items-center mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="ml-1 text-xs text-gray-600">
                  {service.rating} ({service.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium text-blue-600">{service.price}</span>
                <Link href={`/services/${service.id}`}>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <Link href="/services">
          <Button variant="outline" className="w-full bg-transparent">
            View All Services
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
