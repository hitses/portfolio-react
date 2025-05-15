import React from 'react'
import { useTranslation } from 'react-i18next'

const Presentation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('presentation.title')}</h1>
      <p>{t('presentation.subtitle')}</p>
    </section>
  )
}

export default Presentation
