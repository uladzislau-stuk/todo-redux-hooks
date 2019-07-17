import React from 'react'
import { NavBar, Todo } from '../../components'
import MainProvider from "../../contexts/MainProvider"

function Main() {
	return (
		<MainProvider>
			<NavBar />
			<Todo />
		</MainProvider>
	)
}

export default Main