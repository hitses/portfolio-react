import React from 'react'
import { useTranslation } from 'react-i18next'
import { ExperienceItem } from '../components/ExperienceItem'

const Experience: React.FC = () => {
  const { t } = useTranslation()

  const experiencies = t('experience.experienceItem', {
    returnObjects: true
  }) as {
    date: string
    title: string
    position: string
    description: string
    achievements: string[]
  }[]

  return (
    <main className='mb-16'>
      <h2 className='text-4xl md:text-5xl font-light dark:text-white mb-16'>
        {t('experience.title')}
      </h2>

      {experiencies.map((experience, index) => (
        <ExperienceItem
          key={index}
          date={experience.date}
          title={experience.title}
          position={experience.position}
          description={experience.description}
          achievements={experience.achievements}
        />
      ))}

      {/* <ExperienceItem
        date='2022 - presente'
        title='Gestiones Tyboc S.L.'
        position='Director de Tecnología'
        description='Lideré el desarrollo de una plataforma de gestión logística automatizada, haciendo posible la integración con pagos seguros a través de Stripe y Paypal. Implementé un sistema de gestión de pedidos y envíos. Implementé la integración de un sistema de mapas para la optimización de rutas de entrega y ubicación en tiempo real.'
        achievements={[
          'Desarrollé la primera plataforma de gestión logística automatizada para el sector del transporte de mercancías pesadas',
          'Implementé un diseño adaptable y accesible, mejorando la UX/UI de la plataforma y reduciendo el tiempo de carga',
          'Mentorización de dos desarrolladores junior, facilitando su crecimiento técnico'
        ]}
      /> */}
    </main>
  )
}

export default Experience
