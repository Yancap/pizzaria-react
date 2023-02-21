import React from 'react'
import styled from 'styled-components'
import { TitleH3 } from '../../../components/common/TitleH3'
import { ButtonCallAction } from './ButtonCallAction'
import { FooterSlide } from './FooterSlide'


export const ContainerDesktop = styled.div`
    @media screen and (max-width: 500px){
      display: none;
    }
`
export const ContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 500px){
      display: block;
    }
`
export const Slide2 = () => {
  return (
    <div className='carousel-item slider-item-2 container-fluid pt-5'>
        <TitleH3 name='Promoção do Dia' className='title title-extra fs-1' />
        <div className='text-display' >
            <p style={{fontSize: 'calc(1.5rem + 3.5vw)'}}>Peça 2 Pizzas tamanho G e Ganhe 1 Pizza brotinho</p>
        </div>
        <TitleH3 name='Por Apenas' className='title title-extra fs-2' />
        <TitleH3 name='R$ 80,00' className='text-display' style={{fontSize: 'calc(1.5rem + 3.5vw)'}}/>
        <ContainerDesktop>
          <footer className='text-primary position-absolute bottom-0 footer-slider mb-1' >
            <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204"  />
            <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
          </footer>
        </ContainerDesktop>
        <ContainerMobile className='mt-3'>
          <ButtonCallAction className='btn bg-danger fs-3 text-display'>VENHA NOS CONHECER</ButtonCallAction>
        </ContainerMobile>
     </div>
  )
}
