import React from 'react'
import { useTranslation } from 'react-i18next'

import { Sun } from '../assets/imgs/Sun'
import { Moon } from '../assets/imgs/Moon'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const toggleTheme = () => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }

  return (
    <header className='sticky top-1 w-[425px] mx-auto mt-1'>
      <nav className='bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-stone-100 flex justify-center items-center gap-4 border border-b-1 border-slate-700 rounded-full px-4 py-0.5 pt-1'>
        <a
          href='#experience'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          {t('navbar.experience')}
        </a>
        <a
          href='#projects'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          {t('navbar.projects')}
        </a>
        <a
          href='#about'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          {t('navbar.about')}
        </a>
        <a
          href='#contact'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          {t('navbar.contact')}
        </a>
        <div className='w-6 cursor-pointer hover:text-amber-300 transition-colors duration-300'>
          <svg
            onClick={toggleLanguage}
            className='w-6 h-6'
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
        <button
          onClick={toggleTheme}
          type='button'
          className='focus:outline-none focus:ring-0'
        >
          <Sun />
          <Moon />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
