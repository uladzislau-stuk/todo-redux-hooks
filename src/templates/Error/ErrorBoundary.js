import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorScreen from '../../organism/Error/ErrorScreen'
import { reportError } from '../../utils'

class ErrorBoundary extends Component {
	state = { error: null }

	static getDerivedStateFromError() {
		return { error: true };
	}

	componentDidCatch(error, info) {
		reportError(error, info)
	}

	render() {
		const { error } = this.state
		const {
			children,
			fallbackComponent: FallbackComponent
		} = this.props

		if (error) {
			if (this.props.fallbackComponent) {
				return <FallbackComponent />
			}

			return <ErrorScreen />
		}

		return children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired,
	fallbackComponent: PropTypes.element
}

export default ErrorBoundary