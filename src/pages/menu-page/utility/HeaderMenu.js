import React from 'react'
import { TitleH2 } from '../../../components/common/TitleH2'
import '../css/Menu.css'

export const HeaderMenu = ({title, text}) => {
  return (
    <header className='text-center mt-5 pt-5' style={{width: "calc(30rem + 13vw)"}}>
        <TitleH2 name={title} className='text-display title-menu'/>
        <p className='text' >
          {text}
        </p>
    </header>
  )
}
