import React from 'react'

export const FooterSlide = ({name, emphasis}) => {
    if(emphasis){
        return (
            <footer className=''>
                <p><strong>{emphasis}</strong>{name}</p>
            </footer> 
        )
    }
    return (
       <footer className=''>
            <p>{name}</p>
        </footer> 
    )
  
    
  
}
