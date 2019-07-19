import React, { useState } from 'react'
import { createContext } from 'react'
import { createMuiTheme } from '@material-ui/core'

let lightTheme = {
	palette: {
		type: 'light'
	},
	overrides: {
		MuiSelect: {
			root: {
				color: 'white'
			},
			icon: {
				color: 'white'
			}
		},
		MuiInput: {
			underline: {
				'&::after, &::before': {
					borderBottom: 'none'
				},
				'&:hover:not(.disabled):before': {
					borderBottom: 'none'
				}
			}
		}
	}
}

let darkTheme = {
	palette: {
		type: 'dark'
	},
	overrides: {
		MuiAppBar: {
			colorPrimary: {
				backgroundColor: '#333'
			}
		}
	}
}

export let AppContext = createContext()

export default function AppProvider(props) {
	const [theme, setTheme] = useState(lightTheme)

	function switchTheme() {
		const newTheme = theme.palette.type === 'light' ? darkTheme : lightTheme
		setTheme(newTheme)
	}

	const uiTheme = createMuiTheme(theme)

	return (
		<AppContext.Provider value={{
			uiTheme,
			switchTheme
		}}>{props.children}
		</AppContext.Provider>
	)
}