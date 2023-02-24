import React from 'react'
import { BtnMenu } from '../../components/common/BtnMenu'
import { LabelImg } from '../../components/common/LabelImg'
import { Separator } from '../../components/common/Separator'
import { Head } from '../Head'
import { HeaderMenu } from './utility/HeaderMenu'
import { SectionMenu } from './utility/SectionMenu'

export const Menu = () => {
  return (
    <section className='mb-5 pb-5'>
        <Head title="Cardápio" />
        <LabelImg text="Cardápio" />
        <div className='container-fluid'>
            <div className='d-flex flex-column align-items-center'>
                <HeaderMenu title="Pizza" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Pizze Tradizionali">
                        <div className="image pizza-1 square"></div>
                        <div className="image pizza-2 square"></div>
                        <div className="image pizza-3 square"></div>
                    </SectionMenu>
                    <SectionMenu subtitle="Pizze Speciali">
                        <div className="image pizza-4 square"></div>
                        <div className="image pizza-5 square"></div>
                        <div className="image pizza-6 square"></div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <HeaderMenu title="Massas" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Paste Tradizionali">
                        <div className="image massa-1 square"></div>
                        <div className="image massa-2 square"></div>
                        <div className="image massa-3 square"></div>
                    </SectionMenu>
                    <SectionMenu subtitle="Paste Speciali">
                        <div className="image massa-4 square"></div>
                        <div className="image massa-5 square"></div>
                        <div className="image massa-6 square"></div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <HeaderMenu title="Drinks" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Drinks della casa">
                        <div className="image drink-1 rectangle"></div>
                        <div className="image drink-2 rectangle"></div>
                        <div className="image drink-3 rectangle"></div>
                    </SectionMenu>
                    <SectionMenu subtitle="Drinks Speciali">
                        <div className="image drink-4 rectangle"></div>
                        <div className="image drink-5 rectangle"></div>
                        <div className="image drink-6 rectangle"></div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center mb-5'>
                <HeaderMenu title="Dolci" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Dolci Tradizionali">
                        <div className="image doce-1 square"></div>
                        <div className="image doce-2 square"></div>
                        <div className="image doce-3 square"></div>
                    </SectionMenu>
                    <SectionMenu subtitle="Dolci Speciali">
                        <div className="image doce-4 square"></div>
                        <div className="image doce-5 square"></div>
                        <div className="image doce-6 square"></div>
                    </SectionMenu>
                </div>
                
            </div>
        </div>
        <Separator/>
        <BtnMenu/>
    </section>
  )
}
