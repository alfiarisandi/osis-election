import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'

function Header(props) {
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
                            {
                                props.loadDataNamaUser? (
                                    <>
                                    
                                    </>
                                ) : (
                                    <>
                                        <span className='fw-bold text-white'>{props.dataNamaUser?.siswa[0].nama}</span>
                                        <span className='fw-light text-white'>Siswa {props.dataNamaUser?.siswa[0].kelas}</span>
                                    </>
                                )
                            }
                            
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

export default Header
