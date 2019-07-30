import React from 'react'
import { NavBar, Todo } from '../../organism'
import MainContainer from '../../containers/MainContainer'
import { withRouter } from 'react-router'
import { Grid } from '@material-ui/core'

function Main({ match: { params } }) {
	return (
		<MainContainer filter={params.filter
			? `SHOW_${params.filter.toUpperCase()}`
			: 'SHOW_ALL'
		}>
			<NavBar />
			<Grid container justify='center' style={{ marginTop: 80 }}>
				<Grid item xs={11} md={8} lg={4}>
					<Todo />
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default withRouter(Main)