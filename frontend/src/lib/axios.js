import axiosInstance from 'axios'

const axios = axiosInstance.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
})
// will add interceptor for response later

export default axios