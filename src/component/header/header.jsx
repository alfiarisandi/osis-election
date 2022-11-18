import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'

export default function Header() {
    const location = useLocation();
  return (
    <div className='d-flex flex-row justify-content-between align-items-center mt-4 '>
        <div className='bg-header'>
            <img src={require("../../img/bg-header.png")} alt=""  />
        </div>
        {
            location.pathname !== '/user-info' && 
            <>
                <div className='header-home'>
                    <div className='rounded-right-home'>
                        <div className='user-info'>
                            <span className='fw-bold text-white'>Alfi Arisandi</span>
                            <span className='fw-light text-white'>Siswa</span>
                        </div>
                    </div>
                    <div className='circle-home'>
                            <img src={require('../../img/profil.jpg')} alt="" className='img-profil'/>
                    </div>
                </div>
            </>
        }
        
     </div>
  )
}
