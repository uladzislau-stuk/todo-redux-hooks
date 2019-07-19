import React from 'react'
import { Main } from '../'
import AppProvider, { AppContext } from '../../contexts/AppContext'
import { ThemeProvider } from '@material-ui/styles'

function App() {
	return (
		<AppProvider>
			<AppContext.Consumer>{({ uiTheme }) => (
				<ThemeProvider theme={ uiTheme }>
					<Main />
				</ThemeProvider>
			)}
			</AppContext.Consumer>
		</AppProvider>
	)
}

export default App