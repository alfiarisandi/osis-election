import { useQuery } from '@apollo/client'
import React from 'react'
import Contentinformasi from '../../component/content/content_informasi'
import Header from '../../component/header/header'
import { GETNAMASEKOLAH, GETUSERNAMA } from '../../libs/client/gql'

function Informasi() {
  const { data : dataNamaUSer , loading : loadDataNamaUser } = useQuery(GETUSERNAMA, {
    variables : {
      id_siswa : parseInt(localStorage.getItem('id_siswa'))
    }
  })

  const {data : NamaSekolah} = useQuery(GETNAMASEKOLAH, {
    variables : {
      id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
    }
  })
  return (
    <>
    <div className='container'>
        <Header dataNamaUser = {dataNamaUSer} loadDataNamaUser = {loadDataNamaUser} logoSekolah = {NamaSekolah?.sekolah[0].logo_sekolah} /> 
        <Contentinformasi/>
    </div>
    </>
  )
}

export default Informasi