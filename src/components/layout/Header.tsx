import React from 'react'
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title Area */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Good morning, {user?.name?.split(' ')[0] || 'there'}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to create amazing content today?
          </p>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick Create Button */}
          <button className="btn-primary flex items-center space-x-2">
            <span>Quick Post</span>
            <span className="text-lg">⚡</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.agency || 'Personal'}</p>
            </div>
            {user?.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
