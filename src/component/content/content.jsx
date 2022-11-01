import React from 'react'
import './content.css'

function Content() {
  return (
    <div className='content'>
        <div className='header'>
            <span className='fw-bolder fs-5'>Kandidat Ketua Osis</span>
        </div>
        <div className='scroll-overflow'>

            <div className='kandidat'>
                <div className='info-kandidat'>
                    <div className='foto-kandidat'>
                        
                        <img src={require('../../img/foto-calon.jpg')} alt="" srcset="" />
                        
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
                            <span className='fs-6 fw-bolder text-white'>Visi & Misi</span>
                        </div>
                    </div>
                </div>
                <div className='info-kandidat'>
                    <div className='foto-kandidat'>
                        
                        <img src={require('../../img/foto-calon.jpg')} alt="" srcset="" />
                        
                        <div className='overlay-foto'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>2</span>
                            </div>
                            <div className='nama-calon'>
                                <span>ALFI & ARISANDI</span>
                            </div>
                        </div>

                    </div>

                    <div className='visi-misi-kandidat'>
                        <div className='visi-misi-bg'>       
                            <span className='fs-6 fw-bolder text-white'>Visi & Misi</span>
                        </div>
                    </div>
                </div>
                <div className='info-kandidat'>
                    <div className='foto-kandidat'>
                        
                        <img src={require('../../img/foto-calon.jpg')} alt="" srcset="" />
                        
                        <div className='overlay-foto'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>3</span>
                            </div>
                            <div className='nama-calon'>
                                <span>ALFI & ARISANDI</span>
                            </div>
                        </div>

                    </div>

                    <div className='visi-misi-kandidat'>
                        <div className='visi-misi-bg'>       
                            <span className='fs-6 fw-bolder text-white'>Visi & Misi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Content