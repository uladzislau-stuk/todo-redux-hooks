import React from 'react'
import { List, Paper } from '@material-ui/core'
import TodoItem from '../TodoItem/TodoItem'
import { MainContext } from '../../contexts/MainContext'

export default function TodoList() {
	return (
		<MainContext.Consumer>{({ todos, removeTodo, toggleTodo, editTodo, saveTodo, cancelEdit }) => (
			<Paper>
				<List>{todos.map((todo, idx) => {
					console.log(todo.text)
					return <TodoItem
							key={todo.id}
							id={todo.id}
							idx={idx}
							text={todo.text}
							completed={todo.completed}
							editable={todo.editable}
							removeTodo={e => removeTodo(todo.id)}
							toggleTodo={e => toggleTodo(todo.id)}
							editTodo={e => editTodo(todo.id)}
							saveTodo={saveTodo}
							cancelEdit={e => cancelEdit(todo.id)}
						/>
				})}</List>
			</Paper>
		)}</MainContext.Consumer>
	)
}