import React from 'react'
import './accessrestricted.css'
import bgErrors from '../../img/errors-bg.png'
import { Link } from 'react-router-dom'

function Accessrestricted() {
  return (
    <div className='bg-error' style={{backgroundImage : `url(${bgErrors})`,
        backgroundRepeat : 'no-repeat', backgroundSize : 'auto', backgroundPosition : 'left center'
    }}>

        <div className='container d-flex flex-row align-items-center bg-container'>

            <div className='bg-errors'>
                <img src={require('../../img/mobile-2.png')} alt="" style={{width : '100%'}}/>
            </div>
            <div className='text-errors' style={{transform : 'Scale(1.3)'}}>
                <h1 className='fw-bold text-black'>Access restricted</h1>
                <span>Hanya bisa dilihat oleh pengguna mobile app. </span>
                <nobr>Anda bisa melihat hasil reporting melalui website berikut.</nobr>
                <Link to="/" className='mt-3 button-reporting'>Reporting Hasil</Link>
            </div>
        </div>



    </div>
  )
}

export default Accessrestricted