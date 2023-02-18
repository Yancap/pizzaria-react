import React from 'react'

export const LabelImg = ({text}) => {
  return (
    <div className='label d-flex justify-content-center align-items-center position-relative'>
        <div className='text-display'>
            <h1>{text}</h1>
        </div>
    </div>
  )
}
