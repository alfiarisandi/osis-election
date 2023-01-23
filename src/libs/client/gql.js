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
    id_event
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
query MyQuery($id_sekolah: Int, $id_event : Int) {
  kandidat(where: {id_sekolah: {_eq: $id_sekolah}, id_event : {_eq : $id_event}}, order_by: {pasangan_urut: asc}) {
    id_kandidat
    nama_ketua
    nama_wakil
    foto
    pasangan_urut
  }
}
`

export const GETREPORTBELUMMEMILIH = gql`
subscription MySubscription($id_sekolah: Int!) {
  siswa_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, status_memilih: {_eq: false}}) {
    aggregate {
      count
    }
  }
}
`
export const GETREPORTBELUMMEMILIHQUERY = gql`
query MySubscription($id_sekolah: Int!) {
  siswa_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, status_memilih: {_eq: false}}) {
    aggregate {
      count(columns: status_memilih)
    }
  }
}
`

export const COUNTALLSISWA = gql`
query MyQuery($id_sekolah: Int!) {
  siswa_aggregate(where: {id_sekolah: {_eq: $id_sekolah}}) {
    aggregate {
      count(columns: id_siswa)
    }
  }
}

`

export const GETREPORTSUDAHMEMEILIH = gql`
subscription MySubscription($id_sekolah: Int!) {
  siswa_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, status_memilih: {_eq: true}}) {
    aggregate {
      count
    }
  }
}

`

// User Info Page 
export const GETDATASISWA = gql `
subscription MyQuery($id_siswa: Int!) {
  siswa_by_pk(id_siswa: $id_siswa) {
    alamat_siswa
    kelas
    nama
    nis
    status_memilih
  }
}
`

//Detai Calon Kandidat 
export const GETDETAILKANDIDAT = gql `
query MyQuery( $id_kandidat: Int! ) {
  kandidat_by_pk(id_kandidat: $id_kandidat) {
    pasangan_urut
    nama_wakil
    nama_ketua
    kelas
    foto
    visi
    misi
  }
}

`

//pilih kandidat 
export const UPDATESISWAMEMILIH = gql`
mutation MyMutation($id_siswa: Int!, $waktu_memilih: date) {
  update_siswa_by_pk(pk_columns: {id_siswa: $id_siswa}, _set: {status_memilih: true, waktu_memilih: $waktu_memilih}) {
    status_memilih
    waktu_memilih
  }
}
`

export const VOTEKANDIDAT = gql `
mutation MyMutation($object: vote_insert_input = {}) {
  insert_vote_one(object: $object) {
    id_siswa
    id_sekolah
    id_kandidat
    id_voting
  }
}
`

export const GETVOTEPEMILIHAN = gql`
query myquery($id_sekolah: Int!, $id_kandidat: Int!) {
  vote_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, id_kandidat: {_eq: $id_kandidat}}) {
    aggregate {
      count(columns: id_kandidat)
    }
  }
}
`

export const GETVOTEPEMILIHANSUBSCRIPTION = gql`
subscription myquery($id_sekolah: Int!, $id_kandidat: Int!) {
  vote_aggregate(where: {id_sekolah: {_eq: $id_sekolah}, id_kandidat: {_eq: $id_kandidat}}) {
    aggregate {
      count(columns: id_kandidat)
    }
  }
}
`