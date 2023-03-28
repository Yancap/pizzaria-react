import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Espace } from './pages/espace-page/Espace'
import { Home } from './pages/home/Home'
import { Menu } from './pages/menu-page/Menu'
import { Contacts } from './pages/contacts/Contacts'



function App() {
  return (
    <BrowserRouter>
      <div className='main-container text-primary bg'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nosso-espaco' element={<Espace />} />
          <Route path='cardapio' element={<Menu />} />
          <Route path='contatos' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
