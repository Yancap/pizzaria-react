import React from 'react'
import { Card } from '../../../components/assets/Card'
import { TitleH2 } from '../../../components/assets/TitleH2'

export const Menu = ({children}) => {
  return (
    <section id='section-menu' className='my-5'>
        {children}
        <TitleH2 name="Cardapio" className="title title-green mt-5"/>
        <div className='grid-card'>
          
            <Card title='Pizza' subtitle="Tradizione italiana" className='pizza'/>
            <Card title='Massa' subtitle="Ricetta di famiglia" className='massa'/>
            <Card title='Drinks' subtitle="i migliori dolci" className='drink '/>
          
            <Card title='Sobremesa' subtitle="Esclusività della casa" className='sobremesa '/>
            
          
            
        </div>
    </section>
  )
}
