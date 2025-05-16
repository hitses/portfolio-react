import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon } from '../assets/icons/Moon'
import { Sun } from '../assets/icons/Sun'
import { Multilanguage } from '../assets/icons/Multilanguage'
import { useActiveSection } from '../hooks/intersection'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  const sectionIds = ['home', 'projects', 'about']
  const activeSection = useActiveSection(sectionIds)

  const navElements = [
    { href: '#experience', label: t('navbar.experience') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#about', label: t('navbar.about') },
    { href: 'mailto:jerogassan@gmail.com', label: t('navbar.contact') }
  ]

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

      <header className='sticky top-1 w-[450px] mx-auto mt-1 z-10'>
        <button
          data-collapse-toggle='navbar-hamburger'
          type='button'
          className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-hamburger'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <nav
          id='navbar-hamburger'
          className='bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-stone-100 lg:flex justify-center items-center gap-4 border border-b-1 border-slate-700 rounded-full px-4 py-0.5 pt-1 hidden'
        >
          {navElements.map(element => (
            <a
              key={element.label}
              href={element.href}
              className={`hover:text-amber-300 transition-colors ${
                activeSection === element.href.replace('#', '')
                  ? 'text-amber-300 font-semibold'
                  : ''
              }`}
            >
              {element.label}
            </a>
          ))}
          <div className='w-6 cursor-pointer hover:text-amber-300 transition-colors'>
            <Multilanguage toggleLanguage={toggleLanguage} />
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
        <div className='hidden w-full' id='navbar-hamburger'>
          <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar
