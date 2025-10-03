import React from 'react'

export const SchedulingOptions: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Posting Schedule
        </label>
        <select className="input-field">
          <option>Post immediately</option>
          <option>Schedule for later</option>
          <option>Add to queue</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input type="date" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time
          </label>
          <input type="time" className="input-field" />
        </div>
      </div>
    </div>
  )
}
