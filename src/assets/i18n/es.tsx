// es.js
export default {
  translation: {
    navbar: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto'
    },
    presentation: {
      title: 'Hola, soy Jero',
      subtitle: {
        time: '{{years}} años como ',
        specialist: 'Ingeniero de software en tecnologías Web',
        from: ' desde España 🇪🇸​',
        help: 'Ayudo a dar vida a todo tipo de ideas'
      },
      buttons: {
        contact: 'Contacta conmigo'
      }
    },
    experience: {
      title: 'Experiencia Laboral',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    projects: {
      title: 'Proyectos',
      view: 'Ver proyecto',
      projects: [
        {
          year: 2025,
          sector: 'Logística',
          title: 'Tyboc',
          description:
            'Aplicación que permite conectar a empresas con camioneros para la gestión de cargas y descargas de manera automatizada y con pagos seguros.',
          link: 'https://tyboc.com'
        },
        {
          year: 2024,
          sector: 'Economía',
          title: 'Monedero de Fading Suns',
          description:
            'Aplicación que permite gestionar el dinero de los personajes de un juego de rol de mesa, con un sistema de gestión de gastos y experiencia.',
          link: 'https://monedero-fading-suns.web.app/'
        }
      ]
    },
    about: {
      title: 'Sobre Mí',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    footer: {
      copyright: '© {{year}} [Tu Nombre]. Todos los derechos reservados.'
    }
  }
}
