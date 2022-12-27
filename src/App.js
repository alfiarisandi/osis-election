import './App.css';
import Login from './page/login/login'
import Home from './page/home/home'
import Detailcalon from './page/detailcalon/detailcalon'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Informasi from './page/informasi/informasi';
import Userinfo from './page/userinfo/userinfo';
import Pilihcalon from './page/pilihcalon/pilihcalon';
import PrivateRouteMobile from './component/privateroute/privateroutemobile';
import Navigation from './component/navigation/navigation';
import Hasilpemilihan from './page/hasilpemilihan/hasilpemilihan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouteMobile/>}>
            <Route path='/home' exact element={<><Home/><Navigation/></>}/>
            <Route path='/detailcalon/:id_kandidat_param' exact element={<><Detailcalon/></>}/>
            <Route path='/informasi' exact element={<><Informasi/><Navigation/></>}/>
            <Route path='/user-info' exact element={<><Userinfo/><Navigation/></>}/>
            <Route path='/pilih-calon' exact element={<><Pilihcalon/></>}/>
            <Route path='/hasil-pemilihan' exact element={<><Hasilpemilihan/><Navigation/></>}/>
        </Route>

        <Route path='/' exact element={<><Login/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
