// en.js
export default {
  translation: {
    navbar: {
      experience: 'Experience',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Contact'
    },
    presentation: {
      title: 'Hi, I am Jero',
      subtitle: {
        time: '{{years}} years as a ',
        specialist: 'Software Engineer in Web technologies',
        from: ' from Spain 🇪🇸',
        help: 'I help bring all kinds of ideas to life'
      },
      buttons: {
        contact: 'Contact me'
      }
    },
    experience: {
      title: 'Professional career',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    projects: {
      title: 'Projects',
      view: 'View project',
      projects: [
        {
          year: 2025,
          sector: 'Logistics',
          title: 'Tyboc',
          description:
            'An application that connects companies with truckers for automated loading and unloading management with secure payments.',
          link: 'https://tyboc.com'
        },
        {
          year: 2024,
          sector: 'Economy',
          title: 'Fading Suns Wallet',
          description:
            'An application that allows you to manage the money of characters in a tabletop role-playing game, with an expense and experience management system.',
          link: 'https://monedero-fading-suns.web.app/'
        }
      ]
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
