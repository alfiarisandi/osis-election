import { Icon } from '@iconify/react'
import React from 'react'
import './header.css'

export default function Headersub(){
    return(
        <div className='d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
        <div className='bg-header'>
            <img src={require("../../img/bg-header.png")} alt=""  />
        </div>
        <div className='rounded-left ms-1'>
            <Icon icon="eva:arrow-back-outline" width="40" color='white'/>
        </div>
        <div className='header-sub'>
            <div className='rounded-right'>
                <div className='user-info'>
                    <span className='fw-bold text-white ms-4'>Alfi Arisandi</span>
                    <span className='fw-light text-white ms-4'>Siswa</span>
                </div>
            </div>
            <div className='circle'>
                    <span className='text-white fw-bolder fs-1'>1</span>
            </div>

        </div>
    </div>
    )
}