import React from 'react'
import { Espace } from '../pages/espace-page/Espace'
import { Home } from '../pages/home/Home'
import { Menu } from '../pages/menu-page/Menu'

export const Main = () => {
  return (
    <main>
      <Home/>
      <Espace/>
      <Menu />
    </main>
  )
}
