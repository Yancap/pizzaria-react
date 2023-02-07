import React from 'react'
import { Btn } from '../../../components/assets/Btn'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { FooterSlide } from './FooterSlide'

export const Slide3 = () => {
  return (
    <div>
        <TitleH2 name="Tradição Familiar"/>
        <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <Btn name="Saiba Mais" link="#" classType=""/> 
        <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204" />
        <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
    </div>
  )
}
