import { gql } from "@apollo/client";

export const GETUSERLOGIN = gql`
    query getUser($nis: Int = "", $password: String = "") {
  siswa(where: {nis: {_eq: $nis}, password: {_eq: $password}}) {
    id_siswa
  }
} 
`

// Home Page Query

export const GETUSERNAMA = gql`
    query MyQuery($id_siswa: Int) {
    siswa(where: {id_siswa: {_eq: $id_siswa}}) {
    kelas
    nama
  }
}
`