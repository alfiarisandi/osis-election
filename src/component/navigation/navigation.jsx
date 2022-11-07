import React from 'react'
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai'
import {CgUserList} from 'react-icons/cg'
import {ImPushpin} from 'react-icons/im'
import './navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
        <div className='navigation-bar'>
            <div className='d-flex align-items-center'>
                <img src={require('../../img/Subtract.png')} alt="" className='position-absolute top-0' style={{width :'100%', height : '75px'}}/>
                <div className='nav-icons'>
                    <AiOutlineHome size={38} color="black"/>
                    <AiOutlineInfoCircle size={38} color="#A2B5BB"/>
                    <CgUserList size={38} color="#A2B5BB"/>
                </div>
            </div>
        </div>
        <div className='button-election'>
            <ImPushpin size={38} color="white"/>
        </div>
    </div>
  )
}

export default Navigation