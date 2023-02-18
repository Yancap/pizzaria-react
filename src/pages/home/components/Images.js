import React from 'react'

export const Images = ({children, className = null}) => {
  return (
    <div className={`position-relative overlap ${className}`}>
        {children}
    </div>
  )
}
