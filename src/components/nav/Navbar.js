import React from 'react'

export const Navbar = ({navs, classType}) => {
  return (
    <nav className={classType}>
      <div className='d-flex justify-content-between' style={{width:'100%'}}>
        <nav>
          {}
        </nav>
        {navs.map((nav)=><div><a href='#' className='text-primary text-display'>{nav}</a></div>)}
      </div>
    </nav>
  )
}
