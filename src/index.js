import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './templates'
import { Provider } from 'react-redux'
import store from './core/createStore'
import AppProvider from './contexts/AppContext'
import './i18n'

const root = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<AppProvider>
			<App />
		</AppProvider>
	</Provider>,
	root
)