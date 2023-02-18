import React from 'react'
import { TitleH2 } from '../../../components/common/TitleH2'
import { Images } from '../components/Images'
import { Invite } from '../components/Invite'

export const Rodizio = () => {
  return (
    <section id="section-rodizio" className='mt-5'>
        <TitleH2 name="Rodizio" className="title title-green mt-5"/>
        <p className='text-display paragraph descriptions'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s
        </p>
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
