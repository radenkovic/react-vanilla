import { combineReducers } from 'redux'
import userReducer from 'reducers/userReducer'

export const makeRootReducer = () => {
  return combineReducers({
    user: userReducer
  })
}


export default makeRootReducer
