import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './navigation.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { GETEVENTSEKOLAH } from '../../libs/client/gql';
import { useSubscription } from '@apollo/client';
import Swal from 'sweetalert2';

function Navigation(props) {
    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        const separator = '-'

        for (let index = 1; index <= 9; index++) {
            if (date === index){
              date = '0'+index
            }
            
          }

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    const location = useLocation();
    const navigate = useNavigate();
    const [statusReporting, setStatusReporting] = useState("")

    const {data : dataEventSekolah, loading : loadDataEvent} = useSubscription(GETEVENTSEKOLAH, {
        variables : {
          id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
        }
      })

    const handleHome = () => {
        navigate('/home')
    }
    const handleInfo = () => {
        navigate('/informasi')
    }
    const handleUserinfo = () => {
        navigate('/user-info')
    }
    const handlePagePilihCalon = () => {
        navigate('/pilih-calon')
    }
    const handlePagePilihCalonNot = () => {
        Swal.fire({
            text: 'Pemilihan Ketua Osis Belum Dimulai',
            cancelButtonColor: '#FF0000',
            confirmButtonColor: '#003566',
            confirmButtonText: 'Ya',
            icon : "error",
        })
    }
    const handlePageHasilPemilihan = () => {
        navigate('/hasil-pemilihan')
        window.location.reload(false)
    }

    useEffect(() => {
        if(dataEventSekolah?.event[0].tanggal_mulai > getCurrentDate()){
            setStatusReporting('Not Report')
        }
        else if(dataEventSekolah?.event[0].tanggal_mulai <= getCurrentDate() &&  dataEventSekolah?.event[0].tanggal_selesai >= getCurrentDate()){
            setStatusReporting('On Report')
        }
        else if(dataEventSekolah?.event[0].tanggal_selesai < getCurrentDate()){
            setStatusReporting('On Finish')
        }
    },[dataEventSekolah, setStatusReporting])

  return (
    <div className='navigation'>
        <div className='navigation-bar'>
            <div className='d-flex align-items-center'>
                <div className='bg-navigation'>
                    <div className='nav-icons'>
                        {
                            location.pathname === '/home' && (
                                <>
                                    <Icon icon="ant-design:home-filled" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="material-symbols:info-outline-rounded" width='40' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }{
                            location.pathname === '/informasi' && (
                                <>
                                    <Icon icon="ant-design:home" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="material-symbols:info-rounded" width='40' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }
                        {
                            location.pathname === '/user-info' && (
                                <>
                                    <Icon icon="ant-design:home" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="material-symbols:info-outline-rounded" width='40' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-filled" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }
                        {
                            location.pathname === '/hasil-pemilihan' && (
                                <>
                                    <Icon icon="ant-design:home" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="material-symbols:info-outline-rounded" width='40' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className='button-election'>
            {
                loadDataEvent === true && (
                    <>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                )
            }
            {
                statusReporting === 'On Report' && (
                    <>
                        <Icon icon="fluent:vote-20-regular" width="50" color='white' onClick={() => handlePagePilihCalon()}/>
                    </>
                )
            }
            {
                statusReporting === 'On Finish' && (
                    <>
                        <Icon icon="material-symbols:bar-chart-rounded" width="50" color='white' onClick={() => handlePageHasilPemilihan()}/>
                    </>
                )
            }
            {
                statusReporting === 'Not Report' && (
                    <>
                        <Icon icon="fluent:vote-20-regular" width="50" color='white' onClick={() => handlePagePilihCalonNot()}/>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Navigation