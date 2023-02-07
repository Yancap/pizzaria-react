import React from 'react'
import { Btn } from '../../../components/assets/Btn'
import { TitleH3 } from '../../../components/assets/TitleH3'

export const Invite = () => {
  return (<>
    <div>
        <div>
            <p>Não perca essa oportunidade</p>
        </div>
        <TitleH3 name="Faça sua Reserva"/>
        <div>
            <p>Seg a Sex - 11h as 22h </p>
            <p>Sab a Dom - 14h as 00h</p>
        </div>
        <Btn name="Reservar" link="#"/>
        <Btn name="Cardápio" link="#"/>
        
    </div>
    <footer>
        <p> Rio de Janeiro, RJ, Rua da pizza - 204 </p>
    </footer>
    </>
  )
}
