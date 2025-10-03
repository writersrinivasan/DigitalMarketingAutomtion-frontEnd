// Global types for the FLUXORA application
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  agency?: string;
}

export interface SocialAccount {
  id: string;
  platform: Platform;
  username: string;
  isConnected: boolean;
  lastSync?: Date;
  followers?: number;
  profileImage?: string;
}

export type Platform = 'linkedin' | 'facebook' | 'instagram' | 'youtube' | 'twitter';

export type ContentType = 'image' | 'video' | 'text' | 'carousel' | 'reel' | 'short';

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  description?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  platforms: Platform[];
  scheduledDate?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  content: ContentItem[];
  platforms: Platform[];
  scheduleType: 'once' | 'daily' | 'weekly' | 'monthly' | 'custom';
  startDate: Date;
  endDate?: Date;
  status: 'draft' | 'active' | 'paused' | 'completed';
  createdAt: Date;
}

export interface PostPreview {
  platform: Platform;
  caption: string;
  hashtags: string[];
  mediaUrl?: string;
  estimatedReach?: number;
  bestTimeToPost?: string;
}

export interface AnalyticsData {
  platform: Platform;
  metrics: {
    impressions: number;
    engagement: number;
    clicks: number;
    shares: number;
  };
  period: string;
}

export interface ScheduleSlot {
  id: string;
  date: Date;
  time: string;
  contentId?: string;
  platform: Platform;
  status: 'available' | 'scheduled' | 'published';
}
