import React from 'react'
import { useTranslation } from 'react-i18next'

const Presentation: React.FC = () => {
  const { t } = useTranslation()

  const yearDate = new Date().getFullYear() - 2019

  return (
    <section className='py-36'>
      {/* Avatar */}
      <div className='relative'>
        <img
          className='w-16 h-16 rounded-full'
          src='/avatar.webp'
          alt='Jerónimo Gascón mirando hacia la derecha con gafas de sol'
        />
        <span className='bottom-0 left-12 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
      </div>
      {/* Avatar */}

      {/* Info */}
      <h1 className='mt-8 mb-4 text-4xl font-extrabold dark:text-white'>
        {t('presentation.title')}
      </h1>

      <p className='text-2xl font-normal text-gray-500 dark:text-gray-400 w-[400px] text-pretty'>
        {t('presentation.subtitle.time', { years: yearDate })}
        <span className='text-amber-300'>
          {t('presentation.subtitle.specialist')}
        </span>{' '}
        <span>{t('presentation.subtitle.from')}</span>
        <span>{t('presentation.subtitle.help')}</span>
      </p>
      {/* Info */}

      {/* Links */}
      <div className='flex gap-4 mt-8'>
        <a
          href='mailto:jerogassan@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-none text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring-none active:bg-black mt-8'
        >
          <svg
            className='w-5 h-5 text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0-9 6.5L3 8'
            />
          </svg>
          Contacta conmigo
        </a>

        <a
          href='https://www.linkedin.com/in/jerogassan/'
          target='_blank'
          className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-none text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black mt-8 group'
        >
          <svg
            className='w-5 h-5 text-gray-800 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'
              clipRule='evenodd'
            />
            <path d='M7.2 8.809H4V19.5h3.2V8.809Z' />
          </svg>
          LinkedIn
        </a>
      </div>
      {/* Links */}
    </section>
  )
}

export default Presentation
