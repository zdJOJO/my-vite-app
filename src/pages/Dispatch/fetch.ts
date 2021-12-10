import { DispatchSpace } from './index.d'

//TODO: 退出登录
export const logOut = () => {
  return fetch('/api/user/logout', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(result => {
      const paramsList: any[] = []
      Object.keys(result).forEach(key => {
        const value = result[key]
        if (key !== 'url') {
          paramsList.push([key, value].join('='))
        }
      })
      const newUrl = `${result.url}?${paramsList.join('&')}`
      window.location.href = newUrl
    })
}

//TODO: 获取表格数据
interface Result {
  total: number
  list: DispatchSpace.IDispatchRow[]
}
export const getTableData = ({ current, pageSize }: any): Promise<Result> => {
  const query = `execTime=2021-12-09&pageNumber=${current}&pageSize=${1000}`
  return fetch(`/schedule/v2/dispatch/queryDispatchPage?${query}`, {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => ({
      list: res.data,
      total: res.size
    }))
}

// http://uaa.usercenter-usertest.dtwb.ibuscloud.com/login?client_id=bigapp&state=yzxcc58kqd&scope=openid&redirect_uri=http://pubtrans-ias.schedule-dev.dtwb.ibuscloud.com/login/sso&response_type=code&name=/ibus/627961782
// http://uaa.usercenter-usertest.dtwb.ibuscloud.com/login?client_id=bigapp&state=ucnzzmla8i&scope=openid&redirect_uri=http://pubtrans-ias.schedule-dev.dtwb.ibuscloud.com/login/sso&response_type=code&name=/ibus/627961782
