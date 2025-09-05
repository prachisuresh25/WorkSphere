import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceGrid } from "@/components/services/service-grid"
import { ServiceFilters } from "@/components/services/service-filters"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Browse All Services</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Find the perfect service provider for your needs
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-lg shadow-lg">
                <div className="flex-1 flex items-center">
                  <Search className="w-5 h-5 text-gray-400 ml-3" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-3 py-3 text-gray-700 bg-transparent focus:outline-none"
                  />
                </div>
                <div className="flex items-center border-l sm:border-l border-t sm:border-t-0 pt-2 sm:pt-0 pl-0 sm:pl-4">
                  <MapPin className="w-5 h-5 text-gray-400 ml-3" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-3 py-3 text-gray-700 bg-transparent focus:outline-none"
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <ServiceFilters />
              </div>

              {/* Services Grid */}
              <div className="lg:w-3/4">
                <ServiceGrid />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
