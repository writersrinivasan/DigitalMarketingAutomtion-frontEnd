import React from 'react'

interface SimpleLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

export const SimpleLogo: React.FC<SimpleLogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = ''
}) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl' },
    xl: { icon: 'w-24 h-24', text: 'text-5xl' }
  }

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizes[size].icon} bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg`}>
        <img 
          src="/fluxora-logo.svg" 
          alt="FLUXORA Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`${sizes[size].text} font-bold text-gray-900 ml-3`}>
          FLUXORA
        </span>
      )}
    </div>
  )
}
