import React from 'react'
import { Btn } from './assets/Btn'
import { TitleH3 } from './assets/TitleH3'

import { Logo } from './assets/Logo'
import { Navbar } from './nav/Navbar'

export const Footer = () => {
  return (
    <footer className='footer container-fluid bg-red-dark py-5'>
        <div className='mb-4'>
            <Logo/>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='d-flex flex-column col-4'>
                <TitleH3 name='Contatos'className='text-display mb-4'/>
                <div className='d-flex flex-column justify-content-between' style={{height: '50%'}}>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i class="fa-solid fa-location-dot fa-xl me-2"></i>
                        <p >Rio de Janeiro, RJ, Rua da pizza - 204 </p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i className='fa-solid fa-phone fa-xl me-2'></i>
                        <p>+55 (21)98765-4321 / 2234-5678</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i class="fa-solid fa-envelope fa-xl me-2"></i>
                        <p>pizzascript@email.com</p>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <TitleH3 name="Navegação" className='text-display'/>
                <nav>
                    {["Home", "Restaurante", "Cardápio", "Reservas", "Contato"].map((nav)=>(
                    <div className='select-nav'>
                        <a href='#' className='text-tertiary'>{nav}</a>
                    </div>
                    ))}
                </nav>
            </div>
            <div className='col-3'>
                <TitleH3 name="Redes" className='text-display mb-4'/>
                <div className='d-flex flex-column justify-content-between' style={{height: '50%'}}>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i class="fa-brands fa-square-facebook fa-xl me-2"></i>
                        <p>Facebook</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i class="fa-brands fa-instagram fa-xl me-2"></i>
                        <p>Instagram</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center'>
                        <i class="fa-brands fa-linkedin fa-xl me-2"></i>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
           
        </div>
        
        <div>
            <Btn name="FAÇA SUA RESERVA" link="#" classBtn={"btn-primary btn-footer d-flex align-items-center justify-content-center mt-2"} classAnchor="anchor-btn-footer text-danger"/>
        </div>
    </footer>
  )
}
