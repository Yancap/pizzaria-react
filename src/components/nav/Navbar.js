import React from 'react'

export const Navbar = ({navs, classType}) => {
  return (
    <nav className={classType}>
      <div>
        
        {navs.map((nav)=><div><a href='#'>{nav}</a></div>)}
      </div>
    </nav>
  )
}
