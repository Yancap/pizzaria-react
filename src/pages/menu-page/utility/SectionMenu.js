import React from 'react'

export const SectionMenu = ({subtitle, children}) => {
  return (
    <div className='mt-5'>
        <div className='text-center'>
            <p className='text-display paragraph ' style={{fontSize: '1.5em'}}>{subtitle}</p>
        </div>
        <div className='d-flex justify-content-lg-between justify-content-evenly flex-wrap'>
                {children[0]}
                {children[1]}
                {children[2]}
        </div>
    </div>
  )
}
