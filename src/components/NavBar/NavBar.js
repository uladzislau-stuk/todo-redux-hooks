import React from 'react'
import { AppBar, Toolbar, Select, MenuItem, Typography, IconButton } from '@material-ui/core'
import ThemeContext from '../../contexts/ThemeContext'
import { WbSunny } from '@material-ui/icons'
import { styled } from '@material-ui/core/styles'

function NavBar() {
	return (
		<ThemeContext.Consumer>{({ isDarkMode, toggleMode }) => (
			<div>
				<AppBar>
					<Toolbar>
						<Typography className='logo' variant='h4'>Todo list</Typography>
						<div className='language'>language</div>
						<IconButton
							onClick={toggleMode}
							aria-label='Switch theme'>
							<WbSunny htmlColor='#fff'/>
						</IconButton>
						<Select
							value='eng'
							name='language'
						>
							<MenuItem value='eng'>English</MenuItem>
							<MenuItem value='it'>Italian</MenuItem>
							<MenuItem value='ru'>Russian</MenuItem>
						</Select>
						{/*onChange={changeFormat}*/}
						{/*value={format}*/}
					</Toolbar>
				</AppBar>
			</div>
		)}</ThemeContext.Consumer>
	)
}

// var StyledAppBar = styled(({ open, theme, drawerWidth, ...other }) => {
// 	return <AppBar {...other} classes={{root: 'root'}}/>
// })`
// 	&.root {
// 		transition: ${props => props.theme.transitions.create(['margin', 'width'], {
// 	easing: props.theme.transitions.easing.sharp,
// 	duration: props.theme.transitions.duration.leavingScreen
// })};
// 	${props => props.open &&
// 	css`
// 		width: calc(100% - ${props => props.drawerWidth}px);
// 		margin-left: ${props => props.drawerWidth}px;
// 		transition: ${props => props.theme.transitions.create(['margin', 'width'], {
// 		easing: props.theme.transitions.easing.easeOut,
// 		duration: props.theme.transitions.duration.enteringScreen,
// 	})};
// 	`
// 	}
//
// 	& .go-back {
// 		margin-left: auto;
// 		margin-right: 15px;
// 	}
// `

export default NavBar