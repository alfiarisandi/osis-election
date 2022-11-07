import React from 'react'
import Content from '../../component/content/content'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'

export default function Home() {
  return (
    <div className='container'>
        <Header/>
        <Content/>
        <Navigation/>
    </div>
  )
}
