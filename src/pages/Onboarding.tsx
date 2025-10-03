import React from 'react'

export const Onboarding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Welcome to FLUXORA!
        </h1>
        <p className="text-gray-600 text-center">
          Let's get you set up with your social media accounts.
        </p>
      </div>
    </div>
  )
}
