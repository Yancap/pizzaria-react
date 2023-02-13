import React from 'react'
import { Paragraph } from '../../../components/assets/Paragraph'
import { TitleH2 } from '../../../components/assets/TitleH2'
import { GridImages } from '../assets/GridImages'
import { Invite } from './Invite'

export const Rodizio = () => {
  return (
    <section id="section-rodizio">
        <TitleH2 name="Rodizio" className="title"/>
        <Paragraph p="Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s"
        />
        <div>
            <GridImages >
                <img src="" alt="" srcset="" />
                <img src="" alt="" srcset="" />
            </GridImages>
            <Invite />
        </div>
    </section>
  )
}
