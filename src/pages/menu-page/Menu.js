import React from 'react'
import { BtnMenu } from '../../components/assets/BtnMenu'
import { LabelImg } from '../../components/assets/LabelImg'
import { Separator } from '../../components/assets/Separator'
import { HeaderMenu } from './assets/HeaderMenu'
import { SectionMenu } from './assets/SectionMenu'

export const Menu = () => {
  return (
    <section>
        <LabelImg text="Cardapio" />
        <div>
            <div>
                <HeaderMenu title="Pizza" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div>
                    <SectionMenu subtitle="Pizze Tradizionali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                    <SectionMenu subtitle="Pizze Speciali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                </div>
                
            </div>
            <div>
                <HeaderMenu title="Massas" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div>
                    <SectionMenu subtitle="Paste Tradizionali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                    <SectionMenu subtitle="Paste Speciali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                </div>
                
            </div>
            <div>
                <HeaderMenu title="Drinks" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div>
                    <SectionMenu subtitle="Drinks della casa">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                    <SectionMenu subtitle="Drinks Speciali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                </div>
                
            </div>
            <div>
                <HeaderMenu title="Dolci" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div>
                    <SectionMenu subtitle="Dolci Tradizionali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                    <SectionMenu subtitle="Dolci Speciali">
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                        <img src="" alt="#" srcset="" />
                    </SectionMenu>
                </div>
                
            </div>
        </div>
        <Separator/>
        <BtnMenu/>
    </section>
  )
}
