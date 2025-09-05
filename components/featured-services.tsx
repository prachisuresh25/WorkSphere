"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Wrench, Sparkles, GraduationCap, Car, Scissors, Camera, Utensils } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const services = [
  {
    icon: Home,
    titleKey: "homeCleaning",
    description: "Professional house cleaning services",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Wrench,
    titleKey: "homeRepairs",
    description: "Plumbing, electrical, and handyman services",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Sparkles,
    titleKey: "beautyServices",
    description: "Hair, makeup, and spa treatments",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: GraduationCap,
    titleKey: "tutoring",
    description: "Academic support and skill development",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Car,
    titleKey: "autoServices",
    description: "Car wash, repair, and maintenance",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Scissors,
    titleKey: "petCare",
    description: "Pet grooming and veterinary services",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Camera,
    titleKey: "photography",
    description: "Event and portrait photography",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Utensils,
    titleKey: "catering",
    description: "Food delivery and catering services",
    color: "bg-red-100 text-red-600",
  },
]

export function FeaturedServices() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("popularServices")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the most requested services in your area</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t(service.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
