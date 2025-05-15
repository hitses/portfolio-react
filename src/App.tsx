import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <main className='max-w-[900px] mx-auto'>
        <Header />
        <Presentation />
        <Experience />
        <Projects />
        <About />
        <Footer />
      </main>
    </I18nextProvider>
  )
}

export default App
