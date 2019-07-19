import { connect } from 'react-redux'
import MainProvider from '../contexts/MainContext'
import { addTodo, removeTodo, toggleTodo, editTodo, saveTodo, cancelEdit } from '../core/actions/todos'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
		case 'SHOW_ALL':
		default:
			return todos
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
	addTodo,
	removeTodo,
	toggleTodo,
	editTodo,
	saveTodo,
	cancelEdit
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainProvider)