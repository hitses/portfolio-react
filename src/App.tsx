import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Header from './views/Header'
import Presentation from './views/Presentation'
import Experience from './views/Experience'
import Projects from './views/Projects'
import About from './views/About'
import Footer from './views/Footer'

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
