import React from 'react'
import { Paragraph } from '../../../components/assets/Paragraph'
import { TitleH2 } from '../../../components/assets/TitleH2'

export const HeaderMenu = ({title, text}) => {
  return (
    <header>
        <TitleH2 name={title}/>
        <Paragraph p={text} />
    </header>
  )
}
