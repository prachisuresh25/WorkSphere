import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Shield, CheckCircle } from "lucide-react"

interface Worker {
  id: string
  name: string
  title: string
  rating: number
  totalReviews: number
  completedJobs: number
  responseTime: string
  location: string
  joinedDate: string
  verified: boolean
  profileImage: string
  coverImage: string
  about: string
  services: string[]
  pricing: Record<string, string>
  availability: Record<string, string>
}

interface WorkerProfileProps {
  worker: Worker
}

export function WorkerProfile({ worker }: WorkerProfileProps) {
  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img src={worker.coverImage || "/placeholder.svg"} alt="Service cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative">
              <img
                src={worker.profileImage || "/placeholder.svg"}
                alt={worker.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {worker.verified && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                  <Shield className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{worker.name}</h1>
                  <p className="text-lg text-gray-600 mb-2">{worker.title}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{worker.rating}</span>
                      <span className="ml-1">({worker.totalReviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {worker.location}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">Contact Now</Button>
                  <Button variant="outline">Save Profile</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{worker.completedJobs}</div>
              <div className="text-sm text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{worker.responseTime}</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{worker.totalReviews}</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {new Date().getFullYear() - new Date(worker.joinedDate).getFullYear()}+ years
              </div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">{worker.about}</p>
        </CardContent>
      </Card>

      {/* Services Offered */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {worker.services.map((service, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h2>
          <div className="space-y-3">
            {Object.entries(worker.pricing).map(([service, price]) => (
              <div
                key={service}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-700">{service}</span>
                <span className="font-semibold text-blue-600">{price}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Availability</h2>
          <div className="space-y-2">
            {Object.entries(worker.availability).map(([day, hours]) => (
              <div key={day} className="flex justify-between items-center py-2">
                <span className="text-gray-700 capitalize">{day}</span>
                <span className={`font-medium ${hours === "Closed" ? "text-red-500" : "text-green-600"}`}>{hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
