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
      title: 'Professional Career',
      achievements: 'Notable achievements',
      experienceItem: [
        {
          date: '2022 - present',
          title: 'Tyboc',
          position: 'Chief Technology Officer',
          description:
            'I led the development of an automated logistics management platform, enabling integration with secure payments through Stripe and PayPal. I implemented an order and shipping management system. I implemented the integration of a mapping system for real-time delivery route and location optimization.',
          achievements: [
            'I developed the first automated logistics management platform for the heavy goods transport sector',
            "I implemented a responsive and accessible design, improving the platform's UX/UI and reducing loading time",
            'Mentoring two junior developers, facilitating their technical growth'
          ]
        },
        {
          date: '2023',
          title: 'Muchosol',
          position: 'Backend Developer',
          description:
            'I developed a vacation package management gateway between the proprietary API and third-party APIs. I implemented an event queue system for booking management. I fixed bugs in the front-end and client service for sample and payment management.',
          achievements: [
            'I implemented a management gateway for a major international tourism company',
            'Developed an automated data transfer system between relational and non-relational databases',
            'Implemented an event queue management system for booking management'
          ]
        },
        {
          date: '2022',
          title: 'Capgemini',
          position: 'Backend Developer',
          description:
            'I implemented performance and responsiveness improvements for a banking management API. I performed DevOps tasks for server management and Lambda service deployment. I implemented an error and log management system for the API.',
          achievements: [
            'I implemented API versioning and configured it on AWS',
            'I developed an error and log management system, storing them in the database for access from the client',
            'I started creating a bridge API between two user management and role permissions APIs'
          ]
        },
        {
          date: '2021',
          title: 'Convotis Iberia',
          position: 'Fullstack Developer',
          description:
            'I optimized the performance of an environmental application for CO2 management. I participated in the development of a healthcare API for an international client. I participated in the revamp of the corporate website of a major fashion brand.',
          achievements: [
            'Implemented the use of Google authentication for user management',
            'I made optimization improvements to both the client and server side',
            'I developed part of a web page with a variable from the Angular framework to improve resource usage'
          ]
        },
        {
          date: '2020',
          title: 'NTT Data',
          position: 'Fullstack Developer',
          description:
            'I was the lead developer for maintaining an internal management application for the energy sector. I maintained the API for services deployed on AWS.',
          achievements: [
            'I implemented a table system to improve information management',
            'Maintained and added ETL functionality for daily data management',
            'I was in charge of version control management at GitLab'
          ]
        },
        {
          date: '2029',
          title: 'Lotería El Negrito',
          position: 'Fullstack Developer',
          description:
            'I developed solutions for an automated management application for shared lottery tickets before a notary. I added features for internal company management. I began developing an application for sharing lottery tickets between different administrations.',
          achievements: [
            'I carried out the implementation of services for a mobile application',
            'Developed data scraping functionality for information management',
            'Implemented the socket system for managing real-time communication between application users'
          ]
        }
      ]
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
