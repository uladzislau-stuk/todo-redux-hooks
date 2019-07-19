import React from 'react'
import TodoList from '../../molecules/TodoList/TodoList'
import NewTodo from '../../molecules/NewTodo/NewTodo'
import { styled } from '@material-ui/styles'

export default function Todo() {
	return (
		<StyledContainer>
			<NewTodo />
			<TodoList />
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