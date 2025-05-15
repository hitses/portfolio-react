import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './assets/i18n/es'
import en from './assets/i18n/en'

const resources = {
  es,
  en
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Default language
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
