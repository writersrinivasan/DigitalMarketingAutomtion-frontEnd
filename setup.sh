#!/bin/bash

# FLUXORA GitHub Setup Script
# Run this script to push your codebase to GitHub

echo "🚀 FLUXORA - GitHub Setup Script"
echo "================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the FLUXORA project root directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "✅ Found package.json - we're in the right place!"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📦 Adding all files to git..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit the changes
    echo "💾 Committing changes..."
    git commit -m "🚀 FLUXORA Frontend: Complete React-based Digital Marketing Automation SaaS

✨ Features Added:
- Modern authentication system with Redux integration
- Beautiful responsive dashboard with analytics  
- Content creation and scheduling interface
- Multi-platform social media integrations (UI ready)
- Comprehensive logo system with fallback support
- Settings and user management pages

🎨 Design Highlights:
- Agency-focused modern UI/UX with gradients
- Tailwind CSS with custom design system
- Mobile-responsive layouts
- Professional color schemes and typography

🛠️ Technical Implementation:
- React 18+ with TypeScript for type safety
- Redux Toolkit for state management
- Vite for optimized development and builds
- React Hook Form + Zod for form validation
- React Router for navigation
- Production-ready architecture

📱 Current Status:
- ✅ Fully functional frontend
- ✅ All components implemented
- ✅ Authentication working with demo credentials
- ✅ Responsive design tested
- ✅ Ready for backend integration

🔗 Demo: http://localhost:5173
📧 Demo Login: demo@fluxora.com / demo123

Ready to revolutionize digital marketing automation! 🌟"
fi

# Add remote repository
echo "🔗 Setting up GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/writersrinivasan/DigitalMarketingAutomtion-frontEnd.git

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Push to GitHub
echo "🚀 Pushing to GitHub..."
echo "📡 Repository: https://github.com/writersrinivasan/DigitalMarketingAutomtion-frontEnd.git"

if git push -u origin main; then
    echo ""
    echo "🎉 SUCCESS! Your FLUXORA codebase has been pushed to GitHub!"
    echo ""
    echo "📋 What's been uploaded:"
    echo "   ✅ Complete React frontend application"
    echo "   ✅ All components and pages"
    echo "   ✅ Redux store configuration" 
    echo "   ✅ Tailwind CSS styling"
    echo "   ✅ TypeScript type definitions"
    echo "   ✅ Build configuration (Vite)"
    echo "   ✅ Comprehensive README.md"
    echo ""
    echo "🔗 Repository URL:"
    echo "   https://github.com/writersrinivasan/DigitalMarketingAutomtion-frontEnd"
    echo ""
    echo "🚀 Next Steps:"
    echo "   1. Visit the repository on GitHub"
    echo "   2. Set up GitHub Pages or deploy to Vercel/Netlify"
    echo "   3. Configure environment variables for production"
    echo "   4. Set up CI/CD pipeline for automated deployments"
    echo ""
    echo "💡 To run the application:"
    echo "   npm install"
    echo "   npm run dev"
    echo ""
    echo "🎯 Demo credentials:"
    echo "   Email: demo@fluxora.com"
    echo "   Password: demo123"
    echo ""
else
    echo ""
    echo "❌ Push failed. This might be due to:"
    echo "   1. Authentication required - you may need to:"
    echo "      - Set up a personal access token"
    echo "      - Configure SSH keys" 
    echo "      - Use 'gh auth login' if you have GitHub CLI"
    echo ""
    echo "   2. Repository doesn't exist or you don't have access"
    echo ""
    echo "🔧 Manual steps you can try:"
    echo "   1. Go to GitHub and create the repository if it doesn't exist"
    echo "   2. Set up authentication: https://docs.github.com/en/authentication"
    echo "   3. Run: git push -u origin main"
    echo ""
fi

echo ""
echo "📁 Your local files are ready and committed to git!"
echo "🎉 FLUXORA frontend development complete!"
    echo "✅ .env file created"
fi

# Create additional directories if needed
mkdir -p src/assets/images
mkdir -p src/assets/icons
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/services

echo "📁 Directory structure created"

# Display completion message
echo ""
echo "🎉 FLUXORA setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Start building amazing features!"
echo ""
echo "📚 Useful commands:"
echo "   • npm run dev          - Start development server"
echo "   • npm run build        - Build for production"
echo "   • npm run preview      - Preview production build"
echo "   • npm run lint         - Run ESLint"
echo "   • npm run type-check   - Run TypeScript type checking"
echo ""
echo "🔗 Resources:"
echo "   • Documentation: ./README.md"
echo "   • Design System: Check tailwind.config.js"
echo "   • Component Library: src/components/"
echo ""
