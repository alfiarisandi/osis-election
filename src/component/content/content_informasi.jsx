import { Icon } from '@iconify/react'
import  Collapse  from 'react-bootstrap/Collapse';
import React, { useState } from 'react'
import './content_informasi.css'

function Contentinformasi() {
    const [openinfo1, setOpeninfo1] = useState(false)
    const [openinfo2, setOpeninfo2] = useState(false)
    const [openinfo3, setOpeninfo3] = useState(false)
    const [openinfo4, setOpeninfo4] = useState(false)
    const [openinfo5, setOpeninfo5] = useState(false)
  return (
    <div className='content-informasi'>
        <h5 className='ms-3 me-3 mt-5 fw-bold text-black'>Informasi Pemilihan Ketua dan Wakil Ketua OSIS</h5>
        <div className='mb-5 isi-informasi'>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo1(!openinfo1)} aria-controls="info-1" aria-expanded={openinfo1}>
                    <span >Kriteria Calon Ketua dan Wakil</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo1}>
                    <div id="info-1" className='isi-info'>
                        <span>
                            <ul>
                                <li>
                                    Merupakan siswa/i yang duduk di kelas VII dan VIII pada Tahun Pelajaran yang sedang berjalan.
                                </li>
                                <li>
                                    Memiliki Integritas dan kedisiplinan serta bertanggungjawab.
                                </li>
                                <li>
                                    Bersedia meluangkan waktu dan sanggup bekerja sama secara kolektif dalam kepengurusan OSIS
                                </li>
                                <li>
                                    Mendapat persetujuan Orangtua
                                </li>
                            </ul>
                        </span>
                    </div>
                </Collapse>
            </div>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo2(!openinfo2)} aria-controls="info-2" aria-expanded={openinfo2}>
                    <span >Proses Persiapan Penentuan Team Panitia Pelaksana</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo2}>
                    <div id="info-2" className='isi-info'>
                        <span>
                           <ul>
                                <li>
                                    Penanggung jawab kepanitiaan adalah Kepala Sekolah
                                </li>
                                <li>
                                    Ketua pelaksana adalah Wakasek Bidang Kesiswaan dan Wakil Ketua adalah Pembina OSIS
                                </li>
                                <li>
                                    Pelaksana terdiri dari Sekretariat yang anggotanya adalah Pengurus OSIS tahun pelajaran sebelumnya
                                </li>
                                <li>
                                    Pembuatan aplikasi Pemilihan OSIS berbasis mobile
                                </li>
                           </ul>
                        </span>
                    </div>
                </Collapse>
            </div>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo3(!openinfo3)}>
                    <span >Proses dan Verifikasi Pencalonan</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo3}>
                    <div id="info-2" className='isi-info'>
                        <span>
                            <ul>
                                <li>
                                    Panitia Pemilu  menyampaikan informasi dan persyaratan melalui media elektronik, baik melalui Whatsapp dan Instagram 
                                </li>
                                <li>
                                    Bakal calon mendaftakan diri sesuai dengan persyaratan dan ketentuan yang berlaku
                                </li>
                                <li>
                                    Verifikasi dilaksanakan melalui 3 tahap sesuai dengan persyaratan
                                </li>
                                <li>
                                    Balon Ketua dan Wakil OSIS melakukan test, mulai dari verifikasi secara administrasi, Test tulis dan Tes Lisan/Wawancara yang dilaksanakan oleh Panitia berdasarka penyaringan oleh Pembina Osis
                                </li>
                                <li>
                                    Pengumuman hasil verifikasi dan penetapan calon ketua dan wakil serta no urut dilakukan oleh panitia
                                </li>
                                <li>
                                    Panitia Pelaksana meminta masing-masing Paslon yang telah ditetapkan untuk membuat Visi, Misi, Program Unggulan dan Motto sebagai bahan kampanye baik berupa video dan tertulis untuk disampaikan kepada semua warga sekolah/ calon Pemilih
                                </li>
                            </ul>
                        </span>
                    </div>
                </Collapse>
            </div>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo4(!openinfo4)}>
                    <span >Pelaksanaan Pemilihan</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo4}>
                    <div id="info-2" className='isi-info'>
                        <span>
                            <ul>
                                <li>
                                    Panita menyampaikan informasi beserta jadwal Pemilu kepada seluruh warga sekolah melalui media elektronik, baik Web Sekolah, Instagram dan Whatsapp
                                </li>
                                <li>
                                    Waktu Pelaksanaan masa kampanye online, melalui Web sekolah, Instagram dan Whatsapp, adapun waktunya  setelah pelaksanaan PJJ/BDR/Daring 
                                </li>
                                <li>
                                    Tata Cara Pemilihan Ketua dan Wakil Ketua, adlah sbb :
                                    <ul>
                                        <li>
                                            Buka aplikasi pemilihan ketua osis
                                        </li>
                                        <li>
                                            Masukan username dan password yang sudah dimiliki oleh masing-masing siswa dan guru
                                        </li>
                                        <li>
                                            Cek visi, misi, Program Unggulan dan Motto masing Paslon, dan gunakan hak suara anda dengan klik pilih pada pasangan calon
                                        </li>
                                        <li>
                                            Klik icon pemilihan yang ada di pojok kanan bawah untuk memilih pasangan calon
                                        </li>
                                        <li>
                                            Akan ada kandidat pasangan calon yang bisa siswa dan guru pilih
                                        </li>
                                        <li>
                                            Hasil pemilihan ketua OSIS akan muncul di halaman yang sama dan di website sesuai waktu yang telah di tentukan
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </span>
                    </div>
                </Collapse>
            </div>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo5(!openinfo5)}>
                    <span >Tata Tertib</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo5}>
                    <div id="info-2" className='isi-info'>
                        <span>
                            <ul>
                                <li>
                                    Peserta memilih dengan platform aplikasi mobile pemilihan ketua osis
                                </li>
                                <li>
                                    Peserta hanya bisa memilih satu kandidat
                                </li>
                                <li>
                                    Bersifat Langsung, Bebas, Rahasia, Jujur, dan Adil
                                </li>
                            </ul>
                        </span>
                    </div>
                </Collapse>
            </div>
        </div>
    </div>
  )
}

export default Contentinformasi