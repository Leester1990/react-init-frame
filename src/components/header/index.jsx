import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../pages/home/store';

class CommonHeader extends PureComponent {
  render() {
    const { pageList, page, changePage, size } = this.props
    return (
      <div className="web-common-header">
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
        <h4>当前页码是：{page}</h4>
        <hr/>
      </div>
    )
  }
}

const mapState = (state) => ({
  pageList: state.getIn(['home', 'pageList']),
  page: state.getIn(['home', 'page']),
  size: state.getIn(['home', 'size'])
})

const mapDispatch = (dispatch) => ({
  changePage(page, size) {
    dispatch(actionCreators.getHomeList(page, size))
  }
})

export default connect(mapState, mapDispatch)(CommonHeader);
