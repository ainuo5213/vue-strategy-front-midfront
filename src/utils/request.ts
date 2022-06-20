import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    icode: import.meta.env.VITE_DYNAMIC_CODE,
    'Cache-Control': 'no-cache'
  }
})

export interface CustomResponse<T> {
  code: number
  data: T
  message: string
  success: boolean
}

instance.interceptors.response.use(
  (resp: AxiosResponse<CustomResponse<any>>) => {
    const { data, status } = resp
    if (status === 200 && data.success && data.code === 200) {
      return Promise.resolve(data.data)
    } else {
      return Promise.reject(new Error(data.message))
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
