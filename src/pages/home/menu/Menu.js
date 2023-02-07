import React from 'react'
import { Card } from '../../../components/assets/Card'
import { TitleH2 } from '../../../components/assets/TitleH2'

export const Menu = ({children}) => {
  return (
    <section id='section-menu'>
        {children}
        <TitleH2 name="Cardapio" />
        <div>
            <Card title='Pizza' subtitle="Tradizione italiana" idName='pizza'/>
            <Card title='Massa' subtitle="Ricetta di famiglia" idName='massa'/>
            <Card title='Sobremesa' subtitle="Esclusività della casa" idName='sobremesa'/>
            <Card title='Drinks' subtitle="i migliori dolci" idName='drink'/>
        </div>
    </section>
  )
}
