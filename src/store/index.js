import {createStore, applyMiddleware} from 'redux';

import rootReducer from './../reducers/index.js'

import promiseMiddleware from 'redux-promise'

 var store = createStore(rootReducer, applyMiddleware(promiseMiddleware));


 //createStore(reducer, middleWare)




export default store;