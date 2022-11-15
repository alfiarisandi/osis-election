import React from 'react'
import { Icon } from '@iconify/react';
import './navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
        <div className='navigation-bar'>
            <div className='d-flex align-items-center'>
                <div className='bg-navigation'>
                    <div className='nav-icons'>
                        <Icon icon="ant-design:home-filled" width='35' color='#003566' />
                        <Icon icon="carbon:warning" width='35' color='#003566' />
                        <Icon icon="fluent:people-list-16-regular" width='40' color='#003566' />
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