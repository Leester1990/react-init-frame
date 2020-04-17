import * as constants from "./constants"
import { fromJS } from 'immutable';

const defaultState = fromJS({
  banner: [1, 2, 3],
  list: [],
  pageList: [1,2,3,4,5,6,7,8,9,10,11,12,13],
  page: 1,
  total: 0,
  size: 12
})

export default (state = defaultState, action) => {
	switch (action.type) {
    case constants.HOME_CHANGE_PAGE:
      return state.set('page', action.page);
    case constants.HOME_CHANGE_LIST:
      return state.merge({
        list: action.list,
        page: action.page,
        total: action.total
      })
    default:
      return state
  }
}
