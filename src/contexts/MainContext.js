import React, { useState } from 'react'
import { createContext } from 'react'

export let MainContext = createContext()

export default function MainProvider({ children, ...reduxFunctionality }) {
	const [isDarkMode, toggle] = useState(false)

	function toggleMode() {
		toggle(!isDarkMode)
	}

	return (
		<MainContext.Provider value={{
			isDarkMode,
			toggleMode,
			...reduxFunctionality
		}}>{children}
		</MainContext.Provider>
	)
}

