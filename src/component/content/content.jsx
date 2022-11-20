import React from 'react'
import './content.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Infokandidat from '../infokandidat/infokandidat';
import { useState } from 'react';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

function Content(props) {

    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        const separator = '-'

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    

    const data = {
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [props.dataSudahMemilih, props.dataBelumMemilih],
            backgroundColor: [
              'rgba(240, 180, 21, 1)',
              'rgba(208, 208, 208, 1)',
            ],
            borderColor: [],
            borderWidth: 0,
          },
        ],
      };

    const [statusReporting, setStatusReporting] = useState("")

    const belumMemilihPersen = parseFloat(props.dataBelumMemilih / (props.dataBelumMemilih+props.dataSudahMemilih)) * 100
    const sudahMemilihPersen = parseFloat(props.dataSudahMemilih / (props.dataBelumMemilih+props.dataSudahMemilih)) * 100

    useEffect(() => {
        if(props.eventSekolah?.tanggal_mulai > getCurrentDate()){
            setStatusReporting('Not Report')
        }
        else if(props.eventSekolah?.tanggal_mulai < getCurrentDate() &&  props.eventSekolah?.tanggal_selesai > getCurrentDate()){
            setStatusReporting('On Report')
        }
        else if(props.eventSekolah?.tanggal_selesai < getCurrentDate()){
            setStatusReporting('On Finish')
        }
    },[props, setStatusReporting])

  return (
    <div className='content'>
        <div className='header'>
            <span className='fw-bolder fs-5'>Kandidat Ketua Osis</span>
            <span className='fw-bolder fs-5'>{props.namaSekolah}</span>
            <span className='fw-light fs-5'>Tahun Ajaran {props.eventSekolah?.tahun_ajaran}</span>
        </div>
        <div className='scroll-overflow'>

            <div className='kandidat'>
                <Infokandidat kandidatHome = {props.kandidatHome?.kandidat} />
            </div>
        </div>
        <div className='reporting'>
            {
                statusReporting === 'On Report' && (
                    <>
                        <div className='header-report'>
                                <span className='fs-6 text-center fw-bolder'>Hasil Pemilihan</span>
                                <span className='fs-7 text-center fw-light text-secondary'>{props.eventSekolah?.tanggal_mulai} - Sekarang</span>
                            </div>
                            <div className='isi-report'>
                                <div className='report-chart'>
                                    <Doughnut data={data}/>
                                </div>
                                <div className='ms-1'>
                                    <div className='fs-6'>
                                        <div className='d-flex flex-row align-items-center'>
                                            <div className='ul-report1'></div>
                                            <div className='d-flex flex-column'>
                                                <span className='fs-6'>Siswa sudah memilih</span>
                                                <span className='fs-6 text-secondary'>{sudahMemilihPersen}%</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <div className='ul-report2'></div>
                                            <div className='d-flex flex-column'>
                                                <span className='fs-6'>Siswa belum memilih</span>
                                                <span className='fs-6 text-secondary'>{belumMemilihPersen}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </>
                )
            }
            {
                statusReporting === 'On Finish' && (
                    <>
                        <div className='header-report'>
                                <span className='fs-6 text-center fw-bolder'>Hasil Pemilihan</span>
                                <span className='fs-7 text-center fw-light text-secondary'>{props.eventSekolah?.tanggal_mulai} - {props.eventSekolah?.tanggal_selesai}</span>
                            </div>
                            <div className='isi-report'>
                                <div className='report-chart'>
                                    <Doughnut data={data}/>
                                </div>
                                <div className='ms-1'>
                                    <div className='fs-6'>
                                        <div className='d-flex flex-row align-items-center'>
                                            <div className='ul-report1'></div>
                                            <div className='d-flex flex-column'>
                                                <span className='fs-6'>Siswa sudah memilih</span>
                                                <span className='fs-6 text-secondary'>{sudahMemilihPersen}%</span>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <div className='ul-report2'></div>
                                            <div className='d-flex flex-column'>
                                                <span className='fs-6'>Siswa belum memilih</span>
                                                <span className='fs-6 text-secondary'>{belumMemilihPersen}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </>
                )
            }
            {
                statusReporting === 'Not Report' && (
                    <>
                        <div className='d-flex justify-content-center align-items-center p-4'>
                            <span className='text-center fw-bold'>Pemilihan Ketua Osis Belum Dimulai</span>
                            <img src={require('../../img/userinfo-not.png')} alt="" />
                        </div>
                    </>
                )
            }
        
        </div>
        
    </div>
  )
}

export default Content