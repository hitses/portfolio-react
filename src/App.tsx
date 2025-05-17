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
    // Proveedor de contexto para que i18next esté disponible en toda la app
    <I18nextProvider i18n={i18n}>
      {/* Contenedor principal centrado con un ancho máximo y padding lateral */}
      <main className='max-w-[900px] mx-auto px-8 lg:px-0'>
        {/* Secciones principales del portfolio */}
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
