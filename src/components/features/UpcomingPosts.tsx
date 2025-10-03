import React from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'

const upcomingPosts = [
  {
    id: 1,
    title: 'Summer Marketing Campaign',
    platform: 'LinkedIn',
    scheduledFor: 'Today, 2:00 PM',
    status: 'ready',
  },
  {
    id: 2,
    title: 'Product Showcase Video',
    platform: 'Instagram',
    scheduledFor: 'Tomorrow, 9:00 AM',
    status: 'ready',
  },
  {
    id: 3,
    title: 'Industry Insights Article',
    platform: 'Facebook',
    scheduledFor: 'Friday, 11:00 AM',
    status: 'pending',
  },
]

const platformColors = {
  LinkedIn: 'bg-blue-600',
  Instagram: 'bg-pink-500',
  Facebook: 'bg-blue-500',
  YouTube: 'bg-red-500',
  Twitter: 'bg-black',
}

export const UpcomingPosts: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Posts</h3>
      <div className="space-y-3">
        {upcomingPosts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${platformColors[post.platform as keyof typeof platformColors]}`}></div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{post.title}</h4>
                <p className="text-xs text-gray-600 flex items-center mt-1">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {post.scheduledFor}
                </p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              post.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {post.status}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
        View calendar
      </button>
    </div>
  )
}
