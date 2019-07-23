import React, { useState } from 'react'
import { MainContext } from '../../contexts/MainContext'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import uuid from 'uuid/v4'
import { useTranslation } from 'react-i18next'

function NewTodo() {
	const [newTask, setNewTask] = useState('')
	const { t } = useTranslation()

	return (
		<MainContext.Consumer>{({ addTodo }) => (
			<StyledPaper>
				<InputBase
					onChange={e => setNewTask(e.target.value)}
					value={newTask}
					placeholder={t(`newTodo.inputField.placeholder`)}
					inputProps={{ 'aria-label': `${t(`newTodo.inputField.ariaLabel`)}` }}
					fullWidth
				/>
				<IconButton edge="end" aria-label={t(`newTodo.button.ariaLabel`)} onClick={e => {
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

export default  NewTodo