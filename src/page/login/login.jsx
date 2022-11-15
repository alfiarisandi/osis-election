import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useState } from 'react'

export default function Login() {
    let navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const login = () => {
        return navigate('/home')
    }
  return (
    
    <div className='container'>
        <div className='bg-header'>
            <img src={require("../../img/bg-header.png")} alt=""  />
        </div>
        <div className='header-login'>
            <h1 className='mt-5 fw-bolder ms-4'>Login </h1>
            <h4 className='mt-3 fw-bolder ms-4'>Hello, welcome !</h4>
        </div>
        <div className='content-login'>
            <div className='form'>
                <label htmlFor="nis" className='align-self-start fw-bold'>Nomor Induk Sekolah</label>
                <input type="text" className='form-control m-2' id='nis' placeholder='Masukan Nomor Induk Sekolah'/>
                <div className='password'>
                    <label htmlFor="password" className='align-self-start fw-bold mt-3'>Password</label>
                    <input type={showPassword ? "text" : "password"} className='form-control' id='password' placeholder='Masukan Password'/>
                    {
                        showPassword ? (
                            <Icon icon="codicon:eye" width='20' className='show-password' color='#848484' onClick={ () => setShowPassword(!showPassword)}/>
                        ) : (
                            <Icon icon="codicon:eye-closed" width='20' className='show-password' color='#848484' onClick={ () => setShowPassword(!showPassword)}/>
                        )
                    }
                    

                </div>
            </div>
            <div className='buttons'>
                <button className='button-login' onClick={()=>login()}>Login</button>
            </div>
        </div>
    </div>
  )
}
