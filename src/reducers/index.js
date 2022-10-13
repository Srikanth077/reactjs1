import { combineReducers } from 'redux'


import empReducer from './empReducer.js'
import userReducer from './userReducer.js'
import studentReducer from './studentReducer.js'

var rootReducer = combineReducers({
    empReducer, userReducer, studentReducer
});


export default rootReducer; 