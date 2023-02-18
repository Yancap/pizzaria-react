import React from 'react'

export const SectionMenu = ({subtitle, children}) => {
  return (
    <div className='mt-5'>
        <div className='text-center'>
            <p className='text-display paragraph ' style={{fontSize: '1.5em'}}>{subtitle}</p>
        </div>
        <div className='d-flex justify-content-between'>
            <div>
                {children[0]}
            </div>
            <div>
                {children[1]}
            </div>
            <div>
                {children[2]}
            </div>
        </div>
    </div>
  )
}
