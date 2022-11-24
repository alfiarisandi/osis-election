import React from 'react'
import "./infokandidat.css"
import  Table  from 'react-bootstrap/Table'

function Visimisi(props) {
  return (
    <>
    <div className='visi-misi'> 
      <div className='biodata'>
            <div className='isi-biodata'>
            <Table borderless className='w-100'>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Calon Ketua</td>
                            <td align='right'>{props.biodataKandidat?.nama_ketua}</td>
                        </tr>
                        <tr>
                        <td className='fw-bold'>Calon Wakil Ketua</td>
                            <td align='right'>{props.biodataKandidat?.nama_wakil}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Kelas</td>
                            <td align='right'>{props.biodataKandidat?.kelas}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='header-biodata'>
                <span className='text-black fw-bold'>Biodata</span>
            </div>
        </div>
        <div className='visi'>
            <div className='isi-visi'>
                <p>
                  {props.biodataKandidat?.visi}
                </p>
            </div>
            <div className='header-visi'>
                <span className='text-white fw-bold'>Visi</span>
            </div>
        </div>
        <div className='misi'>
            <div className='isi-misi'>
                <p>
                  {props.biodataKandidat?.misi}              
                </p>
            </div>
            <div className='header-misi'>
                <span className='text-black fw-bold'>Misi</span>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Visimisi