import React from 'react'
import { PlusCircleIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const quickActions = [
  {
    title: 'Quick Post',
    description: 'Create and publish instantly',
    icon: PlusCircleIcon,
    color: 'bg-primary-500',
    action: 'create-post',
  },
  {
    title: 'Schedule Content',
    description: 'Plan your posts ahead',
    icon: CalendarIcon,
    color: 'bg-blue-500',
    action: 'schedule',
  },
  {
    title: 'View Analytics',
    description: 'Check performance metrics',
    icon: ChartBarIcon,
    color: 'bg-green-500',
    action: 'analytics',
  },
]

export const QuickActions: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {quickActions.map((action) => (
          <button
            key={action.action}
            className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
