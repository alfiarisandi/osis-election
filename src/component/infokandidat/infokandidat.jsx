import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Infokandidat(props) {
    const location = useLocation();
    const navigate = useNavigate();
    let { id_kandidat_param } = useParams();
    const handleClick = (id_kandidat) => {
        navigate('/detailcalon/' + id_kandidat)
    }

  return (
    <>
     {
        location.pathname === "/home" && (
            <>
            {
                props.kandidatHome?.map(i => (
                    <div className='info-kandidat' onClick={() => handleClick(i.id_kandidat)} key={i.pasangan_urut}>
                        <div className='foto-kandidat'>
                            <img src={i.foto} alt="" />
                            
                            <div className='overlay-foto'>
                                <div className='nomor-urut'>
                                    <span className='fw-bolder fs-2 text-white text-center'>{i.pasangan_urut}</span>
                                </div>
                                <div className='nama-calon'>
                                    <span>{i.nama_ketua}</span>
                                    <span>& {i.nama_wakil}</span>
                                </div>
                            </div>

                        </div>
                        <div className='visi-misi-kandidat'>
                            <div className='visi-misi-bg'>       
                                <span className='fs-6 fw-normal text-white'>Visi & Misi</span>
                            </div>
                        </div>
                    </div>
                ))
            }
            </>
        )
     }
     {
        location.pathname === '/pilih-calon' && (
            <>
                <div className='info-kandidat-pemilihan'>
                    <div className='foto-kandidat-pemilihan' >
                        
                        <img src={props.kandidat.foto} alt="" />
                        
                        <div className='overlay-foto-pemilihan'>
                            <div className='nomor-urut-pemilihan'>
                                <span className='fw-bolder fs-2 text-white text-center'>{props.kandidat.pasangan_urut}</span>
                            </div>
                            <div className='nama-calon-pemilihan' style={{paddingBottom: "15px"}}>
                                <span>{props.kandidat.nama_ketua} & {props.kandidat.nama_wakil}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
     }
     {
        location.pathname === '/detailcalon/'+id_kandidat_param && (
            <>
                <div className='info-kandidat'>
                    <div className='foto-kandidat'>
                        
                        <img src={props.detailkandidatFoto} alt="" />
                        
                        <div className='overlay-foto'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>{props.detailPasanganUrut}</span>
                            </div>
                            <div className='nama-calon'>
                                    <span>{props.detailkandidatNamaKetua}</span>
                                    <span>& {props.detailkandidatNamaWakil}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
     } 
     {
        location.pathname === '/hasil-pemilihan' && (
            <>
                <div className='info-kandidat-hasil'>
                    <div className='foto-kandidat-hasil'>
                        
                        <img src={props.fotoKandidat} alt="" />
                        
                        <div className='overlay-foto-hasil'>
                            <div className='nomor-urut'>
                                <span className='fw-bolder fs-2 text-white text-center'>{props.pasangan_urut}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
     } 
    </>
    
  )
}

export default Infokandidat