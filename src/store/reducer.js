import { combineReducers } from "redux-immutable"
import { reducer as homeStore } from '../pages/home/store'

const reducer = combineReducers({
  home: homeStore
})

export default reducer
