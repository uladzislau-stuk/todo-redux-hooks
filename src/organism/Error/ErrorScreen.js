import React from 'react';
import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'

ErrorScreen.propTypes = {
	emoji: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string
}

function ErrorScreen(props) {
	const {
		emoji,
		heading,
		subheading
	} = props

	const moji = emoji || '😌 Oops!'
	const head = heading || 'Something \' went wrong.'
	const subhead = subheading || 'Error code 404'

	return (
		<FallbackContainer>
			<span role='img' aria-label='emoji'>{moji}</span>
			<Typography component='h1' variant='h4'>{head}</Typography>
			<Typography component='h2' variant='subtitle1'>{subhead}</Typography>
		</FallbackContainer>
	)
}

var FallbackContainer = styled('div')({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
})

export default ErrorScreen