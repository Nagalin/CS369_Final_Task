import React, { useState } from 'react'
import axios from '../lib/axios'
import { Outlet, useNavigate } from 'react-router-dom'
const Proctected = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isLoading, setIsloading] = useState(true)
    const navigate = useNavigate()

    axios.get('/auth')
    .then(() => {
        setIsLoggedIn(true)
    })
    .catch(err => console.error(err))
    .finally(() => setIsloading(false))

    if(isLoading) return null
    if(!isLoading && !isLoggedIn) navigate('/login')
    if(!isLoading && isLoggedIn) return <Outlet/>
  
}

export default Proctected