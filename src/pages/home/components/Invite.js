import React from 'react'
import styled from 'styled-components'
import { Btn } from '../../../components/common/Btn'
import { TitleH3 } from '../../../components/common/TitleH3'

const Title = styled.h3`
    font-size: 2.25em;
`

export const Invite = () => {
  return (
  <div className='container-invite'>
    <div className='position-relative d-flex flex-column justify-content-evenly align-items-center invite'>
        <div className='text-center'>
            <p style={{fontSize: '0.9em'}}>Não perca essa oportunidade</p>
            <Title className='text-display'>Faça sua Reserva</Title>
        </div>
        
        <div style={{fontSize: '0.9em'}}>
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
