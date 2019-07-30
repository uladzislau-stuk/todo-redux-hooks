import React, { useContext } from 'react'
import { List, Paper } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import TodoItem from '../TodoItem/TodoItem'
import { MainContext } from '../../contexts/MainContext'

export default function TodoList() {
	const { todos, removeTodo, toggleTodo, editTodo, saveTodo, cancelEdit } = useContext(MainContext)

	return (
		<Paper style={PaperStyle}>
			<List>{todos.map((todo, idx) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					idx={idx}
					amount={todos.length}
					text={todo.text}
					completed={todo.completed}
					editable={todo.editable}
					removeTodo={e => removeTodo(todo.id)}
					toggleTodo={e => toggleTodo(todo.id)}
					editTodo={e => editTodo(todo.id)}
					saveTodo={saveTodo}
					cancelEdit={e => cancelEdit(todo.id)}
				/>
			))}</List>
		</Paper>
	)
}

var PaperStyle = {
	borderRadius: '4px 4px 0 0'
}