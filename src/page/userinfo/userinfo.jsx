import { Icon } from '@iconify/react'
import React from 'react'
import  Table  from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import Header from '../../component/header/header'
import Navigation from '../../component/navigation/navigation'
import "./userinfo.css"


function Userinfo() {
    const statusmemilih = false;
    const navigate = useNavigate();
    const cookies = new Cookies()

    const handleLogout = () => {
        Swal.fire({
            title: 'Kamu yakin untuk keluar?',
            showCancelButton: true,
            cancelButtonColor: '#FF0000',
            confirmButtonColor: '#003566',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
            reverseButtons: true
        }).then((result) =>
        {
            if (result.isConfirmed) {
                Swal.fire({
                    showConfirmButton :false,
                    icon : "success",
                    timer: 1000
                })
                localStorage.removeItem("id_siswa")
                localStorage.removeItem("id_sekolah")
                cookies.remove("auth")
                setTimeout(() => navigate('/'), 1000)
                
              }
              
            }
        );
    }
  return (
    <>
        <Header/>
        {
            statusmemilih ? (
                <>
                    <div className='heading-userinfo'>
                        <div className='d-flex flex-column justify-content-between'>
                            <span className='fw-bold'>Terimakasih sudah memilih</span>
                            <span className='fw-semibold mt-3'>Dalam Pemilihan Ketua dan Wakil ketua Osis di SMK N 1 Purwokerto</span>
                        </div>
                        <div>
                            <img src={require('../../img/userinfo-success.png')} alt="" />
                        </div>
                    </div>
                </>

            ) : (
                <>
                    <div className='heading-userinfo'>
                        <div className='d-flex flex-column justify-content-between'>
                            <span className='fw-bold'>Anda belum memilih!</span>
                            <span className='fw-semibold mt-3'>Dalam Pemilihan Ketua dan Wakil ketua Osis di SMK N 1 Purwokerto</span>
                        </div>
                        <div>
                            <img src={require('../../img/userinfo-not.png')} alt="" />
                        </div>
                    </div>
                </>
            )
        }
        
        <div className='d-flex justify-content-center'>
            <div className='profil-userinfo'>
                <Icon icon="mdi:user" width="130" color='#9B9B9B'/>
            </div>
        </div>

        <div className='d-flex justify-content-center px-4 mt-3'>
            <div className='profil-bio'>
                <div>
                    <h4 className='fw-bolder'>Profil</h4>
                </div>
                
                <Table borderless>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Nama</td>
                            <td align='right'>Alfi Arisandi</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>NIS</td>
                            <td align='right'>19102001</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Kelas</td>
                            <td align='right'>XII IPA 2</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Alamat</td>
                            <td align='right'>Kedungmalang Rt01/01 Lorem saepe est dolore velit nobis culpa doloribus.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <div className='d-flex justify-content-center px-4 mt-3'>
            <button className='logout' onClick={handleLogout}>Keluar</button>
        </div>

        <Navigation/>
    </>
  )
}

export default Userinfo