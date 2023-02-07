import React from 'react'
import { Btn } from '../../../components/assets/Btn'
import { Card } from '../../../components/assets/Card'
import { FunctionalTitle } from '../../../components/assets/FunctionalTitle'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { TitleH3 } from '../../../components/assets/TitleH3'
import { FooterSlide } from './FooterSlide'

export const Slider1 = () => {
  return (
    <div>
        <TitleH2 name="Nosso Menu"/>
        <div className=''>
            <Card title='Pizza' subtitle={null} classType='pizza'/>
            <Card title='Massa' subtitle={null} classType='massa'/>
            <Card title='Sobremesa' subtitle={null} classType='sobremesa'/>
            <Card title='Drinks' subtitle={null} classType='drink'/>
        </div>
        <TitleH3 name='Rodizio + Refil livre'/>
        <div>
            <FunctionalTitle name='R$ 69,00' classType={null}/>
            <Btn name='FAÇA SUA RESERVA' link='#' classType=''/>
        </div>
        <FooterSlide name="Oferta válida apenas em finais de semana" />
    </div>
  )
}
