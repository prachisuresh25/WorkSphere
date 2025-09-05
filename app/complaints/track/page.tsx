import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComplaintTracker } from "@/components/complaints/complaint-tracker"

export default function TrackComplaintPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Complaint</h1>
            <p className="text-lg text-gray-600">Enter your complaint ID to check the status and progress</p>
          </div>
          <ComplaintTracker />
        </div>
      </main>
      <Footer />
    </div>
  )
}
