import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './assets/i18n/es'
import en from './assets/i18n/en'

const resources = {
  es,
  en
}

const savedLang = localStorage.getItem('i18nextLng') || 'es'

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
