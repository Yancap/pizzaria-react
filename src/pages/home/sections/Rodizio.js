import React from 'react'
import styled from 'styled-components'
import { Images } from '../components/Images'
import { Invite } from '../components/Invite'
import { TitleSection } from '../components/TitleSection'

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
                <div  className='img-garcom-rodizio  position-relative'/>
                <div className='img-pizza-rodizio position-relative'/>
            </Images>
            <Invite />
        </Container>
    </section>
  )
}
