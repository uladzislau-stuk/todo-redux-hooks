import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const availableLanguages = ['en', 'ru']

i18n.use(XHR) // load translation using
	.use(LanguageDetector) // detect user language
	.use(initReactI18next) // pass the i18n instance to react-i18next.
	.init({
		fallbackLng: 'en', // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
		debug: true,
		whitelist: availableLanguages,

		interpolation: {
			escapeValue: false
		},
		react: {
			wait: true,
		}
	})

export default i18n