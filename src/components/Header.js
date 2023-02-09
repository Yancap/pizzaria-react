import React from 'react'
import { Btn } from './assets/Btn'
import { Logo } from './assets/Logo'
import { Navbar } from './nav/Navbar'
import './css/Header.css'
export const Header = () => {
  return (
    <header className='header bg-danger container-fluid '>
      <div className='d-flex justify-content-between'>
        <Logo/>
        <div className='d-flex col-8 justify-content-evenly'>
          <Navbar navs={["Restaurante", "Cardápio", "Reservas", "Contato"]} classType="nav-header col-6 d-flex align-items-end justify-content-between"/>
          <Btn name="FAÇA SUA RESERVA"  link="#" classBtn={"btn-header d-flex align-items-center align-self-end"} classAnchor="anchor-btn-header"/>
        </div>
      </div>
    </header>
  )
}
