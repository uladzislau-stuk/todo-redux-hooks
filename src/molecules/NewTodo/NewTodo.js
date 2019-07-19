import React, { useState } from 'react'
import { MainContext } from '../../contexts/MainContext'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import uuid from 'uuid/v4'

export default function NewTodo() {
	const [newTask, setNewTask] = useState('')

	return (
		<MainContext.Consumer>{({ addTodo }) => (
			<StyledPaper>
				<InputBase
					onChange={e => setNewTask(e.target.value)}
					value={newTask}
					placeholder={`New task`}
					inputProps={{ 'aria-label': `Create new task` }}
					fullWidth
				/>
				<IconButton edge="end" aria-label="Add todo" onClick={e => {
					addTodo(uuid(), newTask)
					setNewTask('')
				}}>
					<AddIcon />
				</IconButton>
			</StyledPaper>
		)}</MainContext.Consumer>
	)
}

var StyledPaper = styled(Paper)({
	display: 'flex',
	margin: '20px 0',
	padding: '2px 20px'
})