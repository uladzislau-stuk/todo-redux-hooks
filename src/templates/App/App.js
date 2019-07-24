import React, { Suspense, useContext } from 'react'
import { Main } from '../'
import { AppContext } from '../../contexts/AppContext'
import { ThemeProvider } from '@material-ui/styles'

function App() {
	const { uiTheme } = useContext(AppContext)

	return (
		<Suspense fallback={<div>Loading</div>}>
			<ThemeProvider theme={ uiTheme }>
				<Main />
			</ThemeProvider>
		</Suspense>
	)
}

export default App