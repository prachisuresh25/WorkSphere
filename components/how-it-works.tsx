"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, UserCheck, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const steps = [
  {
    icon: Search,
    titleKey: "searchAndBrowse",
    description: "Browse or search for the service you need in your area",
    step: "01",
  },
  {
    icon: UserCheck,
    titleKey: "compareAndChoose",
    description: "Compare profiles, reviews, and prices to find the right match",
    step: "02",
  },
  {
    icon: Star,
    titleKey: "bookAndReview",
    description: "Book the service and leave a review to help others",
    step: "03",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting the service you need is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">{step.step}</div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t(step.titleKey)}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
