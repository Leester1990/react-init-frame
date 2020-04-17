import React, { PureComponent } from 'react';
import { Link } from "react-router-dom"

class AccountLogin extends PureComponent {
  render() {
    const userInfo = window.localStorage.getItem('WEB_USER_INFO')
    console.log(userInfo)
    return (
      <div className="web-login">
        <h3>登录页面</h3>
        <Link to="/">首页</Link> <br/>
        <Link to="/account/login">登录</Link> <br/>
        <Link to="/cart">购物车</Link> <br/>
        <Link to="/my">个人中心</Link> <br/>
        <Link to="/order">订单</Link>
      </div>
    )
  }
}

export default AccountLogin;
