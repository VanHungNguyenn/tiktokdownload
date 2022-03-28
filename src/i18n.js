import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		whitelist: ['en', 'fr', 'vi'],
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		detection: {
			order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
			caches: ['cookie', 'localStorage'],
			lookupFromPathIndex: 0,
			checkWhitelist: true,
		},
	})

export default i18n
