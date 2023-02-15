import React from 'react'
import { Paragraph } from '../../../components/assets/Paragraph'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { Images } from '../assets/Images'
import { Invite } from './Invite'

export const Rodizio = () => {
  return (
    <section id="section-rodizio" className='mt-5'>
        <TitleH2 name="Rodizio" className="title title-green mt-5"/>
        <Paragraph p="Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s"
        className='text-display paragraph descriptions'/>
        <div className='d-flex justify-content-between'>
            <Images className=''>
                <div  className='img-garcom-rodizio  position-relative'/>
                <div className='img-pizza-rodizio position-relative'/>
            </Images>
            <Invite />
        </div>
    </section>
  )
}
