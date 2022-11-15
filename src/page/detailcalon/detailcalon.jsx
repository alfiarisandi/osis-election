import React from 'react'
import Headersub from '../../component/header/headersub'
import Infokandidat from '../../component/infokandidat/infokandidat'
import Visimisi from '../../component/infokandidat/visimisi'

function Detailcalon() {

  return (
    <div>
        <Headersub/>
        <div className='d-flex justify-content-center mt-4'>
            <Infokandidat />
        </div>
        
        <div className='d-flex justify-content-center flex-column'> 

            <Visimisi/>
            
        </div>
        
    </div>
  )
}

export default Detailcalon