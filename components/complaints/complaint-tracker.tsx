"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, CheckCircle, Clock, AlertTriangle, MessageSquare } from "lucide-react"

const mockComplaintData = {
  id: "C001234",
  subject: "Poor cleaning service quality",
  type: "Service Quality",
  status: "In Progress",
  priority: "Medium",
  submittedDate: "2024-01-15",
  lastUpdated: "2024-01-16",
  assignedTo: "Customer Support Team",
  timeline: [
    {
      date: "2024-01-15 10:30 AM",
      status: "Complaint Submitted",
      description: "Your complaint has been received and assigned ID C001234",
      icon: AlertTriangle,
      completed: true,
    },
    {
      date: "2024-01-15 02:15 PM",
      status: "Under Review",
      description: "Our team is reviewing your complaint and gathering information",
      icon: Clock,
      completed: true,
    },
    {
      date: "2024-01-16 09:00 AM",
      status: "Investigation Started",
      description: "We have contacted the service provider for their response",
      icon: Search,
      completed: true,
    },
    {
      date: "Pending",
      status: "Resolution",
      description: "We will provide a resolution within 24-48 hours",
      icon: CheckCircle,
      completed: false,
    },
  ],
}

export function ComplaintTracker() {
  const [complaintId, setComplaintId] = useState("")
  const [complaintData, setComplaintData] = useState<typeof mockComplaintData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    if (!complaintId.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (complaintId === "C001234") {
        setComplaintData(mockComplaintData)
      } else {
        setComplaintData(null)
        alert("Complaint not found. Please check your complaint ID.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle>Enter Complaint ID</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <input
              type="text"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              placeholder="Enter your complaint ID (e.g., C001234)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={handleSearch} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? "Searching..." : "Track"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Complaint Details */}
      {complaintData && (
        <div className="space-y-6">
          {/* Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Complaint Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Complaint ID:</span>
                      <span className="font-medium">{complaintData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subject:</span>
                      <span className="font-medium">{complaintData.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">{complaintData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Priority:</span>
                      <span className="font-medium">{complaintData.priority}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Status Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Status:</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {complaintData.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">{new Date(complaintData.submittedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="font-medium">{new Date(complaintData.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Assigned To:</span>
                      <span className="font-medium">{complaintData.assignedTo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {complaintData.timeline.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.completed ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${item.completed ? "text-green-600" : "text-gray-400"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-medium ${item.completed ? "text-gray-900" : "text-gray-500"}`}>
                            {item.status}
                          </h4>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <p className={`text-sm ${item.completed ? "text-gray-600" : "text-gray-400"}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex items-center bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Update Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
