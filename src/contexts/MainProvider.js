import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import {useTheme} from '@material-ui/core'

function MainProvider(props) {
	const [isLightTheme, toggleTheme] = useState(true)
	const theme = useTheme()

	function switchTheme() {
		theme.palette.type = isLightTheme ? 'dark' : 'light'
		toggleTheme(!isLightTheme)
	}

	return (
		<ThemeContext.Provider value={{
			theme,
			isLightTheme,
			switchTheme
		}}>{props.children}
		</ThemeContext.Provider>
	)
}

export default MainProvider