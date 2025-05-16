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
    badges: {
      name: string
      backgroundColor: string
      borderColor: string
      textColor: string
      icon: React.ReactNode
    }[]
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
          badges={experience.badges}
          description={experience.description}
          achievements={experience.achievements}
        />
      ))}
    </main>
  )
}

export default Experience
