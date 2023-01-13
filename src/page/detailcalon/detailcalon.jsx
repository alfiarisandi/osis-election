import { useLazyQuery} from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Headersub from '../../component/header/headersub'
import Infokandidat from '../../component/infokandidat/infokandidat'
import Visimisi from '../../component/infokandidat/visimisi'
import { GETDETAILKANDIDAT, GETUSERNAMA } from '../../libs/client/gql'

function Detailcalon() {
  let { id_kandidat_param } = useParams();

  const [getNamaUser, { data : dataNamaUSer , loading : loadDataNamaUser }] = useLazyQuery(GETUSERNAMA)
  const [getDetaiKandidat, { data : dataDetailKandidat, loading : loadData }] = useLazyQuery(GETDETAILKANDIDAT)
  useEffect(() => {
    getNamaUser({
      variables : {
        id_siswa : parseInt(localStorage.getItem('id_siswa'))
      }
    })
    getDetaiKandidat({
      variables : {
        id_kandidat : id_kandidat_param
      }
    })
  },[getNamaUser, getDetaiKandidat, id_kandidat_param])
  
  return (
    <>
        <div>
            <Headersub namaUser = {dataNamaUSer?.siswa[0].nama} kelasUser = {dataNamaUSer?.siswa[0].kelas} loadingData = {loadDataNamaUser} detailPasanganUrut = {dataDetailKandidat?.kandidat_by_pk?.pasangan_urut}/>
            <div className='d-flex justify-content-center mt-4'>
                <Infokandidat detailPasanganUrut = {dataDetailKandidat?.kandidat_by_pk?.pasangan_urut}
                detailkandidatFoto = {dataDetailKandidat?.kandidat_by_pk?.foto} 
                detailkandidatNamaKetua = {dataDetailKandidat?.kandidat_by_pk?.nama_ketua}
                detailkandidatNamaWakil = {dataDetailKandidat?.kandidat_by_pk?.nama_wakil}/>
            </div>
            
            <div className='d-flex justify-content-center flex-column'> 

                <Visimisi biodataKandidat = {dataDetailKandidat?.kandidat_by_pk} />
                
            </div>
            
        </div>
        <Modal show = {loadData} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
          <div className='d-flex justify-content-center p-4'>
          <div className="spinner-border" role="status" style={{color : "#003566"}}>
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>
        </Modal>
    </>
  )
}

export default Detailcalon