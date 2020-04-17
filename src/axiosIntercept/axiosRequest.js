import axios from 'axios'
import { messageToast } from '../util/tools'
import { requestUrl } from '../config'

// 超时
axios.defaults.timeout = 30000
// 基础地址
axios.defaults.baseURL = requestUrl

// http请求拦截器
// let reqLoading = null
axios.interceptors.request.use(
  config => {
    // 判断请求参数是否为JSON对象
    if (typeof config.data === 'object') {
      config.headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (localStorage.getItem('token')) {
      config.headers['token'] = localStorage.getItem('token')
      /* end */
    }

    let params = config.params ? config.params : {}
    config.params = {
      deviceSource: 'WEB',
      appVersion: '1.0.0',
      ...params
    }

    // reqLoading = `
    // <div className="example">
    //   <Spin />
    // </div>
    // `
    return config
  },
  error => {
    // reqLoading.close()
    messageToast('请求超时')
    return Promise.reject(error)
  }
)

// http响应拦截器
axios.interceptors.response.use(
  result => {
    // 响应成功关闭loading
    // reqLoading.close()
    let data = result.data
    if (data.code === 200) {
      return data
    } else if (data.code === 900000000000) {
      window.location.href='/account/login'
    } else {
      messageToast(data.message)
      return data
    }
  },
  error => {
    // reqLoading.close()
    if (error === 'Error: Request failed with status code 403') {
      messageToast('请重新登录， 403')
    }
    if (error.response) {
      switch (error.response.status) {
        case 403: {
          messageToast('登录超时，请重新登录， 403')
          clearUserInfo()
          return Promise.reject(error)
        }
        default: {
          messageToast('加载失败')
          clearUserInfo()
          return Promise.reject(error)
        }
      }
    }
  }
)

// 清除用户信息
const clearUserInfo = function () {
  window.localStorage.clear('WEB_USER_INFO')
  window.localStorage.clear('token')
  setTimeout(() => {
    console.log("清除用户信息")
    // window.location.href = '/account/login'
  }, 1000)
}

export default axios
