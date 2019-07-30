import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button } from '@material-ui/core'

function Footer() {
	return (
		<div>
			<ButtonGroup
				variant='contained'
				color='secondary'
				size='large'
				aria-label='Filters'
			>
				<Button>All</Button>
				<Button>Completed</Button>
				<Button>Active</Button>
			</ButtonGroup>
		</div>
	)
}

Footer.propTypes = {

}

export default Footer