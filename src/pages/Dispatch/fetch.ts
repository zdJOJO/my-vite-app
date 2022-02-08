import request from '@/utils/request'
import { message } from 'antd'
import { DispatchSpace } from './index.d'

//TODO: 退出登录
export const logOut = async () => {
  try {
    const result: any = await request.get('/user/logout', {
      baseURL: import.meta.env.VITE_UAA_SDK_URL
    })
    if (result) {
      const paramsList: any[] = []
      Object.keys(result).forEach((key: any) => {
        const value = result[key]
        if (key !== 'url') {
          paramsList.push([key, value].join('='))
        }
      })
      const newUrl = `${result.url}?${paramsList.join('&')}`
      window.location.href = newUrl
    }
  } catch (err) {
    message.error(err as any)
  }
}

//TODO: 获取表格数据
interface Result {
  total: number
  list: DispatchSpace.IDispatchRow[]
}
export const getTableData = async ({ current, pageSize }: any): Promise<Result> => {
  const result: any = await request.get(`/dispatch/queryDispatchPage`, {
    params: {
      pageSize: pageSize || 1000,
      pageNumber: current,
      execTime: '2021-12-09'
    }
  })
  return {
    list: result.data || [],
    total: result.size || 0
  }
}
