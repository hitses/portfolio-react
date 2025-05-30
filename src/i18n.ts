import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './assets/i18n/es'
import en from './assets/i18n/en'

// Se definen los recursos de traducción disponibles
const resources = {
  es,
  en
}

// Se obtiene el idioma guardado en localStorage o se usa 'es' (español) por defecto
const savedLang = localStorage.getItem('i18nextLng') || 'es'

// Se inicializa i18n con los recursos y configuración base
i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
