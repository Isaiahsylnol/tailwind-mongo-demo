import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createFlight = payload => api.post(`/flight`, payload)
export const getAllflights = () => api.get(`/flights`)
 

const apis = {
    createFlight,
    getAllflights,
}

export default apis
