import { useTranslation } from 'react-i18next'
import { Project } from '../components/Project'

const Projects: React.FC = () => {
  const { t } = useTranslation()

  // Se obtienen los proyectos traducidos desde el archivo de idioma
  const projects = t('projects.projects', { returnObjects: true }) as {
    year: number
    sector: string
    title: string
    description: string
    link: string
    img: string
  }[]

  return (
    // Sección anclable de proyectos, con margen inferior y ajuste de scroll
    <section id='projects' className='mb-24 scroll-mt-12'>
      <h2 className='text-4xl md:text-5xl font-light dark:text-white mb-16'>
        {t('projects.title')}
      </h2>

      {/* Lista de proyectos renderizada dinámicamente */}
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
