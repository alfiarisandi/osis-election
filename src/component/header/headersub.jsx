import React from 'react'
import './header.css'

export default function Headersub(){
    return(
        <div className='d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
        <div className='rounded-left ms-1'>
            <img src={require('../../img/logo-smk-1-pwt.png')} alt="logo-seklolah" />
        </div>
        <div className='rounded-right'>
            <div className='circle'>
                <img src={require('../../img/profil.jpg')} alt="" srcset="" className='img-profil'/>
            </div>
            <div className='user-info'>
                <span className='fw-bold'>Alfi Arisandi</span>
                <span className='fw-light text-secondary'>Siswa</span>
            </div>
        </div>
    </div>
    )
}