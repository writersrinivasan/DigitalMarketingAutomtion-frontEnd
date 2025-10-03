# FLUXORA Project Structure

## 📁 Complete Directory Structure

```
fluxora-frontend/
├── public/
│   └── fluxora-logo.svg
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── forms/                 # Form components
│   │   │   └── ContentCreationForm.tsx
│   │   ├── layout/                # Layout components
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── features/              # Feature-specific components
│   │       ├── QuickActions.tsx
│   │       ├── RecentActivity.tsx
│   │       ├── UpcomingPosts.tsx
│   │       ├── PerformanceChart.tsx
│   │       ├── SchedulingCalendar.tsx
│   │       └── PostPreview.tsx
│   ├── pages/                     # Page components
│   │   ├── Dashboard.tsx
│   │   ├── ContentCreation.tsx
│   │   ├── Calendar.tsx
│   │   ├── SocialAccounts.tsx
│   │   ├── Analytics.tsx
│   │   ├── Settings.tsx
│   │   ├── Login.tsx
│   │   └── Onboarding.tsx
│   ├── store/                     # Redux store
│   │   ├── index.ts
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       ├── contentSlice.ts
│   │       ├── campaignSlice.ts
│   │       ├── socialAccountsSlice.ts
│   │       └── analyticsSlice.ts
│   ├── types/                     # TypeScript definitions
│   │   └── index.ts
│   ├── hooks/                     # Custom React hooks
│   ├── services/                  # API service functions
│   ├── utils/                     # Utility functions
│   ├── assets/                    # Static assets
│   │   ├── images/
│   │   └── icons/
│   ├── App.tsx                    # Main App component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── .env.example                   # Environment variables template
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.node.json             # Node TypeScript config
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── setup.sh                       # Development setup script
├── index.html                     # HTML template
└── README.md                      # Project documentation
```

## 🧩 Component Architecture

### Layout Components
- **Layout.tsx**: Main application shell with sidebar and header
- **Header.tsx**: Top navigation with user info and quick actions
- **Sidebar.tsx**: Left navigation menu with platform stats

### Feature Components
- **ContentCreationForm.tsx**: Multi-step content creation wizard
- **SchedulingCalendar.tsx**: Drag-and-drop calendar interface
- **PostPreview.tsx**: Platform-specific post previews
- **QuickActions.tsx**: Dashboard quick action buttons
- **RecentActivity.tsx**: Activity feed component
- **UpcomingPosts.tsx**: Scheduled posts overview

### Page Components
- **Dashboard.tsx**: Main dashboard with stats and overviews
- **ContentCreation.tsx**: Content creation page wrapper
- **Calendar.tsx**: Calendar view page
- **SocialAccounts.tsx**: Account management page
- **Analytics.tsx**: Analytics and insights page
- **Login.tsx**: Authentication page
- **Onboarding.tsx**: User onboarding flow

## 🔄 State Management

### Redux Slices
- **authSlice**: User authentication and profile
- **contentSlice**: Content items and drafts
- **campaignSlice**: Campaign management
- **socialAccountsSlice**: Connected social accounts
- **analyticsSlice**: Performance data and metrics

## 🎨 Design System

### Color Scheme
- Primary: Purple gradient (#8B5CF6)
- Secondary: Blue (#3B82F6)
- Success: Green (#10B981)
- Platform-specific colors for visual consistency

### Typography
- Inter font family for modern, readable text
- Consistent font weights and sizes
- Proper contrast ratios for accessibility

### Components
- Card-based layouts with consistent spacing
- Rounded corners and subtle shadows
- Hover states and smooth transitions
- Mobile-responsive design patterns

## 🚀 Getting Started

1. **Clone the repository**
2. **Run setup script**: `chmod +x setup.sh && ./setup.sh`
3. **Start development**: `npm run dev`
4. **Open browser**: `http://localhost:3000`

## 📋 Development Workflow

1. **Feature Development**: Create components in appropriate directories
2. **State Management**: Add Redux slices for new data
3. **Styling**: Use Tailwind utility classes consistently
4. **Type Safety**: Add TypeScript types for all new interfaces
5. **Testing**: Write tests for critical components (future enhancement)

## 🔗 Backend Integration Points

### API Endpoints Expected
- Authentication: `/api/auth/*`
- Content: `/api/content/*`
- Social Accounts: `/api/social-accounts/*`
- Analytics: `/api/analytics/*`
- Campaigns: `/api/campaigns/*`

### Data Flow
1. Frontend actions dispatch Redux actions
2. Redux slices update application state
3. API calls made through service layer
4. Response data updates Redux store
5. UI components re-render with new data

This structure provides a solid foundation for building FLUXORA's frontend while maintaining scalability and code organization.
