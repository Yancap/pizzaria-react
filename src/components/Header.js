import React from 'react'
import { Btn } from './assets/Btn'
import { Logo } from './nav/Logo'
import { Navbar } from './nav/Navbar'
export const Header = () => {
  return (
    <header>
      <div>
        <Logo/>
        <div>
          <Navbar navs={["Restaurante", "Cardápio", "Reservas", "Contato"]} classType="nav-header"/>
          <Btn name="FAÇA SUA RESERVA"  link="#" />
        </div>
      </div>
    </header>
  )
}
