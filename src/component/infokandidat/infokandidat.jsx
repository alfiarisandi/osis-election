import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Infokandidat() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/detailcalon')
    }

  return (
    <>
     {
        location.pathname === "/home" && (
            <>
                <div className='info-kandidat' onClick={() => handleClick()}>
                    <div className='foto-kandidat'>
                        
                        <img src={require('../../img/kandidat-1.png')} alt="" />
                        
                        <div className='overlay-foto'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>1</span>
                            </div>
                            <div className='nama-calon'>
                                <span>ALFI & ARISANDI</span>
                            </div>
                        </div>

                    </div>
                    <div className='visi-misi-kandidat'>
                        <div className='visi-misi-bg'>       
                            <span className='fs-6 fw-normal text-white'>Visi & Misi</span>
                        </div>
                    </div>
                </div>
            </>
        )
     }
     {
        location.pathname === '/pilih-calon' && (
            <>
                <div className='info-kandidat-pemilihan' onClick={false}>
                    <div className='foto-kandidat-pemilihan'>
                        
                        <img src={require('../../img/foto-calon.jpg')} alt="" />
                        
                        <div className='overlay-foto-pemilihan'>
                            <div className='nomor-urut-pemilihan'>
                                <span className='fw-bolder fs-2 text-white text-center'>1</span>
                            </div>
                            <div className='nama-calon-pemilihan'>
                                <span>ALFI & ARISANDI</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
     }
     {
        location.pathname === '/detailcalon' && (
            <>
                <div className='info-kandidat' onClick={() => handleClick()}>
                    <div className='foto-kandidat'>
                        
                        <img src={require('../../img/foto-calon.jpg')} alt="" />
                        
                        <div className='overlay-foto'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>1</span>
                            </div>
                            <div className='nama-calon'>
                                <span>ALFI & ARISANDI</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
     } 
    </>
    
  )
}

export default Infokandidat