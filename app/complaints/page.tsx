import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComplaintForm } from "@/components/complaints/complaint-form"
import { ComplaintsList } from "@/components/complaints/complaints-list"
import { ComplaintStats } from "@/components/complaints/complaint-stats"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">File a Complaint</h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              We take your concerns seriously. Report any issues with services or providers and we'll investigate
              promptly.
            </p>
          </div>
        </section>

        {/* Process Info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Report Issue</h3>
                  <p className="text-sm text-gray-600">Submit your complaint with details</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Investigation</h3>
                  <p className="text-sm text-gray-600">We review within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Action Taken</h3>
                  <p className="text-sm text-gray-600">Appropriate measures implemented</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resolution</h3>
                  <p className="text-sm text-gray-600">Issue resolved and closed</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Complaint Form */}
              <div className="lg:col-span-2">
                <ComplaintForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <ComplaintStats />
                <ComplaintsList />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
