import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})
