import { useTranslation } from 'react-i18next'
import { ExperienceItem } from '../components/ExperienceItem'

const Experience: React.FC = () => {
  const { t } = useTranslation()

  // Se obtienen los trabajos traducidos desde el archivo de idioma
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
      icon: string
    }[]
    description: string
    achievements: string[]
  }[]

  return (
    // Sección anclable de trabajos, con margen inferior y ajuste de scroll
    <section id='experience' className='mb-16 scroll-mt-12'>
      <h2 className='text-4xl md:text-5xl font-light dark:text-white mb-16'>
        {t('experience.title')}
      </h2>

      {/* Lista de trabajos renderizada dinámicamente */}
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
    </section>
  )
}

export default Experience
