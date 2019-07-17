import React from 'react'
import { withTheme } from '@material-ui/styles'
import { WbSunny } from '@material-ui/icons'
import ThemeContext from '../../contexts/ThemeContext'
import { AppBar, Toolbar, Select, MenuItem, Typography, IconButton, Box } from '@material-ui/core'
import styled, { css } from 'styled-components'

function NavBar() {
	return (
		<ThemeContext.Consumer>{({ theme, isLightTheme, switchTheme }) => (
			<StyledAppBar
				theme={theme}
				isLightTheme={isLightTheme}
				classes={{
					root: 'root'
				}}>
				<Toolbar>
					<Typography
						className='logo'
						variant='h4'>
						Todo list
					</Typography>
					<div className='language'>language</div>
					<Box
						marginLeft='auto'
						marginRight={{
							xs: 2, sm: 3, md: 4
						}}>
						<IconButton
							onClick={switchTheme}
							aria-label='Switch theme'>
							<WbSunny htmlColor={isLightTheme
								? theme.palette.primary.contrastText
								: theme.palette.secondary.light
							}/>
						</IconButton>
					</Box>
					<Select
						isLightTheme={isLightTheme}
						value='eng'
						name='language'>
						<MenuItem value='eng'>English</MenuItem>
						<MenuItem value='it'>Italian</MenuItem>
						<MenuItem value='ru'>Russian</MenuItem>
					</Select>
					{/*onChange={changeFormat}*/}
					{/*value={format}*/}
				</Toolbar>
			</StyledAppBar>
		)}</ThemeContext.Consumer>
	)
}

var StyledAppBar = styled(({ theme, isLightTheme, ...other }) => (
	<AppBar {...other} />
))`
	${props => !props.isLightTheme && 
		css`
			&.root {
				background-color: ${props => { console.log(props.theme.palette.secondary); return props.theme.palette.grey.A400}} ;
			}
		`
	}
	${props => props.isLightTheme && 
		css`
			&.root {
				background-color: white;
			}
		`
	}
	
`

// not work
/*var StyledIconBar = styled(({ ...other }) => (
	<IconButton {...other} classes={{ root: 'root' }} />
))`
	&.root {
		margin-left: ${props => props.theme.spacing(5)}px;
	}
`*/

// not work
/*var StyledIconBar = styled(({...others}) => {
	console.log({...others})
	return <IconButton classes={{root: 'root'}}><WbSunny htmlColor='#fff'/></IconButton>
})`
	&.root {
		margin-left: ${props => props.theme.spacing(5)};
	}
`*/

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

export default withTheme(NavBar)