import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact'
import Services from './components/services/services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
