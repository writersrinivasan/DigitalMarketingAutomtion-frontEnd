import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks } from 'date-fns'
import { ScheduleSlot, Platform } from '../../types'

const mockScheduledPosts: ScheduleSlot[] = [
  {
    id: '1',
    date: new Date(),
    time: '09:00',
    contentId: 'content-1',
    platform: 'linkedin',
    status: 'scheduled',
  },
  {
    id: '2',
    date: addDays(new Date(), 1),
    time: '14:00',
    contentId: 'content-2',
    platform: 'instagram',
    status: 'scheduled',
  },
  {
    id: '3',
    date: addDays(new Date(), 2),
    time: '10:30',
    contentId: 'content-3',
    platform: 'facebook',
    status: 'scheduled',
  },
]

const platformColors = {
  linkedin: 'bg-blue-500',
  facebook: 'bg-blue-600',
  instagram: 'bg-pink-500',
  youtube: 'bg-red-500',
  twitter: 'bg-black',
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
]

export const SchedulingCalendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [scheduledPosts, setScheduledPosts] = useState<ScheduleSlot[]>(mockScheduledPosts)
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: string } | null>(null)

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }) // Monday start
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const handlePreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1))
  }

  const handleNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1))
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination } = result
    const [sourceDate, sourceTime] = source.droppableId.split('-')
    const [destDate, destTime] = destination.droppableId.split('-')

    const updatedPosts = scheduledPosts.map(post => {
      if (post.id === result.draggableId) {
        return {
          ...post,
          date: new Date(destDate),
          time: destTime,
        }
      }
      return post
    })

    setScheduledPosts(updatedPosts)
  }

  const getPostsForSlot = (date: Date, time: string) => {
    return scheduledPosts.filter(post => 
      isSameDay(post.date, date) && post.time === time
    )
  }

  const PostCard: React.FC<{ post: ScheduleSlot; index: number }> = ({ post, index }) => (
    <Draggable draggableId={post.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 rounded-lg shadow-sm border text-xs ${
            platformColors[post.platform]
          } text-white mb-1 cursor-move ${
            snapshot.isDragging ? 'opacity-75 rotate-3' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium capitalize">{post.platform}</span>
            <div className="flex space-x-1">
              <button className="hover:bg-white hover:bg-opacity-20 p-1 rounded">
                <PencilIcon className="h-3 w-3" />
              </button>
              <button className="hover:bg-white hover:bg-opacity-20 p-1 rounded">
                <TrashIcon className="h-3 w-3" />
              </button>
            </div>
          </div>
          <p className="truncate opacity-90 mt-1">
            Content #{post.contentId?.slice(-1)}
          </p>
        </div>
      )}
    </Draggable>
  )

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Calendar Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Content Calendar
          </h2>
          
          <div className="flex items-center space-x-4">
            {/* Week Navigation */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePreviousWeek}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              
              <span className="text-lg font-medium px-4">
                {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'MMM d, yyyy')}
              </span>
              
              <button
                onClick={handleNextWeek}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <button className="btn-primary flex items-center space-x-2">
              <PlusIcon className="h-4 w-4" />
              <span>Quick Schedule</span>
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 mt-4">
          <span className="text-sm font-medium text-gray-700">Platforms:</span>
          {Object.entries(platformColors).map(([platform, color]) => (
            <div key={platform} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${color}`}></div>
              <span className="text-sm text-gray-600 capitalize">{platform}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="min-w-full">
            {/* Days Header */}
            <div className="grid grid-cols-8 border-b border-gray-200">
              <div className="p-4 text-sm font-medium text-gray-700 border-r border-gray-200">
                Time
              </div>
              {weekDays.map((day) => (
                <div
                  key={day.toISOString()}
                  className={`p-4 text-center border-r border-gray-200 last:border-r-0 ${
                    isSameDay(day, new Date()) ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900">
                    {format(day, 'EEE')}
                  </div>
                  <div className={`text-lg font-semibold ${
                    isSameDay(day, new Date()) ? 'text-primary-600' : 'text-gray-700'
                  }`}>
                    {format(day, 'd')}
                  </div>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
                <div className="p-3 text-sm font-medium text-gray-700 border-r border-gray-200 bg-gray-50">
                  {time}
                </div>
                {weekDays.map((day) => {
                  const slotId = `${day.toISOString()}-${time}`
                  const postsInSlot = getPostsForSlot(day, time)
                  
                  return (
                    <Droppable key={slotId} droppableId={slotId}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`p-2 min-h-[80px] border-r border-gray-200 last:border-r-0 transition-colors ${
                            snapshot.isDraggedOver ? 'bg-primary-50' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedSlot({ date: day, time })}
                        >
                          {postsInSlot.map((post, index) => (
                            <PostCard key={post.id} post={post} index={index} />
                          ))}
                          
                          {postsInSlot.length === 0 && (
                            <div className="h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <PlusIcon className="h-5 w-5 text-gray-400" />
                            </div>
                          )}
                          
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  )
                })}
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>

      {/* Quick Stats Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{scheduledPosts.length}</span> posts scheduled this week
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-green-600">85%</span> optimal timing
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Bulk Edit
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Export Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
