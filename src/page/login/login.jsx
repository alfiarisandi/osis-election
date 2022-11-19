import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { GETUSERLOGIN } from '../../libs/client/gql'
import { useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

function Login() {
    let navigate = useNavigate()
    
    
    const dataLogin = {
        nis : "",
        password : ""
    }
    const [login, setLogin] = useState(dataLogin) 
    const [showPassword, setShowPassword] = useState(false)
    const [getUser, {data, error, loading}] = useLazyQuery(GETUSERLOGIN)

    const handleChangeInput = (e) => {
        const value = e.target.value

        setLogin({...login, [e.target.name] :value})
    }

    const handleReset = (e) => {
        setLogin(dataLogin)
    }
    const handleLogin = (e) => {
        getUser({
            variables: {
                nis : parseInt(login.nis),
                password : login.password
            }
        })
        handleReset(e)
    }

    useEffect(()=>{
        const cookies = new Cookies()

        if (loading === true){
            Swal.showLoading()
        }
        if(data?.siswa.length === 1){
            Swal.fire({
                showConfirmButton :false,
                icon : "success",
                timer: 1300,
            })
            cookies.set("auth", true, {path: "/"})
            localStorage.setItem('id_siswa', data.siswa[0].id_siswa)
            setTimeout(() => navigate('/home'), 1300)   
            
        }
    },[data,error, loading, navigate])


  return (
    <>
    
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
                    <input type="number" className='form-control m-2' id='nis' name='nis' placeholder='Masukan Nomor Induk Sekolah' value={login.nis} onChange={handleChangeInput}/>
                    <div className='password'>
                        <label htmlFor="password" className='align-self-start fw-bold mt-3'>Password</label>
                        <input type={showPassword ? "text" : "password"} className='form-control' id='password' name='password' placeholder='Masukan Password' value={login.password} onChange={handleChangeInput}/>
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
                    <button className='button-login' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
