import React from 'react'

export const GridTop = ({children}) => {
  return (
    <div className='d-flex justify-content-between'>
        <div >
            {children[0]}
        </div>
        <div>
            {children[1]}
        </div>
        <div>
            {children[2]}
        </div>
    </div>
  )
}
