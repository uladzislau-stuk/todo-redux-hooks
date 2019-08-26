import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combinedReducers } from './combineReducers'
import { loadState, saveState } from './localStorage'
import { devToolsEnhancer } from 'redux-devtools-extension'
import throttle from 'lodash.throttle'

export default function WithStore(props) {
	const persistedState = loadState();

	const store = createStore(
		combinedReducers,
		persistedState,
		devToolsEnhancer()
	)

	store.subscribe(throttle(() => {
		saveState({
			filter: store.getState().filter,
			todos: store.getState().todos
		});
	}, 1000))

	return <Provider store={store}>{props.children}</Provider>
}