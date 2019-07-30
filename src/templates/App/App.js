import React, { Suspense, useContext } from 'react'
import { Main } from '../'
import { AppContext } from '../../contexts/AppContext'
import { ThemeProvider } from '@material-ui/styles'
import ErrorBoundary from '../Error/ErrorBoundary'

function App() {
	const { uiTheme } = useContext(AppContext)

	return (
		<Suspense fallback={<div>Loading</div>}>
			<ThemeProvider theme={ uiTheme }>
				<ErrorBoundary>
					<Main />
				</ErrorBoundary>
			</ThemeProvider>
		</Suspense>
	)
}

export default App