import './App.css';
import Login from './page/login/login'
import Home from './page/home/home'
import Detailcalon from './page/detailcalon/detailcalon'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Informasi from './page/informasi/informasi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<><Login/></>}/>
        <Route path='/home' exact element={<><Home/></>}/>
        <Route path='/login' exact element={<><Login/></>}/>
        <Route path='/detailcalon' exact element={<><Detailcalon/></>}/>
        <Route path='/informasi' exact element={<><Informasi/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
