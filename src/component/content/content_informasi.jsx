import { Icon } from '@iconify/react'
import  Collapse  from 'react-bootstrap/Collapse';
import React, { useState } from 'react'
import './content_informasi.css'

function Contentinformasi() {
    const [openinfo1, setOpeninfo1] = useState(false)
    const [openinfo2, setOpeninfo2] = useState(false)
    // const [openinfo3, setOpeninfo3] = useState(false)
    // const [openinfo4, setOpeninfo4] = useState(false)
    // const [openinfo5, setOpeninfo5] = useState(false)
  return (
    <div className='content-informasi'>
        <h5 className='ms-3 me-3 mt-5 fw-bold text-black'>Informasi Pemilihan Ketua dan Wakil Ketua OSIS</h5>
        <div className='isi-informasi'>
            <div className='title-informasi'>
                <div className='heading-info' onClick={() => setOpeninfo1(!openinfo1)} aria-controls="info-1" aria-expanded={openinfo1}>
                    <span >Kriteria Calon Ketua dan Wakil</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
                <Collapse in={openinfo1}>
                    <div id="info-1" className='isi-info'>
                        <span>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
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
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quam. Aperiam quo tempora rem, illum modi ea ab atque, maxime enim fugiat quisquam reiciendis magni soluta dolores culpa delectus rerum!
                        </span>
                    </div>
                </Collapse>
            </div>
            <div className='title-informasi'>
                <div className='heading-info'>
                    <span >Proses dan Verifikasi Pencalonan</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
            </div>
            <div className='title-informasi'>
                <div className='heading-info'>
                    <span >Pelaksanaan Pemilihan</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
            </div>
            <div className='title-informasi'>
                <div className='heading-info'>
                    <span >Tata Tertib</span>
                    <Icon icon="charm:chevrons-up-down" width="20" className='m-1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contentinformasi