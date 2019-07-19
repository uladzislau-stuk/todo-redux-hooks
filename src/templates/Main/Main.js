import React from 'react'
import { NavBar, Todo } from '../../organism'
import MainContainer from '../../containers/MainContainer'
import { styled } from '@material-ui/styles'

export default function Main() {
	return (
		<MainContainer>
			<NavBar />
			<StyledSection>
				<Todo />
			</StyledSection>
		</MainContainer>
	)
}

var StyledSection = styled('section')({
	marginTop: 80
})