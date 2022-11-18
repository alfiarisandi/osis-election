import React from 'react'
import Contentinformasi from '../../component/content/content_informasi'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'

function Informasi() {
  return (
    <>
    <div className='container'>
        <Header/>
        <Contentinformasi/>
        <Navigation/>
    </div>
    </>
  )
}

export default Informasi