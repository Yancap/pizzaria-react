import React from 'react'
import { BtnMenu } from '../../components/assets/BtnMenu'
import { Separator } from '../../components/assets/Separator'
import { Menu } from './menu/Menu'
import { Rodizio } from './rodizio/Rodizio'
import { Slide2 } from './slide/Slide2'
import { Slide3 } from './slide/Slide3'
import { SlideMain } from './slide/SlideMain'
import { Slider1 } from './slide/Slider1'
import { Tradition } from './tradition/Tradition'

export const Home = () => {
  return (
    <section>
      
        <SlideMain>
            <Slider1></Slider1>
            <Slide2></Slide2>
            <Slide3></Slide3>
        </SlideMain>
        <Menu></Menu>
        <Separator />
        <BtnMenu />
        <Rodizio />
        <Separator />
        <Tradition />
        <Separator />
    </section>
  )
}
