import React from 'react'
import PropTypes from 'prop-types'
import { App } from './templates'
import AppProvider from './contexts/AppContext'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './i18n'

const Root =  ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route exact path='/:filter?' component={() => (
				<AppProvider>
					<App />
				</AppProvider>
			)}/>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root