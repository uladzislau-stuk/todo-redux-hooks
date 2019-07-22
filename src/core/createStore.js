import { createStore } from 'redux'
import { combinedReducers } from './combineReducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash.throttle'

const persistedState = loadState()
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(combinedReducers, persistedState, reduxExtension)

store.subscribe(throttle(() => {
	saveState({
		filter: store.getState().filter,
		todos : store.getState().todos
	})
}, 1000))

export default store