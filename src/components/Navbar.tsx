import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <header>
      <nav className='flex justify-center items-center gap-4'>
        <a href='#experience' className='text-gray-800 dark:text-white'>
          {t('navbar.experience')}
        </a>
        <a href='#projects' className='text-gray-800 dark:text-white'>
          {t('navbar.projects')}
        </a>
        <a href='#about' className='text-gray-800 dark:text-white'>
          {t('navbar.about')}
        </a>
        <a href='#contact' className='text-gray-800 dark:text-white'>
          {t('navbar.contact')}
        </a>
        <div className='w-6 cursor-pointer'>
          <svg
            onClick={toggleLanguage}
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15'
            />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
