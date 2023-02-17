import React from 'react'

export const Navbar = ({navs, classType, setPage}) => {
  return (
    <nav className={classType}>
      <div className='d-flex justify-content-between' style={{width:'100%'}}>
        
        {navs.map((nav, i)=>(
          <div key={i+1} onClick={() => setPage(i+1)}>
            <a href='#' className='text-primary text-display'>{nav}</a>
          </div>
        ))}
      </div>
    </nav>
  )
}
