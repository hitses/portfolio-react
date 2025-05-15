import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('experience.title')}</h2>
      <p>{t('experience.description')}</p>
    </>
  );
};

export default Experience;
