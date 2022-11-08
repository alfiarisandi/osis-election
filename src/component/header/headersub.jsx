import { Icon } from '@iconify/react'
import React from 'react'
import './header.css'

export default function Headersub(){
    return(
        <div className='d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
        <div className='bg-header'>
            <img src={require("../../img/bg-header.png")} alt=""  />
        </div>
        <div className='mt-4 d-flex justify-content-between align-items-center'>
            <div className='rounded-left ms-1'>
                <Icon icon='bi:arrow-left-short' width='50'/>
            </div>
            <div className='rounded-right'>
                <div className='user-info'>
                    <span className='fw-bold text-white'>Alfi Arisandi</span>
                    <span className='fw-light text-white'>Siswa</span>
                </div>
                <div className='circle'>
                    <img src={require('../../img/profil.jpg')} alt="" srcset="" className='img-profil'/>
                </div>
            </div>
        </div>
    </div>
    )
}