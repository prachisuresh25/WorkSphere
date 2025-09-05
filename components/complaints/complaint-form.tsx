"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, AlertCircle } from "lucide-react"

export function ComplaintForm() {
  const [formData, setFormData] = useState({
    complaintType: "",
    serviceProvider: "",
    bookingId: "",
    subject: "",
    description: "",
    priority: "medium",
    contactMethod: "email",
    attachments: [] as File[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("[v0] Complaint submitted:", formData)
      setIsSubmitting(false)
      alert("Complaint submitted successfully! You will receive a confirmation email shortly.")
      // Reset form
      setFormData({
        complaintType: "",
        serviceProvider: "",
        bookingId: "",
        subject: "",
        description: "",
        priority: "medium",
        contactMethod: "email",
        attachments: [],
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
          Submit a Complaint
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Complaint Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Complaint Type *</label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select complaint type</option>
              <option value="service-quality">Poor Service Quality</option>
              <option value="no-show">Provider No-Show</option>
              <option value="overcharging">Overcharging</option>
              <option value="unprofessional">Unprofessional Behavior</option>
              <option value="damage">Property Damage</option>
              <option value="safety">Safety Concerns</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Service Provider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Provider Name *</label>
            <input
              type="text"
              name="serviceProvider"
              value={formData.serviceProvider}
              onChange={handleChange}
              required
              placeholder="Enter provider name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Booking ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Booking ID (if applicable)</label>
            <input
              type="text"
              name="bookingId"
              value={formData.bookingId}
              onChange={handleChange}
              placeholder="Enter booking reference number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Brief description of the issue"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Please provide detailed information about your complaint including dates, times, and specific incidents..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="low">Low - General feedback</option>
              <option value="medium">Medium - Service issue</option>
              <option value="high">High - Serious concern</option>
              <option value="urgent">Urgent - Safety/Security issue</option>
            </select>
          </div>

          {/* Contact Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="ml-2 text-sm">Email</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleChange}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="ml-2 text-sm">Phone Call</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="both"
                  checked={formData.contactMethod === "both"}
                  onChange={handleChange}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="ml-2 text-sm">Both Email and Phone</span>
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">Upload photos, screenshots, or documents</p>
              <input
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-500 text-sm font-medium"
              >
                Choose Files
              </label>
              <p className="text-xs text-gray-500 mt-1">Max 5MB per file. Supported: JPG, PNG, PDF, DOC</p>
            </div>
            {formData.attachments.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Uploaded files:</p>
                <ul className="text-sm text-gray-700">
                  {formData.attachments.map((file, index) => (
                    <li key={index}>• {file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
            {isSubmitting ? "Submitting Complaint..." : "Submit Complaint"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this complaint, you agree to our investigation process and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
