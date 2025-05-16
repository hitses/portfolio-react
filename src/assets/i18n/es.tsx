import {
  angular,
  aws,
  cloudflare,
  git,
  mongodb,
  mysql,
  nodejs,
  python
} from '../../utils/technologies'

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
      title: 'Trayectoria profesional',
      achievements: 'Logros destacados',
      experienceItem: [
        {
          date: '2022 - presente',
          title: 'Tyboc',
          position: 'Director de Tecnología',
          badges: [nodejs, mongodb, angular, cloudflare, git],
          description:
            'Lideré el desarrollo de una plataforma de gestión logística automatizada, haciendo posible la integración con pagos seguros a través de Stripe y Paypal. Implementé un sistema de gestión de pedidos y envíos. Implementé la integración de un sistema de mapas para la optimización de rutas de entrega y ubicación en tiempo real.',
          achievements: [
            'Desarrollé la primera plataforma de gestión logística automatizada para el sector del transporte de mercancías pesadas',
            'Implementé un diseño responsivo y accesible, mejorando la UX/UI de la plataforma y reduciendo el tiempo de carga',
            'Mentorización de dos desarrolladores junior, facilitando su crecimiento técnico'
          ]
        },
        {
          date: '2023',
          title: 'Muchosol',
          position: 'Desarrollador Backend',
          badges: [nodejs, mysql, angular, git],
          description:
            'Desarrollé una pasarela de gestión de paquetes vacacionales entre la API propietaria y APIs de terceros. Implementé un sistema de colas de eventos para la gestión de reservas. Corergí errores en la parte Frontend el servicio cliente sobre la muestra y gestión de pagos.',
          achievements: [
            'Implementé una pasarela de gestión para una importante empresa internacional de turismo',
            'Desarrollé un sistema de traspaso automatizado de datos entre bases de datos relacionales y no relacionales',
            'Implementé un sistema de gestión de colas de eventos para la gestión de reservas'
          ]
        },
        {
          date: '2022',
          title: 'Capgemini',
          position: 'Desarrollador Backend',
          badges: [nodejs, mysql, aws, git],
          description:
            'Realicé mejoras de rendimiento y respuesta en una API de gestión bancaria. Realicé tareas DevOps para la gestión de servidores y despliegue de servicios lambda. Implementé un sistema de gestión de errores y logs para la API.',
          achievements: [
            'Realicé la implementación del versionado de la API junto a su configuración en AWS',
            'Desarrollé un sistema de gestión de errores y logs almacenándolos en la base de datos para acceder desde el cliente',
            'Comencé a crear una API puente entre dos APIs de gestión de usuarios y permisos de roles'
          ]
        },
        {
          date: '2021',
          title: 'Convotis Iberia',
          position: 'Desarrollador Fullstack',
          badges: [nodejs, mongodb, mysql, angular, git],
          description:
            'Optimicé el rendimiento de una aplicación medioambiental para la gestión de CO2. Participé en el desarrollo de una API para el sector de la salud para un cliente internacional. Participé en la renovación de la página corporativa de una importante marca de moda.',
          achievements: [
            'Implementé el uso de autentificación de Google para la gestión de usuarios',
            'Realicé mejoras de optimización tanto de la parte cliente como del servidor',
            'Desarrollé parte de una página web con una variable del framework Angular para su mejora de uso de recursos'
          ]
        },
        {
          date: '2020',
          title: 'NTT Data',
          position: 'Desarrollador Fullstack',
          badges: [nodejs, python, mongodb, mysql, angular, aws, git],
          description:
            'Estuve como principal desarrollador del mantenimiento de una aplicación de gestión interna del sector energético. Estuve manteniendo el correcto funcionamiento de la API en los servicios desplegados en AWS.',
          achievements: [
            'Llevé a cabo la implementación de un sistema de tablas para la mejora de la gestión de la información',
            'Mantuve y añadí funcionalidades de una ETL para la gestión diaria de datos',
            'Estuve a cargo de la gestión del control de versiones en GitLab'
          ]
        },
        {
          date: '2029',
          title: 'Lotería El Negrito',
          position: 'Desarrollador Fullstack',
          badges: [nodejs, mysql, angular, git],
          description:
            'Desarrolle soluciones para una aplicación de gestión automática de lotería compartida ante notario. Añadí funcionalidades para la gestión interna de la empresa. Comencé el desarrollo de una aplicación para compartir lotería entre distintas administraciones.',
          achievements: [
            'Llevé a cabo la implementación de los servicios para una aplicación móvil',
            'Desarrollé la funcionalidad de scraping de datos para la gestión de la información',
            'Implementé el sistema de sockets para la gestión de la comunicación en tiempo real entre los usuarios de la aplicación'
          ]
        }
      ]
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
          link: 'https://tyboc.com',
          img: '/tyboc.webp'
        },
        {
          year: 2024,
          sector: 'Economía',
          title: 'Monedero de Fading Suns',
          description:
            'Aplicación que permite gestionar el dinero de los personajes de un juego de rol de mesa, con un sistema de gestión de gastos y experiencia.',
          link: 'https://monedero-fading-suns.web.app/',
          img: '/fadingSunsWallet.webp'
        }
      ]
    },
    about: {
      title: 'La persona detrás del trabajo',
      description: {
        earning:
          'Mi nombre es Jerónimo, aunque muchos me conocen como Jero. Comencé en el mundo de la programación por el 2019, después de haber trabajado como técnico y sentir una atracción creciente por el desarrollo. Esa curiosidad pronto se transformó en pasión y con el tiempo me permitió liderar técnicamente varios proyectos desde su concepción hasta su lanzamiento.',
        actually:
          'Entre los logros que más valoro está el desarrollo y la puesta en producción de una aplicación web corporativa para el sector logístico. Este proyecto no solo representó un reto técnico, sino también una oportunidad para demostrar cómo una solución bien diseñada puede tener un impacto real en operaciones complejas.'
      }
    },
    footer: {
      copyright: '© {{year}} [Tu Nombre]. Todos los derechos reservados.'
    }
  }
}
