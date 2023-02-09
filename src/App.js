import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';

function App() {
  return (
    <div className='main-container text-primary bg'>
      <Header ></Header>
      <Main/>
      <Footer></Footer>
    </div>
  );
}

export default App;
