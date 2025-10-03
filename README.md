# 🚀 FLUXORA - Digital Marketing Automation SaaS Frontend

![FLUXORA Logo](./public/fluxora-logo.svg)

**FLUXORA** is a modern, agency-focused digital marketing automation platform that streamlines social media management across multiple platforms. This repository contains the complete React-based frontend application.

## ✨ Features

### 🔐 Authentication System
- Modern login page with form validation
- Redux-based state management
- Error handling and user feedback
- Demo credentials for testing

### 📊 Dashboard & Analytics
- Beautiful card-based layout with gradients
- Real-time stats overview
- Activity feed and upcoming posts
- Quick action buttons for common tasks
- Performance charts and metrics

### � Content Management
- Content creation with platform-specific previews
- Drag-and-drop scheduling calendar
- Multi-platform posting capabilities
- Content library and templates

### 🔗 Platform Integrations
- LinkedIn, Facebook, Instagram, YouTube, Twitter
- Platform-specific color coding and branding
- Connection status indicators
- OAuth-ready architecture

### 🎨 Design System
- **Primary Purple**: `#8B5CF6` - Brand color
- **Secondary Blue**: `#3B82F6` - Action buttons  
- **Success Green**: `#10B981` - Success states
- **Platform Colors**: Authentic social media branding
- **Typography**: Inter font for modern, clean text
- **Layout**: Responsive grid with generous spacing

## 🛠️ Technology Stack

### Frontend Framework
- **React 18+** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Redux Toolkit** for predictable state management
- **React Router** for client-side navigation

### UI & Styling
- **Tailwind CSS** for utility-first styling
- **Heroicons** for consistent iconography
- **Custom CSS** for complex animations
- **Responsive Design** for all device sizes

### Form Management
- **React Hook Form** for performant forms
- **Zod** for schema validation
- **Error Handling** with user-friendly messages

### Development Tools
- **TypeScript** for static type checking
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Hot Reload** for instant development feedback

## 📁 Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── forms/           # Form components
│   ├── layout/          # Layout components (Header, Sidebar)
│   └── features/        # Feature-specific components
├── pages/               # Page components
├── store/               # Redux store and slices
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── utils/               # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#8B5CF6` - Main brand color
- **Secondary Blue**: `#3B82F6` - Secondary actions
- **Success Green**: `#10B981` - Success states
- **Platform Colors**: LinkedIn Blue, Instagram Pink, etc.

### Typography
- **Headings**: Inter Bold (600-700 weight)
- **Body Text**: Inter Regular (400-500 weight)
- **Code/Data**: JetBrains Mono

### Design Principles
- **Card-based layouts** with subtle shadows
- **Generous white space** for clarity
- **Rounded corners** (8px-16px) for modern feel
- **Consistent spacing** using Tailwind's scale
- **Accessible color contrasts** for all users

## 📱 Key Pages & Components

### 1. Dashboard
- Welcome banner with personalized greeting
- Quick stats cards (posts scheduled, reach, engagement)
- Recent activity feed
- Quick action buttons
- Performance overview charts

### 2. Content Creation Wizard
**Step 1: Content Type Selection**
- Visual grid of content types (Image, Video, Text, Carousel)
- Clear icons and descriptions for each type

**Step 2: Media Upload**
- Drag-and-drop file upload area
- Support for multiple file types
- Preview thumbnails for uploaded media

**Step 3: Copy Writing & Platform Selection**
- Platform selection with visual indicators
- Caption writing with character limits
- AI-powered content suggestions
- Hashtag recommendations

**Step 4: Scheduling Options**
- Calendar picker with optimal time suggestions
- Recurring post options
- Bulk scheduling capabilities

### 3. Calendar View
- Weekly/Monthly calendar layouts
- Color-coded posts by platform
- Drag-and-drop rescheduling
- Quick edit popup modals
- Bulk action toolbar

### 4. Social Accounts Management
- Platform connection cards with status indicators
- Account permission management
- Multiple account support per platform
- Sync status and error handling

### 5. Analytics Dashboard
- Cross-platform performance metrics
- Engagement rate trends
- Best performing content analysis
- Export and reporting tools

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd fluxora-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔌 Backend Integration Points

The frontend is designed to easily integrate with a backend API:

### API Endpoints Structure
```
POST /api/auth/login
GET  /api/user/profile
GET  /api/social-accounts
POST /api/social-accounts/connect
GET  /api/content
POST /api/content
PUT  /api/content/:id
DELETE /api/content/:id
POST /api/content/:id/schedule
GET  /api/analytics
GET  /api/campaigns
```

### State Management
- Redux slices for each feature domain
- Consistent loading and error states
- Optimistic updates for better UX
- Proper serialization for API calls

## 🚦 Development Guidelines

### Code Organization
- Use functional components with hooks
- Implement proper TypeScript typing
- Follow consistent naming conventions
- Write reusable utility functions

### Styling Guidelines
- Use Tailwind utility classes
- Create custom components for repeated patterns
- Maintain consistent spacing and colors
- Ensure responsive design across all breakpoints

### Performance Optimization
- Implement component lazy loading
- Use React.memo for expensive components
- Optimize image loading with proper alt tags
- Minimize bundle size with tree shaking

## 🎯 User Experience Flow

### Onboarding Flow
1. **Welcome Screen** - Introduction to FLUXORA
2. **Social Account Connection** - Connect platforms
3. **Preferences Setup** - Set posting preferences
4. **First Content Creation** - Guided first post
5. **Dashboard Tour** - Feature walkthrough

### Content Creation Flow
1. **Content Type Selection** - Choose post type
2. **Media Upload** - Add images/videos
3. **Platform Optimization** - See platform previews
4. **Scheduling** - Set posting times
5. **Confirmation** - Review and confirm

### Daily Usage Flow
1. **Dashboard Overview** - Check performance
2. **Quick Actions** - Create or edit content
3. **Calendar Management** - Adjust schedules
4. **Analytics Review** - Monitor success

## 🔮 Future Enhancements

### Phase 2 Features
- AI-powered content generation
- Advanced analytics with competitor analysis
- Team collaboration tools
- White-label solutions for agencies

### Phase 3 Features
- Video editing capabilities
- Influencer collaboration tools
- E-commerce integration
- Advanced automation workflows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for digital marketing agencies worldwide**
