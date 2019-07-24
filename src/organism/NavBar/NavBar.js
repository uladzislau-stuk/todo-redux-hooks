import React, { useContext } from 'react'
import { I18nContext } from 'react-i18next'
import { AppBar, Toolbar, Select, MenuItem, Typography, IconButton, Box } from '@material-ui/core'
import { AppContext } from '../../contexts/AppContext'
import { WbSunny } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import uuid from 'uuid/v4'
import { availableLanguages } from '../../i18n'

function NavBar() {
	const { t } = useTranslation()
	// i18n.language - current language
	// i18n.languages - current, fallback, whitelist languages
	// Object.keys(i18next.services.resourceStore.data) - get all languages
	const { i18n } = useContext(I18nContext)

	function getLanguages(i18n) {
		let languages = availableLanguages.filter(lng => lng !== i18n.language)
		languages.unshift(i18n.language)

		return languages
	}

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
						value={i18n.language}
						name='language'
						onChange={e => (
							i18n.changeLanguage(e.target.value)
						)}>
						{getLanguages(i18n).map(lng => (
							<MenuItem key={uuid()} value={lng}>{t(`languages.${lng}`)}</MenuItem>
						))}
					</Select>
				</Toolbar>
			</AppBar>
		)}</AppContext.Consumer>
	)
}

export default NavBar