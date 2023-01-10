import { useQuery } from '@apollo/client'
import React from 'react'
import Contentinformasi from '../../component/content/content_informasi'
import Header from '../../component/header/header'
import { GETUSERNAMA } from '../../libs/client/gql'

function Informasi() {
  const { data : dataNamaUSer , loading : loadDataNamaUser } = useQuery(GETUSERNAMA, {
    variables : {
      id_siswa : parseInt(localStorage.getItem('id_siswa'))
    }
  })
  console.log(dataNamaUSer)
  return (
    <>
    <div className='container'>
        <Header dataNamaUser = {dataNamaUSer} loadDataNamaUser = {loadDataNamaUser} /> 
        <Contentinformasi/>
    </div>
    </>
  )
}

export default Informasi