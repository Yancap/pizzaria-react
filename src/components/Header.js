import React from 'react'
import { Btn } from './common/Btn'
import { Logo } from './common/Logo'
import { Navbar } from './common/Navbar'
import './css/Components.css'

export const Header = ({setPage}) => {
  return (
    <header className='header bg-danger container-fluid '>
      <div className='d-flex justify-content-between'>
        <div onClick={()=> setPage(0)} style={{cursor: 'pointer'}}>
          <Logo/>
        </div>
        
        <div className='d-flex col-8 justify-content-evenly'>
          <Navbar setPage={setPage} navs={["Restaurante", "Cardápio", "Reservas", "Contato"]} classType="nav-header col-7 d-flex align-items-end justify-content-between"/>
          <Btn name="FAÇA SUA RESERVA"  link="#" classBtn={"btn-primary btn-header d-flex align-items-center align-self-end"} classAnchor="anchor-btn-header text-display"/>
        </div>
      </div>
    </header>
  )
}
