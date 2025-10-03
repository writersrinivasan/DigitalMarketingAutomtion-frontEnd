import React, { useState } from 'react'

interface LogoProps {
  variant?: 'full' | 'icon' | 'text'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
  logoSrc?: string
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md', 
  className = '',
  showText = true,
  logoSrc = '/fluxora-logo.svg'
}) => {
  const [imageLoaded, setImageLoaded] = useState(true)

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  }

  const fallbackTextSizes = {
    sm: 'text-xs',
    md: 'text-lg',
    lg: 'text-3xl',
    xl: 'text-5xl'
  }

  // Logo Icon Component
  const LogoIcon = () => (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg`}>
      {imageLoaded ? (
        <img 
          src={logoSrc}
          alt="FLUXORA" 
          className="w-full h-full object-contain p-1"
          onError={() => setImageLoaded(false)}
          onLoad={() => setImageLoaded(true)}
        />
      ) : (
        <span className={`text-white font-bold ${fallbackTextSizes[size]}`}>
          F
        </span>
      )}
    </div>
  )

  // Text Component
  const LogoText = () => (
    <span className={`${textSizeClasses[size]} font-bold text-gray-900 ml-3`}>
      FLUXORA
    </span>
  )

  if (variant === 'icon') {
    return <LogoIcon />
  }

  if (variant === 'text') {
    return <LogoText />
  }

  return (
    <div className={`flex items-center ${className}`}>
      <LogoIcon />
      {showText && <LogoText />}
    </div>
  )
}
