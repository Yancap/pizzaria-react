import React from 'react'
import { Btn } from '../../../components/common/Btn'
import { TitleH3 } from '../../../components/common/TitleH3'

export const Invite = () => {
  return (
  <div className=''>
    <div className='position-relative d-flex flex-column justify-content-evenly align-items-center invite'>
        <div className='text-center'>
            <p style={{fontSize: '14px'}}>Não perca essa oportunidade</p>
            <TitleH3 name="Faça sua Reserva" className='text-display'/>
        </div>
        
        <div style={{fontSize: '14px'}}>
            <p>Seg a Sex - 11h as 22h </p>
            <p>Sab a Dom - 14h as 00h</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <Btn name="Reservar" link="#" classBtn='btn-reserva d-flex justify-content-center align-items-center'classAnchor='anchor-reserva'/>
            <Btn name="Cardápio" link="#"classBtn='btn-cardapio' classAnchor='anchor-cardapio text-primary'/>
        </div>
        <footer className='position-absolute bottom-0'>
          <p className=' text-primary'> Rio de Janeiro, RJ, Rua da pizza - 204 </p>
      </footer>
    </div>
      
  </div>
  )
}
