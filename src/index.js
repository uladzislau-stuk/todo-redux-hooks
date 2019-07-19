import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './templates'
import { Provider } from 'react-redux'
import store from './core/createStore'

const root = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
)
