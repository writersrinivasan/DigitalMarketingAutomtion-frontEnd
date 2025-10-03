import React from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

const recentActivities = [
  {
    id: 1,
    action: 'Published post to LinkedIn',
    time: '2 minutes ago',
    status: 'success',
  },
  {
    id: 2,
    action: 'Scheduled Instagram post',
    time: '1 hour ago',
    status: 'scheduled',
  },
  {
    id: 3,
    action: 'Draft saved for Facebook',
    time: '3 hours ago',
    status: 'draft',
  },
  {
    id: 4,
    action: 'Campaign completed',
    time: '1 day ago',
    status: 'completed',
  },
]

const statusColors = {
  success: 'text-green-600',
  scheduled: 'text-blue-600',
  draft: 'text-yellow-600',
  completed: 'text-gray-600',
}

export const RecentActivity: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.action}</p>
              <p className={`text-xs ${statusColors[activity.status as keyof typeof statusColors]} mt-1`}>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
        View all activity
      </button>
    </div>
  )
}
