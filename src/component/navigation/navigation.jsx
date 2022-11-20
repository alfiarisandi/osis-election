import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './navigation.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation(props) {
    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        const separator = '-'

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    const location = useLocation();
    const navigate = useNavigate();
    const [statusReporting, setStatusReporting] = useState("")

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

    useEffect(() => {
        if(props.eventSekolah?.tanggal_mulai > getCurrentDate()){
            setStatusReporting('Not Report')
        }
        else if(props.eventSekolah?.tanggal_mulai < getCurrentDate() &&  props.eventSekolah?.tanggal_selesai > getCurrentDate()){
            setStatusReporting('On Report')
        }
        else if(props.eventSekolah?.tanggal_selesai < getCurrentDate()){
            setStatusReporting('On Finish')
        }
    },[props, setStatusReporting])

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
                                    <Icon icon="bi:exclamation-circle" width='35' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }{
                            location.pathname === '/informasi' && (
                                <>
                                    <Icon icon="ant-design:home" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="bi:exclamation-circle-fill" width='35' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }
                        {
                            location.pathname === '/user-info' && (
                                <>
                                    <Icon icon="ant-design:home" width='35' color='#003566' onClick={() => handleHome()}/>
                                    <Icon icon="bi:exclamation-circle" width='35' color='#003566' onClick={() => handleInfo()}/>
                                    <Icon icon="fluent:people-list-16-filled" width='40' color='#003566' onClick={() => handleUserinfo()}/>
                                </>
                            )
                        }
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className='button-election'>
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
                        <Icon icon="material-symbols:bar-chart-rounded" width="50" color='white' onClick={() => handlePagePilihCalon()}/>
                    </>
                )
            }
            {
                statusReporting === 'Not Report' && (
                    <>
                        
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Navigation