import React, { Fragment, useState } from 'react'
import {
	ListItem,
	ListItemIcon,
	Checkbox,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	InputBase,
	Divider
} from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon, Cancel as CancelIcon, Save as SaveIcon } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

export default function TodoItem ({
	id, idx, text, completed, editable, amount,
	removeTodo, toggleTodo, editTodo, saveTodo, cancelEdit
}) {
	const [editedTask, setEditedTask] = useState(text)
	const labelId = `checkbox-list-label-${idx}`
	const { t } = useTranslation()

	return (
		<Fragment>
			<ListItem role={undefined} dense button>
				<ListItemIcon>
					<Checkbox
						edge="start"
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
						checked={completed}
						onClick={toggleTodo}
					/>
				</ListItemIcon>
				<ListItemText id={labelId}>
					<InputBase
						value={editedTask}
						placeholder={editedTask}
						disabled={!editable}
						style={{ textDecoration: completed ? 'line-through' : 'none' }}
						inputProps={{ 'aria-label': `${editedTask}` }}
						onChange={e => setEditedTask(e.target.value)}
					/>
				</ListItemText>
				<ListItemSecondaryAction>{
					editable
						?
						<Fragment>
							<IconButton
								onClick={e => {
									setEditedTask(text)
									cancelEdit()
								}}
								edge='end'
								aria-label={t(`todo.buttonCancel.ariaLabel`)}>
								<CancelIcon />
							</IconButton>
							<IconButton
								onClick={e => saveTodo(id, editedTask)}
								edge='end'
								aria-label={t(`todo.buttonSave.ariaLabel`)}>
								<SaveIcon />
							</IconButton>
						</Fragment>
						:
						<Fragment>
							<IconButton
								onClick={editTodo}
								edge='end'
								aria-label={t(`todo.buttonEdit.ariaLabel`)}>
								<EditIcon />
							</IconButton>
							<IconButton
								onClick={removeTodo}
								edge='end'
								aria-label={t(`todo.buttonDelete.ariaLabel`)}>
								<DeleteIcon />
							</IconButton>
						</Fragment>
				}</ListItemSecondaryAction>
			</ListItem>
			{idx < amount - 1
				&&
				<Divider />
			}
		</Fragment>
	)
}