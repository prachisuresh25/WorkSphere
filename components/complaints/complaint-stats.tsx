import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    title: "Average Resolution Time",
    value: "2.3 days",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Resolution Rate",
    value: "94.2%",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Complaints This Month",
    value: "23% ↓",
    icon: TrendingDown,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

export function ComplaintStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Complaint Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="flex items-center">
              <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center mr-3`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
