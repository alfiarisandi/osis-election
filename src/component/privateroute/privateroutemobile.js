import React from 'react'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const cookies = new Cookies()

export default function PrivateRouteMobile() {
    const auth = cookies.get("auth")
  return auth ? <Outlet/> : <Navigate to="/" />;
}
