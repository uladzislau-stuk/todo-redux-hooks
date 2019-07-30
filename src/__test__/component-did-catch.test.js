import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React, { Component } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { reportError } from '../utils'
import ErrorBoundary from '../templates/Error/ErrorBoundary'

const Exception = () => {
	return (
		{}.method()
	)
}

class ErrorButton extends Component {
	state = { error: false }
	handleClick = () => this.setState({ error: true })
	render() {
		return (
			<ErrorBoundary>
				{this.state.error
					? <Exception />
					: <button onClick={this.handleClick}>Throw error</button>
				}
			</ErrorBoundary>
		)
	}
}

jest.mock('../utils', () => {
	return {
		reportError: jest.fn((err, info) => console.error(err, info))
	}
})

beforeEach(() => {
	jest.spyOn(console, 'error')
	console.error.mockImplementation(() => {})
})

afterEach(() => {
	console.error.mockRestore()
})

test('Catch error and show ErrorScreen', () => {
	// Arrange
	const { container, getByText } = render(<ErrorButton />)

	// Act
	fireEvent.click(getByText('Throw error'))

	// Assertion
	expect(reportError).toHaveBeenCalledTimes(1)
	const error = expect.any(TypeError)
	const info = {componentStack: expect.stringContaining('ErrorButton')}
	expect(reportError).toHaveBeenCalledWith(error, info)

	expect(container).toHaveTextContent('😌')
	expect(container).toHaveTextContent('Oops!')
	expect(container).toHaveTextContent('Something went wrong')
	expect(container).toHaveTextContent('Error code 404')
})
