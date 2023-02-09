import React from 'react'
import { Btn } from './assets/Btn'
import { Colunm } from './assets/Colunm'
import { H4 } from './footer/H4'
import { Infos } from './footer/Infos'
import { Logo } from './assets/Logo'
import { Navbar } from './nav/Navbar'

export const Footer = () => {
  return (
    <footer className='container-fluid'>
        <div>
            <Logo/>
        </div>
        <Colunm>
            <H4 name="Contatos"/>
            <Infos/>
        </Colunm>
        <Colunm>
            <H4 name="Navegação"/>
            <Navbar navs={["Home", "Restaurante", "Cardápio", "Reservas", "Contato"]} classType={"nav-footer"} />
        </Colunm>
        <div>
            <Btn name="FAÇA SUA RESERVA" link="#"/>
        </div>
    </footer>
  )
}
