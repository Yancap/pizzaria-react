import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

const DivLogo = styled.div`
    width: 8em;
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 7em;
    }
`

export const NavBurguer = ({setPage}) => {
const navs = ["Home", "Restaurante", "Cardápio", "Reservas", "Contato"]
  return (
        <nav className="navbar fixed-top bg-danger">
            <div className="container-fluid">
                <DivLogo onClick={()=> setPage(0)} >
                    <Logo/>
                </DivLogo>
                <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className='navbar-toggler-stroke'></span>
                    <span className='navbar-toggler-stroke'></span>
                    <span className='navbar-toggler-stroke'></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header" style={{backgroundColor: '#D38D3B'}}>
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">PizzaScript</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body bg-danger">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {
                            navs.map((nav, i)=>(
                                <li key={i} className="nav-item" >
                                    <a className="nav-link text-primary text-display mb-2" href='#' onClick={() => {setPage(i)}} >{nav}</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                </div>
            </div>
        </nav>
  )
}
