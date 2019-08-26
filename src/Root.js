import React from 'react'
import WithStore from './core/withStore'
import { App } from './templates'
import AppProvider from './contexts/AppContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './i18n'

const Root =  () => (
	<WithStore>
		<Router>
			<Route exact path='/:filter?' component={() => (
				<AppProvider>
					<App />
				</AppProvider>
			)}/>
		</Router>
	</WithStore>
)

export default Root