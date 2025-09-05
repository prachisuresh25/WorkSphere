import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkerProfile } from "@/components/worker/worker-profile"
import { ReviewsSection } from "@/components/worker/reviews-section"
import { BookingCard } from "@/components/worker/booking-card"
import { RelatedServices } from "@/components/worker/related-services"

// Mock data - in real app this would come from database
const workerData = {
  id: "1",
  name: "Rajesh Kumar",
  title: "Professional House Cleaning Expert",
  rating: 4.8,
  totalReviews: 127,
  completedJobs: 340,
  responseTime: "2 hours",
  location: "Mumbai, Maharashtra",
  joinedDate: "2022-03-15",
  verified: true,
  profileImage: "/placeholder.svg?height=200&width=200&text=Rajesh+Kumar",
  coverImage: "/placeholder.svg?height=300&width=800&text=Cleaning+Service",
  about:
    "Professional house cleaning service with 8+ years of experience. Specialized in deep cleaning, regular maintenance, and eco-friendly cleaning solutions. Fully insured and background verified.",
  services: [
    "Deep House Cleaning",
    "Regular Maintenance",
    "Kitchen Deep Clean",
    "Bathroom Sanitization",
    "Carpet Cleaning",
  ],
  pricing: {
    "1BHK Cleaning": "₹800-1000",
    "2BHK Cleaning": "₹1200-1500",
    "3BHK Cleaning": "₹1800-2200",
    "Deep Cleaning": "₹2000-3000",
  },
  availability: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <WorkerProfile worker={workerData} />
              <ReviewsSection workerId={workerData.id} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <BookingCard worker={workerData} />
              <RelatedServices currentServiceId={workerData.id} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
