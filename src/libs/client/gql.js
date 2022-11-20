import { gql } from "@apollo/client";

export const GETUSERLOGIN = gql`
    query getUser($nis: Int = "", $password: String = "") {
  siswa(where: {nis: {_eq: $nis}, password: {_eq: $password}}) {
    id_siswa
    id_sekolah
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
export const GETNAMASEKOLAH = gql`
  query MyQuery($id_sekolah: Int) {
  sekolah(where: {id_sekolah: {_eq: $id_sekolah}}) {
    nama_sekolah
  }
  }
`
export const GETEVENTSEKOLAH = gql`
  subscription MySubscription($id_sekolah: Int) {
    event(where: {id_sekolah: {_eq: $id_sekolah}}) {
      tanggal_mulai
      tanggal_selesai
      tanggal_pengumuman
      tahun_ajaran
    }
  }
`

export const GETKANDIDATHOME = gql `
query MyQuery($id_sekolah: Int) {
  kandidat(where: {id_sekolah: {_eq: $id_sekolah}}, order_by: {pasangan_urut: asc}) {
    id_kandidat
    nama_ketua
    nama_wakil
    foto
    pasangan_urut
  }
}
`

export const GETREPORTBELUMMEMILIH = gql`
  subscription MySubscription {
  siswa_aggregate(where: {status_memilih: {_eq: false}}) {
    aggregate {
      count(columns: status_memilih)
    }
  }
}
`

export const GETREPORTSUDAHMEMEILIH = gql`
  subscription MySubscription {
  siswa_aggregate(where: {status_memilih: {_eq: true}}) {
    aggregate {
      count(columns: status_memilih)
    }
  }
}

`

// User Info Page 
export const GETDATASISWA = gql `
  
`