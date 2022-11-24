import { useLazyQuery, useSubscription } from '@apollo/client'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Content from '../../component/content/content'
import { storage } from '../../component/firebase'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'
import { GETEVENTSEKOLAH, GETKANDIDATHOME, GETNAMASEKOLAH, GETREPORTBELUMMEMILIH, GETREPORTSUDAHMEMEILIH, GETUSERNAMA } from '../../libs/client/gql'


export default function Home() {
  const [getNamaUser, { data : dataNamaUSer , loading : loadDataNamaUser }] = useLazyQuery(GETUSERNAMA)
  const [getNamaSekolah, {data : NamaSekolah}] = useLazyQuery(GETNAMASEKOLAH)
  const {data : dataEventSekolah, loading : LoadEventSekolah} = useSubscription(GETEVENTSEKOLAH, {
    variables : {
      id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
    }
  })
  const [getKandidatHome, {data : dataKandidat}] = useLazyQuery(GETKANDIDATHOME)
  const {data : dataReportBelum} = useSubscription(GETREPORTBELUMMEMILIH)
  const {data : dataReportSudah} = useSubscription(GETREPORTSUDAHMEMEILIH)


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
    getKandidatHome({
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    
  }, [getNamaUser, getNamaSekolah, getKandidatHome])




  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);


  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);





  return (
    <div className='container'>
        <Header dataNamaUser = {dataNamaUSer} loadDataNamaUser = {loadDataNamaUser}/>
        <Content 
          namaSekolah = {NamaSekolah?.sekolah[0].nama_sekolah}
          eventSekolah ={dataEventSekolah?.event[0]} 
          loadTahunAJar = {LoadEventSekolah}
          kandidatHome = {dataKandidat}
          dataSudahMemilih = {dataReportSudah?.siswa_aggregate.aggregate.count}
          dataBelumMemilih = {dataReportBelum?.siswa_aggregate.aggregate.count}
          fotoKandidat = {imageUrls}
          />
        <Navigation eventSekolah ={dataEventSekolah?.event[0]}/>
    </div>
  )
}
