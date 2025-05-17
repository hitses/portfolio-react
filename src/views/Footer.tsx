import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  // Año actual para mostrar en el copyright
  const actualYear = new Date().getFullYear()

  return (
    <footer>
      <div className='rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4'>
        {/* Texto de copyright con año y nombre */}
        <span className='text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90'>
          {t('footer.copyright', {
            year: actualYear,
            name: 'Jero'
          })}
        </span>

        {/* Lista con enlaces */}
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0'>
          <li>
            {/* Enlace mailto para contacto */}
            <a
              href='mailto:jerogassan@gmail.com'
              className='hover:underline'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('footer.contact')}
            >
              {t('footer.contact')}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
