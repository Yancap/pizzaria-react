import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from './Btn'
import { Logo } from './Logo'

export const Navbar = () => {
  const navs = [
    {name:"Restaurante", path:"nosso-espaco"}, 
    {name:"Cardápio", path:"cardapio"},
    {name:"Contatos", path:"contatos"},
    {name:"Reservas", path:"reservas"}
    
  ]
  return (
    <div className='d-flex justify-content-between'>
        <Link to="/" style={{cursor: 'pointer'}}>
          <Logo/>
        </Link>
        
        <div className='d-flex col-xl-8 col-lg-10 col-12 justify-content-evenly'>
          <div className="nav-header col-7 d-flex align-items-end justify-content-between">
            <div className='d-flex justify-content-between' style={{width:'100%'}}>
              {navs.map((nav, i)=>(
                <div key={i+1}>
                  <Link to={nav.path}>
                    <a href='#' className='text-primary text-display'>{nav.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Btn name="FAÇA SUA RESERVA"  link="#" classBtn={"btn-primary btn-header d-flex align-items-center align-self-end"} classAnchor="anchor-btn-header text-display"/>
        </div>
      </div>
  )
}
