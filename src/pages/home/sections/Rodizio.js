import React from 'react'
import styled from 'styled-components'
import { Images } from '../components/Images'
import { Invite } from '../components/Invite'
import { TitleSection } from '../components/TitleSection'
import pizza from '../../../assets/images/home/pizzas-rodizio.png'
import garcom from '../../../assets/images/home/garcom-rodizio.png'


const Container = styled.div`

  @media screen and (max-width: 1060px){
    flex-direction: column;
    align-items: center;
  }
`

export const Rodizio = () => {
  return (
    <section id="section-rodizio" className='my-5'>
      <TitleSection className="title title-green mt-5">Rodizio</TitleSection>
        <p className='text-display paragraph descriptions'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s
        </p>
        <Container className='d-flex justify-content-between'>
            <Images className='container-images mb-5'>
                <div  className='img-garcom-rodizio  position-relative'>
                  <img src={pizza} alt="pizzas" className='img-fluid'/>
                </div>
                <div className='img-pizza-rodizio position-relative'>
                  <img src={garcom} alt="" srcset="" className='img-fluid'/>
                </div>
            </Images>
            <Invite />
        </Container>
    </section>
  )
}
