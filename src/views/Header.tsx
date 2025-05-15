import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon } from '../assets/icons/Moon'
import { Sun } from '../assets/icons/Sun'
import { Multilanguage } from '../assets/icons/Multilanguage'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  const navElements = [
    { href: '#experience', label: t('navbar.experience') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#about', label: t('navbar.about') },
    { href: '#contact', label: t('navbar.contact') }
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

      <header className='sticky top-1 w-[450px] mx-auto mt-1'>
        <nav className='bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-stone-100 flex justify-center items-center gap-4 border border-b-1 border-slate-700 rounded-full px-4 py-0.5 pt-1'>
          {navElements.map(element => (
            <a
              key={element.label}
              href={element.href}
              className='hover:text-amber-300 transition-colors'
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
      </header>
    </>
  )
}

export default Navbar
