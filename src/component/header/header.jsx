import { Icon } from '@iconify/react';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
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
                                        <Skeleton width="80%" baseColor='#7CA2C6' highlightColor='#C3D3E1'/>
                                        <Skeleton width="80%" baseColor='#7CA2C6' highlightColor='#C3D3E1'/>
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
                            <Icon icon="mdi:user-circle-outline" color='#003566' width="60"/>
                    </div>
                </div>
            </>
        }
        
     </div>
  )
}

export default Header
