import React from 'react'
import { Paragraph } from '../../../components/assets/Paragraph'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { GridImages } from '../assets/GridImages'



export const Tradition = () => {
  return (
    <section id="section-tradition">
       
        <div>
            <TitleH2 name="Nossa Tradição"/>
            <div>
                <div>
                   <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />
                    <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>
           
                <div>
                    <img src="" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div>
            <TitleH2 name="Nosso Espaço"/>
            <div>
                <GridImages>
                    <img src="" alt="" srcset="" />
                    <img src="" alt="" srcset="" />
                </GridImages>
                <div>
                    <Paragraph p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />
                    <Paragraph p="when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />

                </div>
            </div>
            
        </div>
    </section>
  )
}
