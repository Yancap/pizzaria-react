import React from 'react'
import { TitleH3 } from '../../../components/common/TitleH3'
import { FooterSlide } from './FooterSlide'

export const Slide2 = () => {
  return (
    <div className='carousel-item slider-item-2 container-fluid pt-5'>
        <TitleH3 name='Promoção do Dia' className='title title-extra fs-1' />
        <div className='text-display' style={{fontSize: '3.5rem'}}>
            <p>Peça 2 Pizzas tamanho G e Ganhe 1 Pizza brotinho</p>
        </div>
        <TitleH3 name='Por Apenas' className='title title-extra' />
        <TitleH3 name='R$ 80,00' className='text-display' style={{fontSize: '5rem'}}/>
        <footer className='text-primary position-absolute bottom-0 footer-slider mb-1'>
          <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204" />
          <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
        </footer>
     </div>
  )
}
