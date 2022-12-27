import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useLazyQuery, useQuery, useSubscription } from '@apollo/client';
import { COUNTALLSISWA, GETEVENTSEKOLAH, GETKANDIDATHOME, GETNAMASEKOLAH, GETREPORTBELUMMEMILIHQUERY, GETVOTEPEMILIHAN } from '../../libs/client/gql';
import { useEffect } from 'react';
import { useState } from 'react';
import './hasilpemilihan.css'
import Header from '../../component/header/header';
import Infokandidat from '../../component/infokandidat/infokandidat';
var randomColor = require('randomcolor');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Hasilpemilihan() {

    const {data : dataKandidat} = useQuery(GETKANDIDATHOME, {
        variables : {
            id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
        }
    })

    const [getVotebyId, {loading}] = useLazyQuery(GETVOTEPEMILIHAN);
    const [getGolput] = useLazyQuery(GETREPORTBELUMMEMILIHQUERY)
    const {data : allDataSiswa} = useQuery(COUNTALLSISWA, {
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })

    const {data : NamaSekolah} = useQuery(GETNAMASEKOLAH, {
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    const {data : dataEventSekolah} = useSubscription(GETEVENTSEKOLAH, {
      variables : {
        id_sekolah : parseInt(localStorage.getItem('id_sekolah'))
      }
    })
    
    const [getvote, setVote] = useState([])

    const searchVote = (key, arr) => {
      for (let i=0; i < arr.length; i++) {
        if (arr[i].no_urut === key) {
            return arr[i].jumlah_vote;
        }
    }
    }

    const options = {
        responsive: true,
        cutout: 70,
        plugins: {
          legend: {
            position: 'bottom',
            display : true,
            labels : {
              color : "rgba(0, 0, 0, 1)",
              font : {
                family : "poppins",
                size : 13,
                weight : 400,
              }
            }
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };

      const labels = getvote?.map(({pasangan_calon}) => pasangan_calon)

    //   const data = {
    //     labels,
    //     datasets: [
    //       {
    //         label: '',
    //         data: getvote?.map(({jumlah_vote}) => jumlah_vote),
    //         backgroundColor: getvote?.map(({warna}) => warna),
    //       },
    //     ],
    //   };

      const data = {
        labels,
        datasets: [
          {
            label: '# of Votes',
            data: getvote?.map(({jumlah_vote}) => jumlah_vote),
            backgroundColor: getvote?.map(({warna}) => warna),
            borderColor: [],
            borderWidth: 0,
          },
        ],
      };


      useEffect(()=>  {

        setVote([])
        for (let index = 0; index < dataKandidat?.kandidat.length + 1; index++) {
          if(index < dataKandidat?.kandidat.length ) {
            getVotebyId({
              variables : {
                id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
                id_kandidat : dataKandidat?.kandidat[index].id_kandidat
            }
            }).then(res => setVote(getvote => [...getvote, {'no_urut' : dataKandidat?.kandidat[index].pasangan_urut, 'pasangan_calon' : dataKandidat?.kandidat[index].nama_ketua + ' & ' + dataKandidat?.kandidat[index].nama_wakil, "jumlah_vote" : res.data.vote_aggregate.aggregate.count, "warna" : randomColor({luminosity: 'bright', hue: 'random' ,format: 'rgba',alpha: 0.7 })}]))
          }
          else if (index >= dataKandidat?.kandidat.length) {
            getGolput().then(res => setVote(getvote => [...getvote, {'no_urut' : '99', 'pasangan_calon' : "Golongan Putih", "jumlah_vote" : res.data.siswa_aggregate.aggregate.count, "warna" : randomColor({luminosity: 'bright', hue: 'random' ,format: 'rgba',alpha: 0.7 })}]))
          } 
          
        }
        // dataKandidat?.kandidat.forEach(items => {
        //   getVotebyId({
        //     variables : {
        //     id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
        //     id_kandidat : items.id_kandidat}
        //   }).then(res => setVote(getvote => [...getvote, {'no_urut' : items.pasangan_urut, 'pasangan_calon' : items.nama_ketua + ' & ' + items.nama_wakil, "jumlah_vote" : res.data.vote_aggregate.aggregate.count, "warna" : randomColor({luminosity: 'bright', hue: 'random' ,format: 'rgba',alpha: 0.7 })}]))
        // });

        
          
      },[ dataKandidat, getVotebyId])
      

  return (
    <>
      <div className='container mb-5'>
        <Header />
        <div className='mt-4 mx-3 d-flex flex-column justify-content-center position-relative'>
            <div className='d-flex flex-column justify-content-center'>
              <h4 className='fw-bold text-center'>Hasil Pemilihan Ketua Osis</h4>
              <span className='text-center fs-5'>{NamaSekolah?.sekolah[0].nama_sekolah}</span>
              <span className='text-center fs-5'>Periode {dataEventSekolah?.event[0].tahun_ajaran}</span>
            </div>

            <div className='mt-5 w-100 p-4 position-relative box-chart'>
              <Doughnut data={data} options={options} />
              <div className='position-absolute start-50 translate-middle d-flex flex-column justify-content-center title-chart'>
                <span className='fs-4 fw-bold text-center'>{allDataSiswa?.siswa_aggregate.aggregate.count}</span>
                <span className='fs-5 fw-normal text-center'>Siswa</span>
              </div>
            </div>

            <div className='d-flex flex-column mt-4 mb-5'>
              {
                dataKandidat?.kandidat.map((items, index) => {
                  return(
                     <div className='position-relative' key={index}>
                        <div className='w-100 p-4 position-absolute bottom-0 end-0 d-flex justify-content-end box-chart'>
                            <div className='d-flex flex-column justify-content-end box-pasangan'>
                                <span className='text-end fw-bold'>Pasangan Calon</span>
                                <span className='text-end fw-normal'>{items.nama_ketua} & {items.nama_wakil}</span>
                                <span className='text-end fw-bold mt-2'>Perolehan Suara</span>
                                <div className='text-end fw-semibold text-white mt-1'><span className='box-suara'>{searchVote(items.pasangan_urut, getvote)} Suara</span></div>
                            </div>  
                        </div>
                        <div className='position-relative p-3'>
                          <Infokandidat fotoKandidat={items.foto} pasangan_urut ={items.pasangan_urut} />
                        </div>
                      </div>
                  )
                })
              }
             

            </div>
        </div>
      </div>
    {/* {
      loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <>
        <div className='container mt-5'>

          <Bar options={options} data={data} />
        </div>
        </>
      )
    } */}

    </>
  )
}

export default Hasilpemilihan