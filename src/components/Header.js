import React from 'react'
import { Navbar } from './common/Navbar'
import { NavBurguer } from './common/NavBurguer'
import './css/Components.css'

export const Header = ({setPage}) => {
  return (
    <header className='header bg-danger container-fluid position-relative'>
      <div className='nav-desktop'>
        <Navbar setPage={setPage}/>
      </div>
      <div className='nav-mobile my-5'>
        <NavBurguer setPage={setPage}/>
      </div>
      
    </header>
  )
}
