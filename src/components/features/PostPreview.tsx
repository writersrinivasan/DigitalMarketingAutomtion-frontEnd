import React from 'react'
import { Platform, ContentType } from '../../types'
import { 
  HeartIcon, 
  ChatBubbleOvalLeftIcon, 
  ArrowPathRoundedSquareIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'

interface PostPreviewProps {
  platform: Platform
  content: {
    type: ContentType
    caption: string
    mediaUrl?: string
    hashtags?: string[]
  }
}

const platformConfig = {
  linkedin: {
    name: 'LinkedIn',
    color: 'bg-blue-600',
    maxChars: 3000,
    profileName: 'Your Company',
    profileImage: '👔',
    timeAgo: '2h',
  },
  facebook: {
    name: 'Facebook',
    color: 'bg-blue-500',
    maxChars: 63206,
    profileName: 'Your Page',
    profileImage: '📘',
    timeAgo: '3h',
  },
  instagram: {
    name: 'Instagram',
    color: 'bg-pink-500',
    maxChars: 2200,
    profileName: 'yourhandle',
    profileImage: '📸',
    timeAgo: '1h',
  },
  youtube: {
    name: 'YouTube',
    color: 'bg-red-500',
    maxChars: 5000,
    profileName: 'Your Channel',
    profileImage: '🎥',
    timeAgo: '4h',
  },
  twitter: {
    name: 'X (Twitter)',
    color: 'bg-black',
    maxChars: 280,
    profileName: '@yourhandle',
    profileImage: '🐦',
    timeAgo: '30m',
  },
}

export const PostPreview: React.FC<PostPreviewProps> = ({ platform, content }) => {
  const config = platformConfig[platform]
  const truncatedCaption = content.caption.length > config.maxChars 
    ? content.caption.substring(0, config.maxChars) + '...'
    : content.caption

  const renderLinkedInPreview = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-start space-x-3">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
          {config.profileImage}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{config.profileName}</h3>
            <span className="text-blue-600">•</span>
            <span className="text-sm text-gray-500">Following</span>
          </div>
          <p className="text-sm text-gray-500">{config.timeAgo} • 🌍</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-gray-900 whitespace-pre-wrap">{truncatedCaption}</p>
      </div>

      {/* Media */}
      {content.mediaUrl && (
        <div className="relative">
          <img 
            src={content.mediaUrl} 
            alt="Post content" 
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      {/* Engagement */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-gray-600">
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
              <span className="text-sm">Repost</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderInstagramPreview = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden max-w-sm">
      {/* Header */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
            {config.profileImage}
          </div>
          <span className="font-semibold text-sm">{config.profileName}</span>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
      </div>

      {/* Media */}
      {content.mediaUrl && (
        <div className="aspect-square">
          <img 
            src={content.mediaUrl} 
            alt="Post content" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <HeartIcon className="h-6 w-6 text-gray-800" />
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-gray-800" />
            <ArrowPathRoundedSquareIcon className="h-6 w-6 text-gray-800" />
          </div>
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold">{config.profileName}</span>
          <span className="ml-2">{truncatedCaption}</span>
        </div>
        
        <p className="text-xs text-gray-500 mt-1 uppercase">{config.timeAgo}</p>
      </div>
    </div>
  )

  const renderTwitterPreview = () => (
    <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
          {config.profileImage}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-gray-900">Your Name</h3>
            <span className="text-gray-500">{config.profileName}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{config.timeAgo}</span>
          </div>
          
          <p className="text-gray-900 mt-2 whitespace-pre-wrap">{truncatedCaption}</p>
          
          {content.mediaUrl && (
            <div className="mt-3 rounded-2xl overflow-hidden">
              <img 
                src={content.mediaUrl} 
                alt="Post content" 
                className="w-full h-48 object-cover"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <span className="text-sm">Reply</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
              <span className="text-sm">Repost</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm">Like</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderFacebookPreview = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
          {config.profileImage}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{config.profileName}</h3>
          <p className="text-sm text-gray-500">{config.timeAgo} • 🌍</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-gray-900 whitespace-pre-wrap">{truncatedCaption}</p>
      </div>

      {/* Media */}
      {content.mediaUrl && (
        <img 
          src={content.mediaUrl} 
          alt="Post content" 
          className="w-full h-64 object-cover"
        />
      )}

      {/* Engagement */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-gray-600">
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderYouTubePreview = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Video Thumbnail */}
      {content.mediaUrl && (
        <div className="relative aspect-video bg-black">
          <img 
            src={content.mediaUrl} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      )}

      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
          {content.caption.split('\n')[0] || 'Video Title'}
        </h3>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <span>1.2K views</span>
          <span>•</span>
          <span>{config.timeAgo}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
            {config.profileImage}
          </div>
          <span className="text-sm font-medium text-gray-900">{config.profileName}</span>
        </div>
        
        {content.caption && (
          <p className="text-sm text-gray-600 mt-3 line-clamp-3">
            {truncatedCaption}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
        <h3 className="font-semibold text-gray-900">{config.name} Preview</h3>
        <span className="text-sm text-gray-500">
          ({content.caption.length}/{config.maxChars} chars)
        </span>
      </div>
      
      <div className="transform scale-90 origin-top-left">
        {platform === 'linkedin' && renderLinkedInPreview()}
        {platform === 'instagram' && renderInstagramPreview()}
        {platform === 'twitter' && renderTwitterPreview()}
        {platform === 'facebook' && renderFacebookPreview()}
        {platform === 'youtube' && renderYouTubePreview()}
      </div>
    </div>
  )
}
