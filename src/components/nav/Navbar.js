import React from 'react'

export const Navbar = ({navs, classType}) => {
  return (
    <nav className={classType}>
      <div className='d-flex justify-content-between' style={{width:'100%'}}>
        
        {navs.map((nav)=><div><a href='#' className='text-primary '>{nav}</a></div>)}
      </div>
    </nav>
  )
}
