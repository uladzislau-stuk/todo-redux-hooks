import React from 'react'
import { AppBar, Toolbar, Select, MenuItem, Typography, IconButton, Box } from '@material-ui/core'
import { AppContext } from '../../contexts/AppContext'
import { WbSunny } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

function NavBar() {
	const { t } = useTranslation()

	return (
		<AppContext.Consumer>{({ theme, switchTheme}) => (
			<AppBar>
				<Toolbar>
					<Typography className='logo' variant='h4'>{t(`navBar.logo.name`)}</Typography>
					<Box
						marginLeft='auto'
						marginRight={{
							xs: 2, sm: 3, md: 4
						}}>
						<IconButton
							onClick={switchTheme}
							aria-label={t(`navBar.buttonSwitchTheme.ariaLabel`)}>
							<WbSunny htmlColor='#fff'/>
						</IconButton>
					</Box>
					<Select
						value='en'
						name='language'>
						<MenuItem value='en'>{t(`languages.en`)}</MenuItem>
						<MenuItem value='ru'>{t(`languages.ru`)}</MenuItem>
					</Select>
					{/*onChange={changeFormat}*/}
					{/*value={format}*/}
				</Toolbar>
			</AppBar>
		)}</AppContext.Consumer>
	)
}

export default NavBar