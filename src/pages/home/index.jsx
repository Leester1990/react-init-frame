import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actionCreators } from './store';
// import { deCodeToken, DataEncrypt, DataDecrypt } from "../../util/tools"

class WebHome extends PureComponent {

  render() {
    const { banner, list, pageList, changePage, page, size, total } = this.props
    return (
      <div className="web-home">
        <h3>首页</h3>
        <div>
          {
            banner.map(item => {
              return (
                <p key={item}>ban-{item}</p>
              )
            })
          }
        </div>
        <div>
          {
            list.map(item => {
              return (
                <p key={item.get('goods_id')}>{item.get('goods_id')}---{item.get('goods_d_title')}</p>
              )
            })
          }
        </div>
        <div>
          {
            pageList.map(item => {
              return (
                <span
                  className="common-pagination-item"
                  key={item}
                  onClick={() => changePage(item, size)}
                >{item}</span>
              )
            })
          }
        </div>
        <h4>当前页码是：{page}-总数：{total}</h4>
        <Link to="/">首页</Link> <br/>
        <Link to="/account/login">登录</Link> <br/>
        <Link to="/cart">购物车</Link> <br/>
        <Link to="/my">个人中心</Link> <br/>
        <Link to="/order">订单</Link>
      </div>
    )
  }
  componentDidMount() {
    this.props.getHomeList()
    this.props.getBannerList()
  }
  // componentWillMount() {
  //   console.log(window.util.config())
  //   let userInfo = JSON.parse(window.localStorage.getItem('WEB_USER_INFO'))
  //   // console.log(userInfo.token)
  //   console.log(deCodeToken(userInfo.token))
  //
  //   // let enData = DataEncrypt(userInfo.token)
  //   // console.log(enData)
  //   // console.log(DataDecrypt(enData))
  // }
}

// const mapState = (state) => ({
//
// })

const mapState = (state) => ({
	banner: state.getIn(['home', 'banner']),
  list: state.getIn(['home', 'list']),
  pageList: state.getIn(['home', 'pageList']),
  page: state.getIn(['home', 'page']),
  size: state.getIn(['home', 'size']),
  total: state.getIn(['home', 'total'])
})

const mapDispatch = (dispatch) => ({
  getBannerList() {
    dispatch(actionCreators.actionBannerList())
  },
  getHomeList() {
    dispatch(actionCreators.getHomeList(this.page, this.size))
  },
  changePage(page, size) {
    dispatch(actionCreators.getHomeList(page, size))
  }
})

export default connect(mapState, mapDispatch)(WebHome);
