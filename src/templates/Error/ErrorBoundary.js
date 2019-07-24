import React, { Component } from 'react'
import PropTypes from 'prop-types'

ErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired,
	fallbackComponent: PropTypes.element
}

class ErrorBoundary extends Component {
	state = { error: null }

	componentDidCatch(error, errorInfo) {
		this.setState({ error })
		console.error({ error })
	}

	render() {
		const { error } = this.state
		const {
			children,
			fallbackComponent: FallbackComponent
		} = this.props

		if (error) {
			if (fallbackComponent) {
				return <FallbackComponent />
			}

			// return default error component
		}

		return children
	}
}

export default ErrorBoundary