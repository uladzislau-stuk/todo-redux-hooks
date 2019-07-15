import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function MainProvider(props) {
	const [isDarkMode, toggle] = useState(false)

	function toggleMode() {
		toggle(!isDarkMode)
	}

	return (
		<ThemeContext.Provider value={{
			isDarkMode,
			toggleMode
		}}>{props.children}
		</ThemeContext.Provider>
	)
}

export default MainProvider