import React from 'react'

export const Card = ({title, subtitle, classType}) => {
  return (
    
    <div className={`card ${classType}`} >
        <div className='label-card'>
            <div>
                <p>{subtitle}</p>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    </div>
  )
}
