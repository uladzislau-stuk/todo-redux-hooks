import { createStore } from 'redux'
import { combinedReducers } from './combineReducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash.throttle'

const persistedState = loadState();

const store = createStore(combinedReducers, persistedState)

store.subscribe(throttle(() => {
	saveState({
		filter: store.getState().filter,
		todos: store.getState().todos
	});
}, 1000))

export default store