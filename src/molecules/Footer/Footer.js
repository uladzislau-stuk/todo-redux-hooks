import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from '@material-ui/core'

// TODO: Research
const FilterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

function Footer() {
	return (
		<Fragment>
			<ButtonGroup
				fullWidth
				color='primary'
				size='large'
				aria-label='Filters'
			>
				<Button component={FilterLink} to='/all' style={leftButtonStyle} >All</Button>
				<Button component={FilterLink} to='/completed'>Completed</Button>
				<Button component={FilterLink} to='/active' style={rightButtonStyle}>Active</Button>
			</ButtonGroup>
		</Fragment>
	)
}

const leftButtonStyle = {
	borderRadius: '0 0 0 4px'
}

const rightButtonStyle = {
	borderRadius: '0 0 4px 0'
}

export default Footer