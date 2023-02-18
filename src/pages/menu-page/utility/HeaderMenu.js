import React from 'react'
import { TitleH2 } from '../../../components/common/TitleH2'

export const HeaderMenu = ({title, text}) => {
  return (
    <header>
        <TitleH2 name={title}/>
        <p>
          {text}
        </p>
    </header>
  )
}
