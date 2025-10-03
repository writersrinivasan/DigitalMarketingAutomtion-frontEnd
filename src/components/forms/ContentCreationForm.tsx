import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDropzone } from 'react-dropzone'
import { 
  PhotoIcon, 
  VideoCameraIcon, 
  DocumentTextIcon,
  RectangleStackIcon 
} from '@heroicons/react/24/outline'
import { ContentType, Platform } from '../../types'
import { PlatformPreview } from './PlatformPreview'
import { SchedulingOptions } from './SchedulingOptions'

const contentSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  contentType: z.enum(['image', 'video', 'text', 'carousel', 'reel', 'short']),
  platforms: z.array(z.enum(['linkedin', 'facebook', 'instagram', 'youtube', 'twitter'])).min(1, 'Select at least one platform'),
  caption: z.string().max(2200, 'Caption too long'),
  hashtags: z.string().optional(),
})

type ContentFormData = z.infer<typeof contentSchema>

const contentTypes = [
  { id: 'image', name: 'Image Post', icon: PhotoIcon, color: 'bg-blue-500' },
  { id: 'video', name: 'Video', icon: VideoCameraIcon, color: 'bg-purple-500' },
  { id: 'text', name: 'Text Only', icon: DocumentTextIcon, color: 'bg-green-500' },
  { id: 'carousel', name: 'Carousel', icon: RectangleStackIcon, color: 'bg-orange-500' },
]

const platforms = [
  { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-600', textColor: 'text-blue-600' },
  { id: 'facebook', name: 'Facebook', color: 'bg-blue-500', textColor: 'text-blue-500' },
  { id: 'instagram', name: 'Instagram', color: 'bg-pink-500', textColor: 'text-pink-500' },
  { id: 'youtube', name: 'YouTube', color: 'bg-red-500', textColor: 'text-red-500' },
  { id: 'twitter', name: 'X (Twitter)', color: 'bg-black', textColor: 'text-black' },
]

export const ContentCreationForm: React.FC = () => {
  const [step, setStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [previewMode, setPreviewMode] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContentFormData>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      platforms: [],
      contentType: 'image',
    },
  })

  const watchedValues = watch()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi'],
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles)
    },
  })

  const onSubmit = (data: ContentFormData) => {
    console.log('Form submitted:', data)
    // Handle form submission
  }

  const togglePlatform = (platformId: Platform) => {
    const currentPlatforms = watchedValues.platforms || []
    const newPlatforms = currentPlatforms.includes(platformId)
      ? currentPlatforms.filter(p => p !== platformId)
      : [...currentPlatforms, platformId]
    setValue('platforms', newPlatforms)
  }

  const selectContentType = (type: ContentType) => {
    setValue('contentType', type)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Create New Content</h1>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="btn-secondary"
          >
            {previewMode ? 'Edit Mode' : 'Preview Mode'}
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNumber <= step
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`h-1 w-16 mx-2 ${
                    stepNumber < step ? 'bg-primary-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 mt-2 max-w-md">
          <span>Content Type</span>
          <span>Upload Media</span>
          <span>Write Copy</span>
          <span>Schedule</span>
        </div>
      </div>

      {previewMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {watchedValues.platforms?.map((platform) => (
            <PlatformPreview
              key={platform}
              platform={platform}
              content={{
                type: watchedValues.contentType,
                caption: watchedValues.caption || '',
                mediaUrl: uploadedFiles[0] ? URL.createObjectURL(uploadedFiles[0]) : undefined,
              }}
            />
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Step 1: Content Type Selection */}
          {step === 1 && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Choose Content Type</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => selectContentType(type.id as ContentType)}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                      watchedValues.contentType === type.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900">{type.name}</h3>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary"
                  disabled={!watchedValues.contentType}
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Upload Media */}
          {step === 2 && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Upload Your Media</h2>
              
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input {...getInputProps()} />
                <PhotoIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                {isDragActive ? (
                  <p className="text-primary-600">Drop the files here...</p>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">
                      Drag & drop your media here, or click to select
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports: PNG, JPG, GIF, MP4, MOV (max 10MB)
                    </p>
                  </div>
                )}
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Uploaded Files:</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                          {file.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Write Copy & Select Platforms */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Platform Selection */}
              <div className="card">
                <h2 className="text-xl font-semibold mb-6">Select Platforms</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => togglePlatform(platform.id as Platform)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        watchedValues.platforms?.includes(platform.id as Platform)
                          ? `border-primary-500 ${platform.color} text-white`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="font-medium">{platform.name}</h3>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.platforms && (
                  <p className="text-red-500 text-sm mt-2">{errors.platforms.message}</p>
                )}
              </div>

              {/* Caption Writing */}
              <div className="card">
                <h2 className="text-xl font-semibold mb-6">Write Your Caption</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      {...register('title')}
                      className="input-field"
                      placeholder="Give your content a catchy title..."
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Caption
                    </label>
                    <textarea
                      {...register('caption')}
                      rows={6}
                      className="input-field"
                      placeholder="Write your engaging caption here..."
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-gray-500">
                        {watchedValues.caption?.length || 0}/2200 characters
                      </p>
                      <button
                        type="button"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        ✨ AI Suggest
                      </button>
                    </div>
                    {errors.caption && (
                      <p className="text-red-500 text-sm mt-1">{errors.caption.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hashtags
                    </label>
                    <input
                      {...register('hashtags')}
                      className="input-field"
                      placeholder="#marketing #socialmedia #contentcreation"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Separate hashtags with spaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Scheduling */}
          {step === 4 && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Schedule Your Post</h2>
              <SchedulingOptions />
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-secondary"
                >
                  Previous
                </button>
                <div className="space-x-4">
                  <button type="button" className="btn-secondary">
                    Save as Draft
                  </button>
                  <button type="submit" className="btn-primary">
                    Schedule Post
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
