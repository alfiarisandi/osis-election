import { Icon } from '@iconify/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Headersub from '../../component/header/headersub'
import Infokandidat from '../../component/infokandidat/infokandidat'
import './pilihcalon.css'

function Pilihcalon() {
    const navigate = useNavigate();
    const jumlah_calon  = [1, 2, 3, 4];

    const handlePilihCalon = () => {
        Swal.fire({
            text: 'Anda yakin untuk memilih pasangan tersebut',
            title: 'Alfi dan Alfu',
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
                    showConfirmButton :false,
                    icon : "success",
                    timer: 1300,
                    title : 'Terimakasih anda sudah memilih'
                })
                setTimeout(() => navigate('/user-info'), 1300)
                
              }
              
            }
        );
    }
  return (
    <>
        <Headersub/>
        <div className='d-flex flex-row flex-wrap justify-content-center gap-3'>
            {
                jumlah_calon.map((i) => {
                    return(
                        <div className='d-flex flex-column justify-content-center' key={i}>
                            <Infokandidat/>
                            <div className='position-relative mt-3'>
                                <button className='tombol-pilih' onClick={() => handlePilihCalon()}>
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

export default Pilihcalon