import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/App.css';

function App() {
  const [page, setPage] = React.useState(0)
  return (
    <div className='main-container text-primary bg'>
      <Header setPage={setPage}></Header>
      <Main page={page} />
      <Footer setPage={setPage}></Footer>
    </div>
  );
}

export default App;
