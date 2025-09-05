"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MessageCircle, Phone } from "lucide-react"

interface Worker {
  id: string
  name: string
  responseTime: string
  pricing: Record<string, string>
}

interface BookingCardProps {
  worker: Worker
}

export function BookingCard({ worker }: BookingCardProps) {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleBooking = () => {
    console.log("[v0] Booking request:", {
      workerId: worker.id,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    })
    // In a real app, this would handle the booking process
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-lg">Book This Service</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a service</option>
            {Object.entries(worker.pricing).map(([service, price]) => (
              <option key={service} value={service}>
                {service} - {price}
              </option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
        </div>

        {/* Response Time Info */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center text-blue-700">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Usually responds within {worker.responseTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleBooking}
            disabled={!selectedService || !selectedDate || !selectedTime}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <MessageCircle className="w-4 h-4 mr-1" />
              Chat
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <Phone className="w-4 h-4 mr-1" />
              Call
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="pt-4 border-t space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Background verified
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Insured service
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Money-back guarantee
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
