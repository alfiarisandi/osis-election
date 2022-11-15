import React from 'react'
import './content.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Infokandidat from '../infokandidat/infokandidat';

ChartJS.register(ArcElement, Tooltip, Legend);



function Content() {

    const data = {
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [85, 15],
            backgroundColor: [
              'rgba(240, 180, 21, 1)',
              'rgba(208, 208, 208, 1)',
            ],
            borderColor: [],
            borderWidth: 0,
          },
        ],
      };

  return (
    <div className='content'>
        <div className='header'>
            <span className='fw-bolder fs-5'>Kandidat Ketua Osis</span>
            <span className='fw-light fs-5'>Tahun Ajaran 2022/2023</span>
        </div>
        <div className='scroll-overflow'>

            <div className='kandidat'>
                <Infokandidat />
                <Infokandidat/>
            </div>
        </div>
        <div className='reporting'>
        <div className='header-report'>
                <span className='fs-6 text-center fw-bolder'>Reporting Vote</span>
                <span className='fs-7 text-center fw-light text-secondary'>1 Nov - 5 Nov 2022</span>
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
                                <span className='fs-6 text-secondary'>85%</span>
                            </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <div className='ul-report2'></div>
                            <div className='d-flex flex-column'>
                                <span className='fs-6'>Siswa belum memilih</span>
                                <span className='fs-6 text-secondary'>15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Content