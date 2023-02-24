import React from 'react'
import styled from 'styled-components'
import { TitleH2 } from '../../../components/common/TitleH2'
import '../css/Menu.css'

const Paragraph = styled.p`
  width: 40vw;
  min-width: 350px;
  @media screen and (max-width: 500px){
    font-size: 1em;
  }
`

export const HeaderMenu = ({title, text}) => {
  return (
    <header className='text-center mt-5 pt-5'>
        <h2 className='text-display title-menu'>{title}</h2>
        <Paragraph className='text' >
          {text}
        </Paragraph>
    </header>
  )
}
