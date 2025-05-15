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
    </section>
  )
}

export default Presentation
