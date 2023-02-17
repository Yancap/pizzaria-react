import React from 'react'
import { Espace } from '../pages/espace-page/Espace'
import { Home } from '../pages/home/Home'
import { Menu } from '../pages/menu-page/Menu'

export const Main = ({page}) => {
  switch (page) {
    case 1:
      return  (
        <main>
          <Espace/>
        </main>
      )
    case 2:
      return  (
        <main>
          <Menu />
        </main>
      )
      default:
        return  (
          <main>
            <Home />
          </main>
        )
  }
  
}
