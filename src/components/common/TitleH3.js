import React from 'react'

export const TitleH3 = ({name, className, ...props}) => {
    return (
      <div>
          <h3 className={className} {...props}>{name}</h3>
      </div>
  )
}
