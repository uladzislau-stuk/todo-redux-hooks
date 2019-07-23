import React, { Suspense } from 'react'
import { Main } from '../'
import AppProvider, { AppContext } from '../../contexts/AppContext'
import { ThemeProvider } from '@material-ui/styles'

function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<AppProvider>
				<AppContext.Consumer>{({ uiTheme }) => (
					<ThemeProvider theme={ uiTheme }>
						<Main />
					</ThemeProvider>
				)}
				</AppContext.Consumer>
			</AppProvider>
		</Suspense>
	)
}

export default App