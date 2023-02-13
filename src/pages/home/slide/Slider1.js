import React from 'react'
import { Btn } from '../../../components/assets/Btn'
import { Card } from '../../../components/assets/Card'
import { FunctionalTitle } from '../../../components/assets/FunctionalTitle'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { TitleH3 } from '../../../components/assets/TitleH3'
import { FooterSlide } from './FooterSlide'

export const Slider1 = () => {
  return (
    <div className='carousel-item active slider-item-1 container-fluid pt-5 position-relative '>
        <TitleH2 name="Nosso Menu" className='title title-carousel'/>
        <div className='card-container d-flex col-9 justify-content-between '>
            <Card title='Pizzas' subtitle={null} className='pizza '/>
            <Card title='Massas' subtitle={null} className='massa'/>
            <Card title='Sobremesas' subtitle={null} className='sobremesa'/>
            <Card title='Drinks' subtitle={null} className='drink'/>
        </div>
        <TitleH3 name='Rodizio + Refil livre' className='text-display text-warning mt-5' style={{fontSize: '2.5rem'}}/>
        <div className='d-flex col-12 justify-content-between'>
            <TitleH3 name='R$ 69,00' className='text-display text-primary price'/>
            <Btn name='FAÇA SUA RESERVA' link='#' classBtn='btn btn-warning px-5 py-3 align-self-center' classAnchor='text-danger text-display anchor-btn'/>
        </div>
        <FooterSlide name="Oferta válida apenas em finais de semana" className='text-primary position-absolute bottom-0'/>
    </div>
  )
}
