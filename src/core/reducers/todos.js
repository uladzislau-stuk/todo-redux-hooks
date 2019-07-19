export default function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{ id: action.id, text: action.text, completed: false, editable: false }
			]
		case 'TOGGLE_TODO':
			return state.map(todo => (
				todo.id === action.id
					? {...todo, completed: !todo.completed}
					: todo
			))
		case 'EDIT_TODO':
			return state.map(todo => (
				todo.id === action.id
					? {...todo, editable: !todo.editable}
					: {...todo, editable: false}
			))
		case 'SAVE_TODO':
			return state.map(todo => (
				todo.id === action.id
					? {...todo, editable: !todo.editable, text: action.text}
					: todo
			))
		case 'CANCEL_EDIT':
			return state.map(todo => (
				todo.id === action.id
					? {...todo, editable: !todo.editable, text: todo.text,}
					: todo
			))
		case 'REMOVE_TODO':
			return state.filter(todo => todo.id !== action.id)
		default:
			return state
	}
}