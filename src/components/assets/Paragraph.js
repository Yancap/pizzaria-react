import React from 'react'

export const Paragraph = ({p, classType}) => {
  return (
    <div>
        <p className={classType}>{p}</p>
    </div>
  )
}
