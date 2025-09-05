import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, UserCheck, Star, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Search,
    title: "Search & Browse",
    description: "Find services by category or search for specific needs in your area",
    details: "Use our advanced search filters to find exactly what you need",
  },
  {
    icon: UserCheck,
    title: "Compare & Choose",
    description: "Review profiles, ratings, and prices to select the best provider",
    details: "All providers are verified and background-checked for your safety",
  },
  {
    icon: Star,
    title: "Book & Review",
    description: "Schedule your service and leave feedback to help the community",
    details: "Secure booking system with payment protection and satisfaction guarantee",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Verified Providers",
    description: "All service providers undergo background verification",
  },
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Book services instantly or schedule for later",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all services",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">How ServiceSphere Works</h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Getting quality services has never been easier. Follow these simple steps to connect with trusted
              professionals.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-gray-500">{step.details}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ServiceSphere?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing a safe, reliable, and convenient platform for all your service needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust ServiceSphere for their service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Find Services
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Join as Provider
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
