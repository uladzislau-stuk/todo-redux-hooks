import React from 'react';
import PropTypes from 'prop-types'
import { Typography, Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'

function ErrorScreen(props) {
	const {
		emoji,
		heading,
		subheading
	} = props

	const moji = emoji || '😌'
	const head = heading || 'Something went wrong.'
	const subhead = subheading || 'Error code 404'

	return (
		<FallbackContainer>
			<Box>
				<span role='img' aria-label='emoji'>{moji}</span>
				<Typography component='span' variant='h5'>&nbsp;&nbsp;Oops!</Typography>
			</Box>
			<Content>
				<Typography component='h1' variant='h4'>{head}</Typography>
				<Typography component='h2' variant='subtitle1'>{subhead}</Typography>
			</Content>
		</FallbackContainer>
	)
}

ErrorScreen.propTypes = {
	emoji: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string
}

var FallbackContainer = styled('div')({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
})

var Content = styled('div')({
	textAlign: 'center'
})

export default ErrorScreen