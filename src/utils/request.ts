import { message } from 'antd'
import axios from 'axios'
import qs from 'qs'

const filterErrMsgList = [
  { url: '/dispatch/import', method: 'post' },
  { url: '/user/currentUser', method: 'get' },
  { url: '/dispatch/dispatchAdd', method: 'get' }
]

const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBTRANS_BASE_URL,
  timeout: 0,
  withCredentials: true,
  paramsSerializer: params => {
    return qs.stringify(params)
  }
})

instance.interceptors.response.use(
  response => {
    if (
      response.data.code &&
      response.data.code !== '0' &&
      filterErrMsgList.findIndex(item => item.url === response.config.url && item.method === response.config.method) ===
        -1
    ) {
      message.error({
        content: response.data.message || '服务器错误',
        type: 'error'
      })
      throw Error(response.data.message || '服务器错误')
    }
    return response.data
  },
  error => {
    if (error.response && error.response.status === 401) {
      const responseBody = error.response.data
      const paramsList: any[] = []
      // window.location.href = `${process.env.LOGIN_ADDRESS}&state=${responseBody.state}&name=${responseBody.name}`;
      Object.keys(responseBody || {}).forEach(key => {
        const value = responseBody[key]
        if (key !== 'url') {
          paramsList.push([key, value].join('='))
        }
      })
      window.location.href = `${responseBody.url}?${paramsList.join('&')}`
    } else {
      message.error('加载失败，请检查网络')
    }
    throw error
  }
)

export default instance
