import React from 'react'

export const PlatformPreview: React.FC<any> = ({ platform, content }) => {
  return (
    <div className="card">
      <h3 className="font-semibold mb-2 capitalize">{platform} Preview</h3>
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-sm text-gray-600">Preview for {platform}</p>
        <p className="text-xs text-gray-500 mt-2">{content?.caption}</p>
      </div>
    </div>
  )
}
