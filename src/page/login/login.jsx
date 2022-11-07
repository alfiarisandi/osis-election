import  Button  from 'react-bootstrap/Button'
import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()

    const login = () => {
        return navigate('/home')
    }
  return (
    <div className='container'>
        <div className='header-login'>
            <h1 className='text-center mt-5'>Hallo !</h1>
            <h4 className='text-center text-secondary mt-3'>Silahkan login dengan benar</h4>
        </div>
        <div className='content-login'>
            <div className='form'>
                <label htmlFor="nis" className='align-self-start fw-bold'>Nomor Induk Sekolah</label>
                <input type="text" className='form-control m-2' id='nis' placeholder='Masukan Nomor Induk Sekolah'/>
                <label htmlFor="password" className='align-self-start fw-bold mt-3'>Password</label>
                <input type="password" className='form-control m-2' id='password' placeholder='Masukan Password'/>
            </div>
            <div className='buttons'>
                <Button variant='primary' className='me-2' onClick={()=>login()}>Login</Button>
                <Button variant='danger' >Cancel</Button>
            </div>
        </div>
        <div className='footer'>
            <h6 className='text-center'>Copyright @Alfi Arisandi</h6>
        </div>
    </div>
  )
}
