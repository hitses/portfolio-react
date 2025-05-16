import React from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../components/Project'

const Projects: React.FC = () => {
  const { t } = useTranslation()

  const projects = t('projects.projects', { returnObjects: true }) as {
    year: number
    sector: string
    title: string
    description: string
    link: string
    img: string
  }[]

  return (
    <section id='projects' className='mb-24 scroll-mt-12'>
      <h2 className='text-4xl md:text-5xl font-light dark:text-white mb-16'>
        {t('projects.title')}
      </h2>

      <div className='space-y-32'>
        {projects.map((project, index) => (
          <Project
            key={index}
            year={project.year}
            sector={project.sector}
            title={project.title}
            description={project.description}
            link={project.link}
            img={project.img}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
