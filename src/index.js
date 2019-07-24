import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './templates'
import { Provider } from 'react-redux'
import store from './core/createStore'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

const root = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider  i18n={i18n}>
			<App />
		</I18nextProvider>
	</Provider>,
	root
)