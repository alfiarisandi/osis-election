import { useLazyQuery } from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import Content from '../../component/content/content'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'
import { GETKANDIDATHOME, GETNAMASEKOLAH, GETTAHUNAJAR, GETUSERNAMA } from '../../libs/client/gql'


export default function Home() {
  const [getNamaUser, { data : dataNamaUSer , loading : loadDataNamaUser }] = useLazyQuery(GETUSERNAMA)
  const [getNamaSekolah, {data : NamaSekolah}] = useLazyQuery(GETNAMASEKOLAH)
  const [getTahunAjar, {data : dataTahunAjar, loading : loadDataTahunAjar}] = useLazyQuery(GETTAHUNAJAR)
  const [getKandidatHome, {data : dataKandidat}] = useLazyQuery(GETKANDIDATHOME)


  useEffect(() => {
    getNamaUser({
      variables : {
        id_siswa : parseInt(localStorage.getItem('id_siswa'))
      }
    })
    getNamaSekolah({
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    getTahunAjar({
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    getKandidatHome({
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    
  }, [getNamaUser, getTahunAjar, getNamaSekolah, getKandidatHome])

  
  return (
    <div className='container'>
        <Header dataNamaUser = {dataNamaUSer} loadDataNamaUser = {loadDataNamaUser}/>
        <Content 
          namaSekolah = {NamaSekolah?.sekolah[0].nama_sekolah}
          tahunAjar ={dataTahunAjar?.event[0].tahun_ajaran} 
          loadTahunAJar = {loadDataTahunAjar}
          kandidatHome = {dataKandidat}
          />
        <Navigation/>
    </div>
  )
}
