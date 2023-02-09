import React from 'react'
import { LabelImg } from '../../components/assets/LabelImg'
import { Paragraph } from '../../components/assets/Paragraph'
import { GridFooter } from './assets/GridFooter'
import { GridTop } from './assets/GridTop'
export const Espace = () => {
  return (
    <section className='container-fluid'>
        
        <LabelImg text="Nosso Espaço" />
        <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries" />
        <GridTop>
            <img src="" alt="#" srcset="" />
            <img src="" alt="#" srcset="" />
            <img src="" alt="#" srcset="" />
        </GridTop>
        <GridFooter>
            <img src="" alt="#" srcset="" />
            <img src="" alt="#" srcset="" />
            <img src="" alt="#" srcset="" />
        </GridFooter>

    </section>
  )
}
