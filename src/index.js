import React from 'react'
import ReactDOM from 'react-dom'
import NoSsr from '@material-ui/core/NoSsr'
import { ThemeProvider } from 'styled-components'
import { App } from './containers'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
			night: '#333'
		}
	}
})
const root = document.getElementById('root')

ReactDOM.render(
	<NoSsr>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</NoSsr>,
	root
)
