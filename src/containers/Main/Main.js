import React from 'react'
import { NavBar } from '../../components'
import MainProvider from "../../contexts/MainProvider"

function Main() {
	return (
		<MainProvider>
			<NavBar />
		</MainProvider>
	)
}

export default Main