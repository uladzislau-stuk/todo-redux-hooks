import React from 'react'
import { TodoList, NewTodo, Footer } from '../../molecules'
import { styled } from '@material-ui/styles'

export default function Todo() {
	return (
		<StyledContainer>
			<NewTodo />
			<TodoList />
			<Footer />
		</StyledContainer>
	)
}

var Container = props => <div className='Todo'>{props.children}</div>
var StyledContainer = styled(Container)({
	// TODO: How to apply styles on nested components?
	// '&& > .NewTodo': {
	// 	marginBottom: 20
	// },
	// '&': {
	// 	marginBottom: 20
	// }
})