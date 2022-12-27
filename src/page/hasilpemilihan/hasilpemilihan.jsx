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
import { useLazyQuery, useQuery, useSubscription } from '@apollo/client';
import { GETKANDIDATHOME, GETVOTEPEMILIHAN, GETVOTEPEMILIHANSUBSCRIPTION } from '../../libs/client/gql';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

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

    const [getVotebyId] = useLazyQuery(GETVOTEPEMILIHAN);
    
    const getvote = []
    const [generateVote, setGenerateVote] = useState({})
    const [loading, setLoading] =useState (false)

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

      const [labels, setLabels] = useState([]);

      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: [
                'rgba(240, 180, 21, 1)',
                'rgba(208, 208, 208, 1)',
              ],
          },
        ],
      };

      // const handleVotePemilihanAxios = async(id_kandidat) => {
      //   const endpoint = "https://osis-election.hasura.app/v1/graphql";
      //   const headers = {
      //     'x-hasura-admin-secret' :
      //       '56YsV9sJqkqe4G6M8RbBpP1xivLLInP27Vmwbn10l8fuM17Cu4Mvx71MfBzsTC6n'
      //   };
      //   const graphqlQuery = {
      //       "operationName": "getvote",
      //       "query": `
      //             query getvote($id_sekolah: Int!, $id_kandidat: Int!) {
      //               vote_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, id_kandidat: {_eq: $id_kandidat}}) {
      //                 aggregate {
      //                   count(columns: id_kandidat)
      //                 }
      //               }
      //             }
      //               `,
      //       "variables": {
      //           id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
      //           id_kandidat : id_kandidat
      //       }
      //   };

      //   const options = {
      //       "method": "POST",
      //       "headers": headers,  
      //       "body": JSON.stringify(graphqlQuery)
      //   };

      //   const response = await fetch(endpoint, options);
      //   const data = await response.json();

      //   setVote({...getVote, [id_kandidat] : data.data.vote_aggregate.aggregate.count})
      //   return data.data.vote_aggregate.aggregate.count
      // }

      // const handleGetVote = useCallback(() => {
      //   dataKandidat?.kandidat.forEach(items => {
      //     getVotebyId({
      //       variables : {
      //       id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
      //       id_kandidat : items.id_kandidat}
      //     }).then(res => setVote({...getVote, [items.id_kandidat] : res.data.vote_aggregate.aggregate.count}))
      //   });
      // })

      useEffect(()=>  {

        dataKandidat?.kandidat.forEach(items => {
          getVotebyId({
            variables : {
            id_sekolah : parseInt(localStorage.getItem('id_sekolah')),
            id_kandidat : items.id_kandidat}
          }).then(res => getvote.push(res.data.vote_aggregate.aggregate.count))
        });
        
          
      },[ dataKandidat, getVotebyId])
      
  return (
    <>
    {
      loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <>

        <Bar options={options} data={data} />

        {
          console.log(getvote)
          // getVote.map(i => {
          //   return(
          //     <span>{i}</span>
          //   )
          // })
        }
        </>
      )
    }

    </>
  )
}

export default Hasilpemilihan