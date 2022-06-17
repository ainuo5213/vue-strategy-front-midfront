import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    icode: import.meta.env.VITE_DYNAMIC_CODE
  }
})

export default instance
