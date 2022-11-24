import { Icon } from '@iconify/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './header.css'

export default function Headersub( props ){
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate('/home');
    }

    return(
        <div className='d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
        <div className='bg-header'>
            <img src={require("../../img/bg-header.png")} alt=""  />
        </div>
        <div className='rounded-left ms-1'>
            <Icon icon="eva:arrow-back-outline" width="40" color='white' onClick={() => handleBack()}/>
        </div>
        {
            location.pathname !== '/pilih-calon' && 
            <>
                <div className='header-sub'>
                    <div className='rounded-right'>
                        <div className='user-info'>
                            <span className='fw-bold text-white ms-4'>{props.namaUser}</span>
                            <span className='fw-light text-white ms-4'>Siswa {props.kelasUser}</span>
                        </div>
                    </div>
                    <div className='circle'>
                            <span className='text-white fw-bolder fs-1'>{props.detailPasanganUrut}</span>
                    </div>
                </div>
            </>
        }
        {
            location.pathname === '/pilih-calon' && 
            <>
                <div className='header-sub'>
                    <div className='rounded-right' style={{width: "300px"}}>
                        <div className='d-flex flex-column ms-3'>
                            <span className='fw-bold text-white'>Pemilihan Osis</span>
                            <span className='fw-light text-white'>SMK N 1 Purwokerto</span>
                        </div>
                    </div>
                </div>
            </>
        }
    </div>
    )
}