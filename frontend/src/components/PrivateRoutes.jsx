import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from '../lib/axios'
import { useAuthContext } from '../contexts/AuthContext'

const PrivateRoutes = () => {
   const { auth, setAuth } = useAuthContext()
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