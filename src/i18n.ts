import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      navbar: {
        experience: 'Experiencia',
        projects: 'Proyectos',
        about: 'Sobre mí',
        contact: 'Contacto'
      },
      presentation: {
        title: 'Hola, soy [Tu Nombre]',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      experience: {
        title: 'Experiencia Laboral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      projects: {
        title: 'Proyectos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      about: {
        title: 'Sobre Mí',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      footer: {
        copyright: '© {{year}} [Tu Nombre]. Todos los derechos reservados.'
      }
    }
  },
  en: {
    translation: {
      navbar: {
        experience: 'Experience',
        projects: 'Projects',
        about: 'About Me',
        contact: 'Contact'
      },
      presentation: {
        title: 'Hi, I am [Your Name]',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      experience: {
        title: 'Work Experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      projects: {
        title: 'Projects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      about: {
        title: 'About Me',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      footer: {
        copyright: '© {{year}} [Your Name]. All rights reserved.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already escapes values
    }
  });

export default i18n;
