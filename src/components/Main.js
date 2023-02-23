import React from 'react'



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
