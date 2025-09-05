import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentComplaints = [
  {
    id: "C001",
    type: "Service Quality",
    status: "Resolved",
    date: "2024-01-15",
    statusColor: "text-green-600 bg-green-100",
  },
  {
    id: "C002",
    type: "No Show",
    status: "In Progress",
    date: "2024-01-14",
    statusColor: "text-orange-600 bg-orange-100",
  },
  {
    id: "C003",
    type: "Overcharging",
    status: "Under Review",
    date: "2024-01-13",
    statusColor: "text-blue-600 bg-blue-100",
  },
  {
    id: "C004",
    type: "Property Damage",
    status: "Resolved",
    date: "2024-01-12",
    statusColor: "text-green-600 bg-green-100",
  },
]

export function ComplaintsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentComplaints.map((complaint) => (
            <div key={complaint.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-900">#{complaint.id}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${complaint.statusColor}`}>
                  {complaint.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{complaint.type}</p>
              <p className="text-xs text-gray-500">{new Date(complaint.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
