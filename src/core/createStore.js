import { createStore } from 'redux'
import { combinedReducers } from './combineReducers'

const store = createStore(combinedReducers)

export default store