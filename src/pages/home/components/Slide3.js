import React from 'react'
import styled from 'styled-components'
import { Btn } from '../../../components/common/Btn'
import { TitleH2 } from '../../../components/common/TitleH2'
import { FooterSlide } from './FooterSlide'

const Paragraph = styled.p`
    width: 60%;
    font-size: calc(0.75em + 0.25vw);
    @media screen and (max-width: 900px){
      width: 100%;
    }
`

export const Slide3 = () => {
  return (
    <div className='carousel-item slider-item-3 container-fluid pt-5'>
        <TitleH2 name="Tradição Familiar" className='title title-carousel'/>
        <div className='text-display fs-5 text-tertiary'>
            <Paragraph >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
        </div>
        <Btn name="Saiba Mais" link="#" classBtn={"btn-primary mt-5"} classAnchor={"text-tertiary text-display"}/> 
        <footer className='text-primary position-absolute bottom-0 footer-slider mb-1'>
          <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204" />
          <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
        </footer>
    </div>
  )
}
