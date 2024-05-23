import React, { useEffect, useState } from 'react'
import axios from '../lib/axios'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoutes = () => {
   const {auth,setAuth} = useAuth()
    const [isLoading, setIsloading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/auth')
        .then(() => setAuth(true))
        .catch(err => console.error(err))
        .finally(() => setIsloading(false))
    },[])

    if(isLoading) return null
    if(!isLoading && !auth) navigate('/')
    if(!isLoading && auth) return <Outlet/>
}

export default PrivateRoutes