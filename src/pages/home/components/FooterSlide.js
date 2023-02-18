import React from 'react'

export const FooterSlide = ({name, emphasis, className}) => {
    if(emphasis){
        return (
            <footer className={className}>
                <p><strong>{emphasis}</strong>{name}</p>
            </footer> 
        )
    }
    return (
       <footer className={className}>
            <p>{name}</p>
        </footer> 
    )
  
    
  
}
