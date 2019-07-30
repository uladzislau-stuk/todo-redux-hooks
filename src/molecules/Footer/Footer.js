import React, { Fragment } from 'react'
import { styled } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
				<Button style={leftButtonStyle} component={FilterLink} to='/all'>All</Button>
				<Button component={FilterLink} to='/completed'>Completed</Button>
				<Button style={rightButtonStyle} component={FilterLink} to='/active'>Active</Button>
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

Footer.propTypes = {

}

export default Footer