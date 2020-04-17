import React, { PureComponent } from 'react';
import { Link } from "react-router-dom"

class WebOrder extends PureComponent {
  render() {
    return (
      <div className="web-order">
        <h3>订单</h3>
        <Link to="/">首页</Link> <br/>
        <Link to="/account/login">登录</Link> <br/>
        <Link to="/cart">购物车</Link> <br/>
        <Link to="/my">个人中心</Link> <br/>
        <Link to="/order">订单</Link>
      </div>
    )
  }
}

export default WebOrder;
