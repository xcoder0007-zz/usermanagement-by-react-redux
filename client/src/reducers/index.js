import {combineReducers} from 'redux';
import  userReducer from './user'
import ActiveUser from './user'
const Reducers = combineReducers({
users:userReducer,
ActiveUser:ActiveUser
})

export default Reducers;