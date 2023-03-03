import i18n from 'i18next'
import Languagedetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend)
	.use(Languagedetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: true,
		detection: {
			order: ['querString', 'cookie'],
			cache: ['cookies'],
		},
		interpolation: {
			escapeValue: false,
		},
	})
export default i18n
