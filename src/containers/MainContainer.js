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
// ownProps - that is an object with every props passed to container
const mapStateToProps = (state, ownProps) => ({
	todos: getVisibleTodos(state.todos, ownProps.filter)
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