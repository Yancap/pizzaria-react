import React from 'react'
import { BtnMenu } from '../../components/common/BtnMenu'
import { Separator } from '../../components/common/Separator'
import { Menu } from './sections/Menu'
import { Rodizio } from './sections/Rodizio'
import { Slide2 } from './components/Slide2'
import { Slide3 } from './components/Slide3'
import { SlideMain } from './sections/SlideMain'
import { Slider1 } from './components/Slider1'
import { Tradition } from './sections/Tradition'
import './css/Home.css'
import { Head } from '../Head'
export const Home = () => {
  return (
    <section>
      <Head title="Home" />
        <SlideMain>
            <Slider1></Slider1>
            <Slide2></Slide2>
            <Slide3></Slide3>
        </SlideMain>
        <div className='container-fluid'>
          <Menu />
        </div>
          <Separator />
          <BtnMenu />
        <div className='container-fluid'> 
          <Rodizio />
        </div>
         
          <Separator />
        <div className='container-fluid'>
          <Tradition />
        </div>
          <Separator />
        
        
    </section>
  )
}
