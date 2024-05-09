import axiosInstance from 'axios'

const axios = axiosInstance.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
})

axios.interceptors.response.use(response => response, async err => {
    const orignialRequest = err.config
    if(err.response.status === 403 && orignialRequest.url !== '/access-token') {
        try {
            await axios.get('/access-token')
            return axios(orignialRequest)
            
        } catch (error) {
            console.error(error)
            return Promise.reject()
        }
    }
    return Promise.reject()
})

export default axios