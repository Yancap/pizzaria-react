import React from 'react'
import styled from 'styled-components'
import { Btn } from '../../../components/common/Btn'
import { Card } from '../../../components/common/Card'
import { TitleH2 } from '../../../components/common/TitleH2'
import { TitleH3 } from '../../../components/common/TitleH3'
import { ButtonCallAction } from './ButtonCallAction'
import { FooterSlide } from './FooterSlide'

const ContainerDesktop = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`
const ContainerMobile = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`
const Price = styled.h4`
  font-size: 5.5em;
  

`


export const Slider1 = () => {
  return (
    <div className='carousel-item active slider-item-1 container-fluid pt-5 position-relative '>
        
        <ContainerDesktop>
          <TitleH2 name="Nosso Menu" className='title title-carousel'/>
          <div className='card-container d-flex col-xl-10 col-12  justify-content-between flex-wrap'>
              <Card title='Pizzas' subtitle={null} className='pizza '/>
              <Card title='Massas' subtitle={null} className='massa'/>
              <Card title='Sobremesas' subtitle={null} className='sobremesa'/>
              <Card title='Drinks' subtitle={null} className='drink'/>
          </div>
        </ContainerDesktop>

        <TitleH3 name='Rodizio + Refil livre' className='text-display text-warning mt-5 fs-1' />
        <div className='div-price d-flex col-12 justify-content-between flex-wrap '>
            <Price className='text-display text-primary'>R$ 49,90</Price>
            <Btn name='FAÇA SUA RESERVA' link='#' classBtn='btn btn-warning px-3 py-3 align-self-center flex-shrink-0' classAnchor='text-danger text-display  fs-1'/>
        </div>
        <ContainerMobile className='mt-4'>
          <FooterSlide name="Oferta válida apenas em finais de semana" className='text-primary mt-2 fs-5 fw-lighter'/>
          <ButtonCallAction className='btn bg-danger fs-2 text-display'>Veja o Cardapio</ButtonCallAction>
        </ContainerMobile>
        <ContainerDesktop>
          <FooterSlide name="Oferta válida apenas em finais de semana" className='text-primary position-absolute bottom-0'/>
        </ContainerDesktop>
        

    </div>
  )
}
