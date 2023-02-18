import React from 'react'

export const Card = ({title, subtitle, className}) => {
  return (
    
    <div className={`card d-flex justify-content-center ${className}`} >
        <div className='label-card d-flex justify-content-center'>
          <div className='position-relative d-flex flex-column align-items-center'>
            <div className='subtitle'>
                <p>{subtitle}</p>
            </div>
            <div>
                <h3 className='title'>{title}</h3>
            </div>
          </div>
            
          <div className='overlay-label'></div>
        </div>
    </div>
  )
}
