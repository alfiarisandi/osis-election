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
import { Bar } from 'react-chartjs-2';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GETKANDIDATHOME, GETVOTEPEMILIHAN } from '../../libs/client/gql';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { Children } from 'react';

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
    
    const[getVotePemilihan, {data : dataVote}] = useLazyQuery(GETVOTEPEMILIHAN)
    const votePemilihan = []
    let loading = true

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

      const labels = [];

      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [votePemilihan[0], votePemilihan[1], votePemilihan[3]],
            backgroundColor: [
                'rgba(240, 180, 21, 1)',
                'rgba(208, 208, 208, 1)',
              ],
          },
        ],
      };

      const handleVoteee = (i) => {
        votePemilihan.push(parseInt(i))
      }

      const handleVotePemilihan = () => {
        // loading = true
        // dataKandidat?.kandidat.forEach(items => {
        //     getVotePemilihan({
        //         variables:{
        //             id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
        //             id_kandidat : items.id_kandidat
        //         },
        //         fetchPolicy : 'network-only'
        //     }).then(result => result).then(data => console.log(data.data.vote_aggregate.aggregate.count.type))
        //     labels.push(String(items.nama_ketua) + " & " + String(items.nama_wakil))
        // });

        // console.log(votePemilihan.length)

        // console.log(labels)

        // loading = false
        console.log("kepanggil")
        console.log(dataVote?.vote_aggregate.agregate)
      }

      useEffect(()=>  {
        dataKandidat?.kandidat.forEach(items => {
            getVotePemilihan({
                variables:{
                    id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
                    id_kandidat : items.id_kandidat
                },
                fetchPolicy : 'network-only',
                onCompleted : () => handleVotePemilihan()
            })
            labels.push(String(items.nama_ketua) + " & " + String(items.nama_wakil))
        });

        console.log(votePemilihan.length)

        console.log(labels)
        
      },[])
      
    
  return (
    <>
        {
            loading ? (
                <>
                    <span>Loading</span>
                </>
            ): (
                <>

                {/* <Bar options={options} data={data} /> */}
                {
                    votePemilihan.map(i => {
                        return(
                            <span>i</span>
                        )
                    })
                }
                </>
            )
        }
        
    </>
  )
}

export default Hasilpemilihan