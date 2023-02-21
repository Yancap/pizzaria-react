import React from 'react'
import styled from 'styled-components'
import { Btn } from '../../../components/common/Btn'
import { FooterSlide } from './FooterSlide'
import { ContainerDesktop } from './Slide2'

const Paragraph = styled.p`
    width: 60%;
    font-size: calc(0.75em + 0.25vw);
    @media screen and (max-width: 900px){
      width: 100%;
    }
`
const TitleTradition = styled.h2`
    font-size: 4.25em;
    @media screen and (max-width: 500px){
      font-size: 3.75em;
      
    }
`
const ContainerSlide = styled.div`


    @media screen and (max-width: 768px){
      font-size: 14px;
      
    }

`

export const Slide3 = () => {
  return (
    <ContainerSlide className='carousel-item slider-item-3 container-fluid pt-5'>
      
          <TitleTradition  className='title'>Tradição Familiar</TitleTradition>
          <div className='text-display fs-5 text-tertiary'>
              <Paragraph >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Paragraph>
          </div>
          <Btn name="Saiba Mais" link="#" classBtn={"btn-primary mt-3 py-2 px-4 align-self-start"} classAnchor={"text-tertiary text-display fs-1"}/> 
          <ContainerDesktop>
            <footer className='text-primary position-absolute bottom-0 footer-slider mb-1'>
              <FooterSlide emphasis="Local: " name="Rio de Janeiro, RJ, Rua da pizza - 204" />
              <FooterSlide emphasis="Horário de Funcionamento: " name="Seg a Sex - 11:00 até 22:00 | Sab a Dom - 14:00 até 00:00" />
            </footer>
          </ContainerDesktop>
      
    </ContainerSlide>
  )
}
