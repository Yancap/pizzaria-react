import React from 'react'
import { LabelImg } from '../../components/common/LabelImg'
import './css/Espace.css'
import espace1 from '../../assets/images/espace/foto-espaco-1.png'
import espace2 from '../../assets/images/espace/foto-espaco-2.png'
import espace3 from '../../assets/images/espace/foto-espaco-3.png'
import espace4 from '../../assets/images/espace/foto-espaco-4.png'
import espace5 from '../../assets/images/espace/foto-espaco-5.png'
import espace6 from '../../assets/images/espace/foto-espaco-6.png'

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
              <div className='espace-1'>
                <img src={espace1} alt="" className="img-fluid" />
              </div>
              <div className='espace-2'>
                <img src={espace2} alt="" className="img-fluid" />
              </div>
              <div className='espace-3'>
                <img src={espace3} alt="" className="img-fluid" />
              </div>
    
              <div className='espace-4'>
                <img src={espace4} alt="" className="img-fluid" />
              </div>
              <div className='espace-5'>
                <img src={espace5} alt="" className="img-fluid" />
              </div>
              <div className='espace-6'>
                <img src={espace6} alt="" className="img-fluid" />
              </div>
          </div>

          
        </div>
        

    </section>
  )
}
