import React from 'react'
import { useTranslation } from 'react-i18next'

const Presentation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('presentation.title')}</h1>
      <p>{t('presentation.subtitle')}</p>
    </>
  )
}

export default Presentation
