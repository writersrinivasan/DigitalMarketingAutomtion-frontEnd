import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  HomeIcon,
  PlusCircleIcon,
  CalendarIcon,
  LinkIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { SimpleLogo } from '../ui/SimpleLogo'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Create Content', href: '/content', icon: PlusCircleIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Social Accounts', href: '/accounts', icon: LinkIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
]

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200">
      {/* Logo */}
      <div className="px-6 py-8">
        <SimpleLogo size="md" showText={true} />
      </div>

      {/* Navigation */}
      <nav className="px-3 pb-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg p-4 text-white">
          <p className="text-sm font-medium">Posts This Month</p>
          <p className="text-2xl font-bold">127</p>
          <p className="text-xs opacity-90">↗ 23% increase</p>
        </div>
      </div>
    </div>
  )
}
