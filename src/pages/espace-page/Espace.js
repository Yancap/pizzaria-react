import React from 'react'
import { LabelImg } from '../../components/common/LabelImg'
import { GridFooter } from './utility/GridFooter'
import { GridTop } from './utility/GridTop'
import './css/Espace.css'
import { Head } from '../Head'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-weight: 700;
  width: 60vw;
  @media screen and (max-width: 992px){
    width: initial;
    font-size: 1em;
  }
  `

export const Espace = () => {
  return (
    <section className='pb-5' >
      <Head title="Nosso Espaço" />
        <LabelImg text="NOSSO ESPAÇO" />
        <div className='container-fluid'>
          <Paragraph className='text py-5' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries</Paragraph>
          <div className='grid-espace mb-5'>
              <div className='image espace-1'></div>
              <div className='image espace-2'></div>
              <div className='image espace-3'></div>
          
              <div className='image espace-4'></div>
              <div className='image espace-5'></div>
              <div className='image espace-6'></div>
          </div>

          
        </div>
        

    </section>
  )
}
