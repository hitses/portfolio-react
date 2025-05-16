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

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem('color-theme') === 'dark') {
      return true
    } else if (localStorage.getItem('color-theme') === 'light') {
      return false
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document
        .getElementById('theme-toggle-dark-icon')
        ?.classList.remove('hidden')
      document
        .getElementById('theme-toggle-light-icon')
        ?.classList.add('hidden')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.remove('dark')
      document
        .getElementById('theme-toggle-light-icon')
        ?.classList.remove('hidden')
      document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
      localStorage.setItem('color-theme', 'dark')
    }
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }, [isDarkMode])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

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
          className='fixed left-8 top-2 md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-none dark:text-gray-400 dark:hover:bg-gray-700  bg-neutral-300 dark:bg-neutral-700'
          aria-controls='navbar-hamburger'
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(prev => !prev)}
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

        <nav className='hidden md:flex bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-stone-100 flex-col md:flex-row justify-center items-center gap-4 border border-b-1 border-slate-700 rounded-full px-4 py-0.5 pt-1'>
          {navElements.map(element => (
            <a
              key={element.label}
              href={element.href}
              className={`hover:text-amber-300 transition-colors ${
                activeSection === element.href.replace('#', '')
                  ? 'text-amber-300 font-semibold'
                  : ''
              }`}
              onClick={handleLinkClick}
            >
              {element.label}
            </a>
          ))}

          <div className='w-6 cursor-pointer hover:text-amber-300 transition-colors'>
            <Multilanguage
              toggleLanguage={() => {
                toggleLanguage()
                setIsMenuOpen(false)
              }}
            />
          </div>

          <button
            onClick={() => {
              toggleTheme()
              setIsMenuOpen(false)
            }}
            type='button'
            className='focus:outline-none focus:ring-0'
          >
            <Sun />
            <Moon />
          </button>
        </nav>

        <nav
          id='navbar-hamburger'
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-fit fixed top-20 left-8 bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-stone-100 border border-b-1 border-slate-700 rounded-lg px-4 py-0.5 pt-1`}
        >
          {navElements.map(element => (
            <React.Fragment key={element.label}>
              <a
                href={element.href}
                className={`block hover:text-amber-300 transition-colors mb-4 ${
                  activeSection === element.href.replace('#', '')
                    ? 'text-amber-300 font-semibold'
                    : ''
                }`}
                onClick={handleLinkClick}
              >
                {element.label}
              </a>
            </React.Fragment>
          ))}

          <div className='w-6 cursor-pointer hover:text-amber-300 transition-colors mb-4'>
            <Multilanguage
              toggleLanguage={() => {
                toggleLanguage()
                setIsMenuOpen(false)
              }}
            />
          </div>

          <button
            onClick={() => {
              toggleTheme()
              setIsMenuOpen(false)
            }}
            type='button'
            className='focus:outline-none focus:ring-0'
          >
            <Sun />
            <Moon />
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar
