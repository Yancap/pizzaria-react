import React from 'react'
import { FunctionalTitle } from '../../../components/assets/FunctionalTitle'
import { FooterSlide } from './FooterSlide'

export const Slide2 = () => {
  return (
    <div className='slider'>
        <FunctionalTitle name='Promoção do Dia' classType={null} />
        <div className=''>
            <p>Peça 2 Pizzas tamanho G e Ganhe 1 Pizza brotinho</p>
        </div>
        <FunctionalTitle name='Por Apenas' classType={null} />
        <FunctionalTitle name='R$ 80,00' classType={null}/>
        <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204" />
        <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
    </div>
  )
}
