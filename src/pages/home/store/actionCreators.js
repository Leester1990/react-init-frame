import * as constants from "./constants"
import { fromJS } from 'immutable';
import { axiosGet, axiosPost } from "../../../axiosIntercept/axios"

export const getHomeList = (page, size) => {
	return (dispatch) => {
    let data = {
      form: {},
      page: {
        page: page,
        size: size
      }
    }
    axiosPost('/goods/list', data).then(res => {
      if(res.code === 200) {
        const result = res.data.list
        const total = res.data.page.total
        dispatch(changeHomeList(result, page, total))
      }
    })
	}
}

export const actionBannerList = () => {
  return (dispatch) => {
    axiosGet('/goods/banner').then(res => {
      console.log(res)
    })
	}
}

export const changeHomeList = (list, page, total) => ({
	type: constants.HOME_CHANGE_LIST,
	list: fromJS(list),
  page: fromJS(page),
  total: fromJS(total)
})

export const changePage = (page) => ({
	type: constants.HOME_CHANGE_PAGE,
	page
});
