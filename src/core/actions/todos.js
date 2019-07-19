export const addTodo = (id, text) => ({
	type: 'ADD_TODO',
	id,
	text
})

export const removeTodo = id => ({
	type: 'REMOVE_TODO',
	id
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const editTodo = id => ({
	type: 'EDIT_TODO',
	id
})

export const saveTodo = (id, text) => ({
	type: 'SAVE_TODO',
	id,
	text
})

export const cancelEdit = id => ({
	type: 'CANCEL_EDIT',
	id
})