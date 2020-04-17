// 全局地址配置

let requestUrl = "http://127.0.0.1:8188/api"
let imgUrl = 'http://127.0.0.1:8188/'

if (process.env.NODE_ENV === 'development'){
  imgUrl = 'http://127.0.0.1:8188/'
  // requestUrl = 'http://127.0.0.1:8188/api',
} else if (process.env.NODE_ENV === 'production') {
  // requestUrl = 'http://www.i1i3.com/api',
  imgUrl = 'http://www.i1i3.com/api'
}

export  {
  requestUrl,
  imgUrl
}
