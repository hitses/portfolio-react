import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document
        .getElementById('theme-toggle-dark-icon')!
        .classList.remove('hidden')
      document
        .getElementById('theme-toggle-light-icon')!
        .classList.add('hidden')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.remove('dark')
      document
        .getElementById('theme-toggle-light-icon')!
        .classList.remove('hidden')
      document.getElementById('theme-toggle-dark-icon')!.classList.add('hidden')
      localStorage.setItem('color-theme', 'dark')
    }
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem('color-theme') === 'dark') {
      return true
    } else if (localStorage.getItem('color-theme') === 'light') {
      return false
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }, [isDarkMode])

  return (
    <>
      {!isDarkMode && (
        <div
          id='light-background'
          className='fixed top-0 left-0 -z-10 h-full w-full bg-white'
        >
          <div className='fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
        </div>
      )}

      {isDarkMode && (
        <div
          id='dark-background'
          className='fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
        ></div>
      )}

      <header className='sticky top-1 w-[450px] mx-auto mt-1'>
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15'
              />
            </svg>
          </div>
          <button
            onClick={toggleTheme}
            type='button'
            className='focus:outline-none focus:ring-0'
          >
            {/* Sun icon */}
            <svg
              id='theme-toggle-dark-icon'
              className='w-6 h-6 text-gray-800 dark:text-white hidden hover:text-amber-300 cursor-pointer transition-colors duration-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z'
                clipRule='evenodd'
              />
            </svg>
            {/* Sun icon */}

            {/* Moon icon */}
            <svg
              id='theme-toggle-light-icon'
              className='w-5 h-5 text-gray-800 dark:text-white hover:text-slate-400 cursor-pointer transition-colors duration-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z'
                clipRule='evenodd'
              />
            </svg>
            {/* Moon icon */}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar
