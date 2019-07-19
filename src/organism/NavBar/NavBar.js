import React from 'react'
import { AppBar, Toolbar, Select, MenuItem, Typography, IconButton, Box } from '@material-ui/core'
import { AppContext } from '../../contexts/AppContext'
import { WbSunny } from '@material-ui/icons'

function NavBar() {
	return (
		<AppContext.Consumer>{({ theme, switchTheme}) => (
			<AppBar>
				<Toolbar>
					<Typography className='logo' variant='h4'>Todo list</Typography>
					<div className='language'>language</div>
					<Box
						marginLeft='auto'
						marginRight={{
							xs: 2, sm: 3, md: 4
						}}>
						<IconButton
							onClick={switchTheme}
							aria-label='Switch theme'>
							<WbSunny htmlColor='#fff'/>
						</IconButton>
					</Box>
					<Select
						value='eng'
						name='language'>
						<MenuItem value='eng'>English</MenuItem>
						<MenuItem value='it'>Italian</MenuItem>
						<MenuItem value='ru'>Russian</MenuItem>
					</Select>
					{/*onChange={changeFormat}*/}
					{/*value={format}*/}
				</Toolbar>
			</AppBar>
		)}</AppContext.Consumer>
	)
}

export default NavBar