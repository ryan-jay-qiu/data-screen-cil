import request from '@/utils/request'

export function envirLogin() {
  return request({
    url: '/api/system/user/login',
    method: 'post',
    params: {
      loginName: 'c230216hnwj',
      password: 'c230216hnwj'
    }
  })
}

export function getFactor(data) {
  return request({
    url: '/api/data/deviceBarData',
    method: 'get',
    params: data
  })
}

export function getHistory(data) {
  return request({
    url: '/api/data/history',
    method: 'get',
    params: data
  })
}
