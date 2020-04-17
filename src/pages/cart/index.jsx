import React, { PureComponent } from 'react';
import { Link } from "react-router-dom"

class WebCart extends PureComponent {
  render() {
    return (
      <div className="web-cart">
        <h3>购物车</h3>
        <Link to="/">首页</Link> <br/>
        <Link to="/account/login">登录</Link> <br/>
        <Link to="/cart">购物车</Link> <br/>
        <Link to="/my">个人中心</Link> <br/>
        <Link to="/order">订单</Link>
      </div>
    )
  }
}

export default WebCart;
