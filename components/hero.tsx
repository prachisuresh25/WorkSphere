"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">{t("heroTitle")}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">{t("heroSubtitle")}</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-lg shadow-lg">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="w-full px-3 py-3 text-gray-700 bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex items-center border-l sm:border-l border-t sm:border-t-0 pt-2 sm:pt-0 pl-0 sm:pl-4">
                <MapPin className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder={t("locationPlaceholder")}
                  className="w-full px-3 py-3 text-gray-700 bg-transparent focus:outline-none"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3">{t("searchButton")}</Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t("browseServices")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                {t("joinAsProvider")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
