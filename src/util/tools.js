import { message } from 'antd';
import crypto from "crypto"
import CryptoJS from "crypto-js"

const tokenKey = "c7f504e276aa62480482a705c7d70036"
const cryptoJSKey = () => {
  return CryptoJS.enc.Utf8.parse("KSLFJDSKALFD")
}
const cryptoJSIv = () => {
  return CryptoJS.enc.Utf8.parse('DFSAFDSAFJDKSHAFJKD')
}

export const DataEncrypt = (string) => {
  let srcs = CryptoJS.enc.Utf8.parse(string);
  let encrypted = CryptoJS.AES.encrypt(srcs, cryptoJSKey(), {
    iv: cryptoJSIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}

export const DataDecrypt = (string) => {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(string);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, cryptoJSKey(), {
    iv: cryptoJSIv(),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8).toString();
}

export const tokenDecrypt = (encrypted, key) => {
  const decipher = crypto.createDecipher('aes192', key)
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

export const deCodeToken = (token) => {
  let tokenArr = token.split(".")
  let one = tokenDecrypt(tokenArr[0], tokenKey)
  let two = tokenDecrypt(tokenArr[1], tokenKey)
  let three = tokenDecrypt(tokenArr[2], tokenKey)
  let twoArr = two.split(",")
  return {
    project: one,
    phone: twoArr[0].replace("phone=", ""),
    loginTime: twoArr[1].replace("time=", ""),
    member_id: twoArr[2].replace("member_id=", ""),
    deviceSource: three.split(",")[0],
    appVersion: three.split(",")[1]
  }
}

// 手机验证
export const mobileVerify = (str) => {
  console.log(str)
  let mobileReg = /^1\d{10}$/; //手机号验证
  return mobileReg.test(str)
}

// 共用toast提示
export const messageToast = (txt) => {
  message.destroy()
  message.info(txt)
}

// 本地存储
export const setLocalStorage = (key, data) => {
  window.localStorage.setItem(key, data)
}

// 获取数据
export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key)
}

// 获取用户数据
export const getUserInfo = (key) => {
  return JSON.parse(getLocalStorage(key)) || {}
}


// 清除数据
export const clearLocalStorage = (key) => {
  window.localStorage.clear(key)
}

// 检测用户是否登录
export const checkUserIsLogin = (history) => {
  let userInfo = getUserInfo('WEB_USER_INFO')
  if(userInfo.member_nickname) {
    return true
  } else {
    messageToast("您还未登录")
    setTimeout(() => history.push("/account/login"), 500)
  }
}
