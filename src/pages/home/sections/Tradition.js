import React from 'react'
import { TitleSection } from '../components/TitleSection'
import { Images } from '../components/Images'
import styled from 'styled-components'
import imgTradition from '../../../assets/images/home/chef1-tradicao.png'
import imgEspace from '../../../assets/images/home/espaco-tradicao.png'
import imgChef from '../../../assets/images/home/chef2-tradicao.png'

const ContainerMobile = styled.div`
    @media screen and (max-width: 992px) {
        
    }
`

export const Tradition = () => {
  return (
    <section id="section-tradition" >
       
        <div className='mt-5'>
            <TitleSection className="title title-green mt-5">Nossa Tradição</TitleSection>
            <div className='d-flex justify-content-between flex-lg-row align-items-lg-stretch flex-column align-items-center'>
                <div>
                   <p className='text-display paragraph descriptions'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p className='text-display paragraph descriptions'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div> 
                <div className='img-tradicao'>
                    <img src={imgTradition} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
        <div className='d-flex flex-column'>
            <div className='align-self-lg-end' >
                <TitleSection className="title title-green mt-5" style={{width: '40vw'}}>Nosso Espaço</TitleSection>
            </div>
            
            <div className='d-flex justify-content-between flex-lg-row align-items-lg-stretch flex-column align-items-center'>
                <Images className='order-lg-1 order-2 w-100'>
                    <div className='img-espaco-2 position-relative'>
                        <img src={imgChef} alt="" className="img-fluid" />
                    </div>
                    <div className='img-espaco-1 position-relative'>
                        <img src={imgEspace} alt="" className="img-fluid" />
                    </div>
                </Images>
                <div className='order-lg-2 order-1'>
                    <p className='text-display paragraph descriptions'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className='text-display paragraph descriptions'>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
                    </p>
                </div>
            </div>
            
        </div>
    </section>
  )
}
