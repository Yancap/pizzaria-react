import React from 'react'
import './Navbar.css'

export const Navbar = ({navs, classType}) => {
  return (
    <nav className={classType}>
      <div className='d-flex justify-content-between' style={{width:'100%'}}>
        
        {navs.map((nav)=><div><a href='#' className='text-primary text-display'>{nav}</a></div>)}
      </div>
    </nav>
  )
}
