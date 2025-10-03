import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { 
  CalendarDaysIcon,
  UsersIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { QuickActions } from '../components/features/QuickActions'
import { RecentActivity } from '../components/features/RecentActivity'
import { UpcomingPosts } from '../components/features/UpcomingPosts'
import { PerformanceChart } from '../components/features/PerformanceChart'

const stats = [
  {
    name: 'Posts Scheduled',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Total Reach',
    value: '45.2K',
    change: '+8.3%',
    changeType: 'positive',
    icon: EyeIcon,
  },
  {
    name: 'Engagement Rate',
    value: '4.7%',
    change: '+2.1%',
    changeType: 'positive',
    icon: HeartIcon,
  },
  {
    name: 'Connected Accounts',
    value: '5',
    change: 'All active',
    changeType: 'neutral',
    icon: UsersIcon,
  },
]

export const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name?.split(' ')[0]}! 🚀
            </h1>
            <p className="text-lg opacity-90">
              Your content empire is growing. Let's make today even better!
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm opacity-75">Posts this month</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">89%</p>
              <p className="text-sm opacity-75">Success rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-primary-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`ml-2 text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions - Takes 1 column */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* Recent Activity - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div>
          <PerformanceChart />
        </div>

        {/* Upcoming Posts */}
        <div>
          <UpcomingPosts />
        </div>
      </div>
    </div>
  )
}
