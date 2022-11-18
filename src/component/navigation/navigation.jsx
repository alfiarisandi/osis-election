import React from 'react'
import { Icon } from '@iconify/react';
import './navigation.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home')
    }
    const handleInfo = () => {
        navigate('/informasi')
    }
    const handleUserinfo = () => {
        navigate('/user-info')
    }
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
        <Icon icon="fluent:vote-20-regular" width="50" color='white'/>
        </div>
    </div>
  )
}

export default Navigation