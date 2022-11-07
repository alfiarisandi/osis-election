import './App.css';
import Login from './page/login/login';
import Home from './page/home/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<><Login/></>}/>
        <Route path='/home' exact element={<><Home/></>}/>
        <Route path='/login' exact element={<><Login/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
