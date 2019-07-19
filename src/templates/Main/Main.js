import React from 'react'
import { NavBar, Todo } from '../../organism'
import MainContainer from '../../containers/MainContainer'
import { Grid } from '@material-ui/core'

export default function Main() {
	return (
		<MainContainer>
			<NavBar />
			<Grid container justify='center' style={{ marginTop: 80 }}>
				<Grid item xs={11} md={8} lg={4}>
					<Todo />
				</Grid>
			</Grid>
		</MainContainer>
	)
}