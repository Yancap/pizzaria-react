import React from 'react'
import { Paragraph } from '../../../components/assets/Paragraph'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { Images } from '../assets/Images'



export const Tradition = () => {
  return (
    <section id="section-tradition" className='my-5'>
       
        <div>
            <TitleH2 name="Nossa Tradição" className="title title-green mt-5"/>
            <div>
                <div>
                   <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
                    className='text-display paragraph descriptions'/>
                    <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                    className='text-display paragraph descriptions'/>
                </div>
           
                <div>
                    <img src="" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div>
            <TitleH2 name="Nosso Espaço" className="title title-green mt-5"/>
            <div>
                <Images>
                    <img src="" alt="" srcset="" />
                    <img src="" alt="" srcset="" />
                </Images>
                <div>
                    <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
                    className='text-display paragraph descriptions'/>
                    <Paragraph p="when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
                    className='text-display paragraph descriptions'/>

                </div>
            </div>
            
        </div>
    </section>
  )
}
