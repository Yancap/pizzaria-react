import React from 'react'

export const Card = ({title, subtitle, classType}) => {
  return (
    
    <div className={`card d-flex justify-content-center ${classType}`} >
        <div className='label-card d-flex justify-content-center'>
          <div className='position-relative'>
            <div>
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
