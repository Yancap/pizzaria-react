import React from 'react'
import { Btn } from './common/Btn'
import { TitleH3 } from './common/TitleH3'
import { Logo } from './common/Logo'
import { Link } from 'react-router-dom'


export const Footer = ({setPage}) => {
    const navs = [
        {name:"Home", path:"/"},
        {name:"Restaurante", path:"nosso-espaco"}, 
        {name:"Cardápio", path:"cardapio"}, 
        {name:"Reservas", path:"reservas"}, 
        {name:"Contatos", path:"contatos"}
      ]  
  return (
    <footer className='footer container-fluid bg-red-dark py-5'>
        <Link  to="/" style={{cursor: 'pointer'}}>
            <Logo/>
        </Link>
        <div className='d-flex flex-column'>
            <div className='d-flex flex-md-row justify-content-between flex-column mt-4  order-md-1 order-2'>
            <div className='d-flex flex-column col-md-4 col-12 footer-item-1'>
                <TitleH3 name='Contatos'className='text-display mb-4'/>
                <div className='d-flex flex-column justify-content-between' style={{height: '50%'}}>
                    <div className='text-tertiary d-flex align-items-center info-footer'>
                        <i class="fa-solid fa-location-dot fa-xl me-2"></i>
                        <p >Rio de Janeiro, RJ, Rua da pizza - 204 </p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center info-footer'>
                        <i className='fa-solid fa-phone fa-xl me-2'></i>
                        <p>+55 (21)98765-4321 / 2234-5678</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center info-footer'>
                        <i class="fa-solid fa-envelope fa-xl me-2"></i>
                        <p>pizzascript@email.com</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-10 footer-item-2'>
                <TitleH3 name="Navegação" className='text-display'/>
                <nav>
                    {navs.map((nav, index)=>(
                    <div className='select-nav' onClick={()=>{
                        setPage(index)
                    }} key={index}>
                        <Link to={nav.path}>
                            <a href='#' className='text-tertiary link-footer'>{nav.name}</a>
                        </Link>
                        
                    </div>
                    ))}
                </nav>
            </div>
            <div className='col-md-3 col-10 footer-item-3'>
                <TitleH3 name="Redes" className='text-display mb-4'/>
                <div className='d-flex flex-column justify-content-between' style={{height: '50%'}}>
                    <div className='text-tertiary d-flex align-items-center info-footer'>
                        <i class="fa-brands fa-square-facebook fa-xl me-2"></i>
                        <p>Facebook</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center info-footer'>
                        <i class="fa-brands fa-instagram fa-xl me-2"></i>
                        <p>Instagram</p>
                    </div>
                    <div className='text-tertiary d-flex align-items-center info-footer' >
                        <i class="fa-brands fa-linkedin fa-xl me-2"></i>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
           
            </div>
            <div className='mt-4 order-md-2 order-1'>
                <Btn name="FAÇA SUA RESERVA" link="#" classBtn={"btn-primary btn-footer d-flex align-items-center justify-content-center mt-2"} classAnchor="anchor-btn-footer text-danger"/>
            </div>
        </div>
        
    </footer>
  )
}
