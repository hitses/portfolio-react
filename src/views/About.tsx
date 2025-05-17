import { useTranslation } from 'react-i18next'
import { Github } from '../assets/icons/Github'
import { OuterLinkedin } from '../assets/icons/OuterLinkedin'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='mb-16 scroll-mt-12'>
      <h2 className='text-4xl md:text-5xl font-light mb-16 dark:text-white'>
        {t('about.title')}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>
        <div className='lg:col-span-7 order-2 lg:order-1'>
          <div className='space-y-8'>
            {/* Breve biografía */}
            <p className='text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 text-pretty'>
              {t('about.description.earning')}
            </p>

            <p className='text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 text-pretty'>
              {t('about.description.actually')}
            </p>
            {/* Breve biografía */}

            {/* Redes sociales */}
            <div className='pt-4'>
              <div className='inline-flex items-center space-x-4'>
                <a
                  href='https://www.linkedin.com/in/jerogassan/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-neutral-800 dark:text-neutral-200 hover:text-neutral-400 transition-colors'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <OuterLinkedin />
                </a>

                <a
                  href='https://github.com/hitses'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-neutral-800 dark:text-neutral-200 hover:text-neutral-400 transition-colors'
                >
                  <span className='sr-only'>GitHub</span>
                  <Github />
                </a>
              </div>
            </div>
            {/* Redes sociales */}
          </div>
        </div>

        {/* Fotografía */}
        <div className='lg:col-span-5 order-1 lg:order-2'>
          <div className='relative aspect-[4/5] w-full'>
            <div className='absolute inset-0 bg-neutral-900 dark:bg-neutral-100 -rotate-2 transform'></div>
            <div className='absolute inset-0 overflow-hidden'>
              <img
                alt='Retrato informal de Jerónimo Gascón con su perrete en el monte'
                className='object-cover object-center'
                src='/photo.webp'
              />
            </div>
            <div className='absolute inset-0 border border-neutral-800 dark:border-neutral-200 rotate-1 transform'></div>
          </div>
        </div>
        {/* Fotografía */}
      </div>
    </section>
  )
}

export default About
