import React from 'react'
import { Btn } from './Btn'
import { Logo } from './Logo'

export const Navbar = ({setPage}) => {
  const navs = ["Restaurante", "Cardápio", "Reservas", "Contato"]
  return (
    <div className='d-flex justify-content-between'>
        <div onClick={()=> setPage(0)} style={{cursor: 'pointer'}}>
          <Logo/>
        </div>
        
        
        <div className='d-flex col-xl-8 col-lg-10 col-12 justify-content-evenly'>
          <div className="nav-header col-7 d-flex align-items-end justify-content-between">
            <div className='d-flex justify-content-between' style={{width:'100%'}}>
              {navs.map((nav, i)=>(
                <div key={i+1} onClick={() => setPage(i+1)}>
                  <a href='#' className='text-primary text-display'>{nav}</a>
                </div>
              ))}
            </div>
          </div>
          <Btn name="FAÇA SUA RESERVA"  link="#" classBtn={"btn-primary btn-header d-flex align-items-center align-self-end"} classAnchor="anchor-btn-header text-display"/>
        </div>
      </div>
  )
}
