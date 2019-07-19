import React, { useState } from 'react'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { MainContext } from '../../contexts/MainContext'
import uuid from 'uuid/v4'

function NewTodo() {
	const [newTask, setNewTask] = useState('')

	return (
		<div className='NewTodo'>
			<MainContext.Consumer>{({ addTodo }) => (
				<Paper>
					<InputBase
						onChange={e => setNewTask(e.target.value)}
						value={newTask}
						placeholder={`New task`}
						inputProps={{ 'aria-label': `Create new task` }}
					/>
					<IconButton edge="end" aria-label="Add todo" onClick={e => {
						addTodo(uuid(), newTask)
						setNewTask('')
					}}>
						<AddIcon />
					</IconButton>
				</Paper>
			)}</MainContext.Consumer>
		</div>
	)
}

export default NewTodo