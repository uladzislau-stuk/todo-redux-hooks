import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup, Button } from '@material-ui/core'

// https://material-ui.com/components/buttons/ - Third-party routing library
const FilterLink = React.forwardRef((props, ref) => (
	<NavLink
		activeStyle={{ backgroundColor: '#2eb959' }}
		innerRef={ref}
		{...props}
	/>));

function Footer({ match: { params } }) {
	console.log(params.filter)
	return (
		<Fragment>
			<ButtonGroup
				fullWidth
				variant='contained'
				color='secondary'
				size='large'
				aria-label='Filters'
			>
				<Button component={FilterLink} to='/all' style={leftLinkStyle} >All</Button>
				<Button component={FilterLink} to='/completed'>Completed</Button>
				<Button component={FilterLink} to='/active' style={rightLinkStyle}>Active</Button>
			</ButtonGroup>
		</Fragment>
	)
}

var leftLinkStyle = {
	borderRadius: '0 0 0 4px'
}

var rightLinkStyle = {
	borderRadius: '0 0 4px 0'
}

export default Footer