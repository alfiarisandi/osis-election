import { useLazyQuery } from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import Content from '../../component/content/content'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'
import { GETUSERNAMA } from '../../libs/client/gql'

export default function Home() {
  const [getNamaUser, { data : dataNamaUSer , loading : loadDataNamaUser }] = useLazyQuery(GETUSERNAMA)

  useEffect(() => {
    getNamaUser({
      variables : {
        id_siswa : parseInt(localStorage.getItem('id_siswa'))
      }
    })
  }, [getNamaUser])

  return (
    <div className='container'>
        <Header dataNamaUser = {dataNamaUSer} loadDataNamaUser = {loadDataNamaUser}/>
        <Content/>
        <Navigation/>
    </div>
  )
}
