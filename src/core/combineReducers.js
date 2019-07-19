import { combineReducers } from 'redux'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

export const combinedReducers = combineReducers({
	todos,
	visibilityFilter
})