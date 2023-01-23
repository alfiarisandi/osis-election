import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { Icon } from '@iconify/react';
import React from 'react'
import { useEffect } from 'react';
import  Modal  from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Headersub from '../../component/header/headersub'
import Infokandidat from '../../component/infokandidat/infokandidat'
import { GETDATASISWA, GETEVENTSEKOLAH, GETKANDIDATHOME, GETNAMASEKOLAH, UPDATESISWAMEMILIH, VOTEKANDIDAT } from '../../libs/client/gql';
import './pilihcalon.css'

function Pilihcalon() {
    const navigate = useNavigate();

    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        const separator = '-'

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    const {data : NamaSekolah} = useQuery(GETNAMASEKOLAH, {
        variables : {
          id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
        }
      })

    const {data : dataKandidat} = useQuery(GETKANDIDATHOME, {
        variables : {
            id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
            id_event : NamaSekolah?.sekolah[0].id_event
        }
    })

    const {data : dataSiswa, loading : loadDataSiswa} = useSubscription(GETDATASISWA, {
        variables : {
            id_siswa : parseInt(localStorage.getItem('id_siswa'))
        }
    })

    const {data : dataEventSekolah} = useSubscription(GETEVENTSEKOLAH, {
        variables : {
          id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
        }
      })

    const [updateSiswaMemilih] = useMutation(UPDATESISWAMEMILIH)
    const [voteKandidat] = useMutation(VOTEKANDIDAT)

    const handlePilihKandidat = (id_kandidat) => {
        updateSiswaMemilih({
            variables : {
                id_siswa : parseInt(localStorage.getItem('id_siswa')),
                waktu_memilih : getCurrentDate()
            }
        })
        voteKandidat({
            variables : {
                object : {
                    id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
                    id_siswa : parseInt(localStorage.getItem('id_siswa')),
                    id_kandidat : id_kandidat,
                    id_event : NamaSekolah?.sekolah[0].id_event,
                    kelas_pemilih : dataSiswa?.siswa_by_pk.kelas.split(' ')[0]
                }
            }
        })
    }

    const handlePilihCalon = (namaKetua, namaWakil, id_kandidat) => {
        Swal.fire({
            text: 'Anda yakin untuk memilih pasangan tersebut',
            title: namaKetua +' & ' + namaWakil,
            showCancelButton: true,
            cancelButtonColor: '#FF0000',
            confirmButtonColor: '#003566',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
            reverseButtons: true,
        }).then((result) =>
        {
            if (result.isConfirmed) {
                Swal.fire({
                    showConfirmButton : false,
                    icon : "success",
                    timer : 1300,
                    confirmButtonColor: '#003566',
                    title : 'Terimakasih anda sudah memilih',
                    allowOutsideClick: false,
                    allowEscapeKey: false
                })
                handlePilihKandidat(id_kandidat)
                setTimeout(() => navigate('/user-info'), 1000)
                
              }
              
            }
        );
    }

    useEffect(() => {
        if (dataSiswa?.siswa_by_pk.status_memilih === true) {
            Swal.fire({
                text: 'Anda telah memilih',
                icon : "success",
                confirmButtonColor: '#003566',
                confirmButtonText: 'Ya',
                reverseButtons: true,
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then((result) =>
            {
                if (result.isConfirmed) {
                    navigate("/home")
                    
                  }
                  
                }
            );
        }
        else if(dataEventSekolah?.event[0].tanggal_selesai < getCurrentDate()){
            Swal.fire({
                text: 'Pemilihan ketua OSIS sudah dilaksanakan',
                icon : "success",
                confirmButtonColor: '#003566',
                confirmButtonText: 'Ya',
                reverseButtons: true,
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then((result) =>
            {
                if (result.isConfirmed) {
                    navigate("/home")
                    
                  }
                  
                }
            );
        }
    })

  return (
    <>
    {
        loadDataSiswa ? (
            <>
                <Modal
                    show
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <div className='d-flex justify-content-center p-3' style={{color : "#003566"}}>
                                <div className="spinner-border " role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    </Modal>
            </>
        ) : (
            <>

                <Headersub namaSekolah={NamaSekolah?.sekolah[0].nama_sekolah}/>
                <div className='d-flex flex-row flex-wrap justify-content-center gap-3'>
                    {
                        dataKandidat?.kandidat?.map((items, i) => {
                            return(
                                <div className='d-flex flex-column justify-content-center' key={i}>
                                    <Infokandidat kandidat = {items}/>
                                    <div className='position-relative mt-3'>
                                        <button className='tombol-pilih' onClick={() => handlePilihCalon(items.nama_ketua, items.nama_wakil, items.id_kandidat)}>
                                            <span className='fw-semibold me-3'>Pilih</span>
                                            <Icon icon="fluent:vote-20-regular" width="30"/>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    </>
  )
}

export default Pilihcalon