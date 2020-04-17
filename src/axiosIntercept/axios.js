import axios from "./axiosRequest"
import { requestUrl, imgUrl } from '../config'
console.log("config/axios", requestUrl, imgUrl)

// 获取商品列表
export const axiosPost = (url, data) => {
  return axios({
    url: `${requestUrl}${url}`,
    method: 'post',
    data: data
  })
}


// 获取商品列表
export const axiosGet = (url) => {
  return axios({
    url: `${requestUrl}${url}`,
    method: 'get'
  })
}

// 获取分类
export const getNavCate = (url, data) => {
  return axios({
    url: `${requestUrl}${url}`,
    method: 'post',
    data: data
  })
}
