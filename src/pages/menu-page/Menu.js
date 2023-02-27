import React from 'react'
import { BtnMenu } from '../../components/common/BtnMenu'
import { LabelImg } from '../../components/common/LabelImg'
import { Separator } from '../../components/common/Separator'
import { Head } from '../Head'
import { HeaderMenu } from './utility/HeaderMenu'
import { SectionMenu } from './utility/SectionMenu'
import pizzaT1 from '../../assets/images/menu/pizzas/pizza-c-1.png'
import pizzaT2 from '../../assets/images/menu/pizzas/pizza-c-2.png'
import pizzaT3 from '../../assets/images/menu/pizzas/pizza-c-3.png'
import pizzaS1 from '../../assets/images/menu/pizzas/pizza-S-1.png'
import pizzaS2 from '../../assets/images/menu/pizzas/pizza-S-2.png'
import pizzaS3 from '../../assets/images/menu/pizzas/pizza-S-1.png'
import massaT1 from '../../assets/images/menu/massas/massa-c-1.png'
import massaT2 from '../../assets/images/menu/massas/massa-c-2.png'
import massaT3 from '../../assets/images/menu/massas/massa-c-3.png'
import massaS1 from '../../assets/images/menu/massas/massa-S-1.png'
import massaS2 from '../../assets/images/menu/massas/massa-S-2.png'
import massaS3 from '../../assets/images/menu/massas/massa-S-1.png'
import drinkT1 from '../../assets/images/menu/drinks/drink-c-1.png'
import drinkT2 from '../../assets/images/menu/drinks/drink-c-2.png'
import drinkT3 from '../../assets/images/menu/drinks/drink-c-3.png'
import drinkS1 from '../../assets/images/menu/drinks/drink-S-1.png'
import drinkS2 from '../../assets/images/menu/drinks/drink-S-2.png'
import drinkS3 from '../../assets/images/menu/drinks/drink-S-1.png'
import doceT1 from '../../assets/images/menu/doces/doce-c-1.png'
import doceT2 from '../../assets/images/menu/doces/doce-c-2.png'
import doceT3 from '../../assets/images/menu/doces/doce-c-3.png'
import doceS1 from '../../assets/images/menu/doces/doce-S-1.png'
import doceS2 from '../../assets/images/menu/doces/doce-S-2.png'
import doceS3 from '../../assets/images/menu/doces/doce-S-1.png'

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
                        <div className=" square">
                            <img src={pizzaT1} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={pizzaT2} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={pizzaT3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                    <SectionMenu subtitle="Pizze Speciali">
                        <div className=" square">
                            <img src={pizzaS1} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={pizzaS2} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={pizzaS3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <HeaderMenu title="Massas" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Paste Tradizionali">
                        <div className=" square">
                            <img src={massaT1} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={massaT2} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={massaT3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                    <SectionMenu subtitle="Paste Speciali">
                        <div className=" square">
                            <img src={massaS1} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={massaS2} alt="" className="img-fluid" />
                        </div>
                        <div className=" square">
                            <img src={massaS3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <HeaderMenu title="Drinks" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Drinks della casa">
                        <div className=" rectangle">
                            <img src={drinkT1} alt="" className="img-fluid" />
                        </div>
                        <div className=" rectangle">
                            <img src={drinkT2} alt="" className="img-fluid" />
                        </div>
                        <div className=" rectangle">
                            <img src={drinkT3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                    <SectionMenu subtitle="Drinks Speciali">
                        <div className=" rectangle">
                            <img src={drinkS1} alt="" className="img-fluid" />
                        </div>
                        <div className=" rectangle">
                            <img src={drinkS2} alt="" className="img-fluid" />
                        </div>
                        <div className=" rectangle">
                            <img src={drinkS3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center mb-5'>
                <HeaderMenu title="Dolci" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <div className='w-100'>
                    <SectionMenu subtitle="Dolci Tradizionali">
                        <div className="square">
                            <img src={doceT1} alt="" className="img-fluid" />
                        </div>
                        <div className="square">
                            <img src={doceT2} alt="" className="img-fluid" />
                        </div>
                        <div className="square">
                            <img src={doceT3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                    <SectionMenu subtitle="Dolci Speciali">
                        <div className="square">
                            <img src={doceS1} alt="" className="img-fluid" />
                        </div>
                        <div className="square">
                            <img src={doceS2} alt="" className="img-fluid" />
                        </div>
                        <div className="square">
                            <img src={doceS3} alt="" className="img-fluid" />
                        </div>
                    </SectionMenu>
                </div>
                
            </div>
        </div>
        <Separator/>
        <BtnMenu/>
    </section>
  )
}
